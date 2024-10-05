import { useCallback, useRef } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import routes from '../routes';
import authService from '../services/auth';

const useAuth = () => {
  const hasLoggedIn = useRef(false); // Флаг для предотвращения двойного запроса
  const navigate = useNavigate();

  const { mutate: logOut } = useMutation(authService.logOut, {
    onSuccess(data) {
      alert(data?.message);
      navigate(routes.home);
    }
  });

  // Мутация для логина
  const { mutate: login, isLoading: authorising } = useMutation(authService.login, {
    onSuccess(data) {
      alert(data.message);

      if (!data.success) {
        navigate(routes.home); // Переход на домашнюю страницу при неудачном логине
      }
    }
  });

  // Мутация для проверки авторизации
  const { mutate: checkStatus, isLoading: checkingAuth } = useMutation(authService.checkAuthStatus, {
    onSuccess(data) {
      if (!data?.success) {
        handleLogin(); // Если пользователь не авторизован, запускаем логин
      }
    }
  });

  // Функция логина
  const handleLogin = useCallback(async () => {
    if (hasLoggedIn.current) return; // Предотвращаем повторный вызов
    hasLoggedIn.current = true;

    const username = prompt('Enter admin username:');
    const password = prompt('Enter admin password:');

    login({ username: username as string, password: password as string });
  }, [login]);

  // Функция, которая будет запускать проверку статуса при вызове
  const checkAuthStatus = useCallback(() => {
    checkStatus();
  }, [checkStatus]);

  // Возвращаем функции и состояние
  return {
    authorising,
    checkingAuth,
    logOut,
    handleLogin,
    checkAuthStatus
  };
};

export default useAuth;
