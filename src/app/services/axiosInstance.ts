import axios from 'axios';

// Создаем экземпляр axios с предустановками
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true
});

// Добавляем обработчик ошибок
axiosInstance.interceptors.response.use(
  (response) => response, // Если всё прошло успешно
  (error) => {
    // Обработка ошибок, например, если токен истек
    if (error.response && error.response.status === 401) {
      // Логика для выхода из системы или обновления токена
      alert('Unauthorized! Please log in again.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
