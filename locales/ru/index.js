export default {
  login: {
    title: 'Вход',
    authForm: {
      title: 'Auth',
      inputs: {
        email: {
          label: 'Email',
          placeholder: 'Введите email',
        },
        password: {
          label: 'Пароль',
          placeholder: 'Введите пароль',
        },
      },
      buttons: {
        showPassword: {
          ariaLabel: 'Переключение пароля',
        },
        submit: {
          title: 'Войти',
        },
      },
      messages: {
        unathorized: 'Логин или пароль некорректнен',
        defaultError: 'Что-то пошло не так',
        success: 'Успешный вход!',
        failure: 'Не удалось войти. Попробуйте снова.',
      },
      errors: {
        minLength: 'Минимальная длина {{minLength}} символов',
        maxLength: 'Максимальная длина {{maxLength}} символов',
        email: 'Должен быть корректный email',
      },
    },
  },
  profile: {
    title: 'Профиль',
  },
  tickets: {
    title: 'Тикеты',
  },
  root: {
    title: 'Главная',
  },
};
