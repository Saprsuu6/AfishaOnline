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
  }
};

export default authService;
