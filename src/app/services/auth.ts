import { IClient } from '../interfaces';
import axiosInstance from './axiosInstance';

const authService = {
  login: async (credentials: IClient) => {
    try {
      const response = await axiosInstance.post('/login', {
        username: credentials.username,
        password: credentials.password
      });

      console.log(response);

      // Если авторизация успешна, возвращаем успешный ответ
      if (response.status === 200) {
        return {
          success: true,
          message: 'Login successful!'
        };
      } else {
        // В случае ошибки возвращаем информацию о неуспешной авторизации
        return {
          success: false,
          message: 'Invalid login or password!'
        };
      }
    } catch (error) {
      // Логируем ошибку и возвращаем информацию о ней
      console.error('Error during login:', error);
      return {
        success: false,
        message: 'An error occurred during login. Please try again.'
      };
    }
  },

  checkAuthStatus: async () => {
    try {
      // Отправляем GET-запрос на сервер для проверки токена
      const response = await axiosInstance.get('/auth-status', { withCredentials: true });

      // Если запрос успешен (ответ с кодом 200)
      if (response.status === 200) {
        return {
          success: true,
          message: 'User is authenticated'
        };
      }
    } catch (error) {
      // Логируем ошибку и возвращаем информацию о том, что пользователь не авторизован
      console.error('Error during auth status check:', error);
      return {
        success: false,
        message: error || 'User is not authenticated'
      };
    }
  },

  logOut: async () => {
    try {
      // Отправляем запрос на сервер для logout
      const response = await axiosInstance.post('/logout', { withCredentials: true });

      // Если запрос успешен (ответ с кодом 200)
      if (response.status === 200) {
        return {
          success: true,
          message: 'User successfully logged out'
        };
      }
    } catch (error) {
      // Логируем ошибку и возвращаем информацию о том, что произошла ошибка
      console.error('Error during logout:', error);
      return {
        success: false,
        message: error || 'Logout failed'
      };
    }
  }
};

export default authService;
