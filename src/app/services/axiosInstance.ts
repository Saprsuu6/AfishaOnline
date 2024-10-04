import axios from 'axios';

import routes from '../routes';

// Создаем экземпляр axios с предустановками
const axiosInstance = axios.create({
  baseURL: 'https://resumeserver-production.up.railway.app'
  //   timeout: 10000, // Устанавливаем тайм-аут в 10 секунд
  //   headers: {
  //     'Content-Type': 'application/json' // Заголовки по умолчанию
  //     // 'Authorization': 'Bearer YOUR_TOKEN'  // Если требуется токен
  //   }
});

// Добавляем обработчик ошибок
axiosInstance.interceptors.response.use(
  (response) => response, // Если всё прошло успешно
  (error) => {
    // Обработка ошибок, например, если токен истек
    if (error.response && error.response.status === 401) {
      // Логика для выхода из системы или обновления токена
      alert('Unauthorized! Please log in again.');
      window.location.href = routes.addPost;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
