new JustValidate('.about-form', {
  rules: {
    name: {
      required: true,
      maxLength: 30
    },

    mail: {
      required: true,
      email: true
    },

    check: {
      required: true
    },
  },
  messages: {
      name: {
        required: 'Ошибка'
    },
      mail: {
        required: 'Ошибка'
    },
      check: {
        required: 'Ошибка'
      }
  }
});

new JustValidate('.head-popup__form', {
  rules: {
    login: {
      required: true,
      maxLength: 30
    },

    password: {
      required: true,
      password: true
    },

  },
  messages: {
    login: {
        required: 'Ошибка'
    },
    password: {
        required: 'Ошибка'
    },
  }
});
