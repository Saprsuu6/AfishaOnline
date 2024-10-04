import { useEffect, useRef } from 'react';

import routes from '../../routes';
import authService from '../../services/auth';

const AddPost = () => {
  const hasLoggedIn = useRef(false); // Флаг для предотвращения двойного запроса

  const handleLogin = async () => {
    if (hasLoggedIn.current) return; // Предотвращаем повторный вызов
    hasLoggedIn.current = true;

    const username = prompt('Enter admin username:');
    const password = prompt('Enter admin password:');

    // Вызываем authService и передаем логин и пароль
    const result = await authService.login({ username: username as string, password: password as string });

    console.log(result);

    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
      window.location.href = routes.home;
    }
  };

  // Вызываем функцию авторизации при рендере компонента
  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <>
      <h1>Admin Page</h1>
      <p>Welcome to the administration section!</p>
      {/* Здесь можно добавить административные функции */}
    </>
  );
};

export default AddPost;
