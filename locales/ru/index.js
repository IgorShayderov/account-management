export default {
  login: {
    title: 'Вход',
    register: 'Нет аккаунта? Зарегистрируйтесь',
    fields: {
      username: {
        placeholder: 'Имя пользователя',
        label: 'Введите имя',
      },
      password: {
        placeholder: 'Пароль',
        label: 'Введите пароль',
      },
    },
    submit: {
      title: 'Войти',
    },
  },
  profile: {
    title: 'Профиль',
    fields: {
      name: {
        title: 'Имя',
      },
      surname: {
        title: 'Фамилия',
      },
      birthdate: {
        title: 'Дата рождения',
      },
      city: {
        title: 'Город',
      },
    },
  },
  ticket: {
    title: 'Тикет',
  },
  tickets: {
    title: 'Тикеты',
    fields: {
      id: {
        label: '#',
      },
      title: {
        label: 'Название',
      },
      text: {
        label: 'Описание',
      },
      author: {
        label: 'Автор',
      },
      date: {
        label: 'Дата создания',
      },
    },
  },
  root: {
    title: 'Главная',
    actions: {
      exit: 'Выход',
      close: 'Закрыть',
    },
  },
};
