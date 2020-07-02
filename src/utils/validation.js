export default ({ isAuth, values, errors }) => {
  const rules = {
    email: (errors, value) => {
      if (!value) {
        errors.email = 'Введите почту';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Указана неверная почта';
      }
    },
    password: (errors, value) => {
      if (!value) {
        errors.password = 'Введите пароль';
      } else if (!/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.password = isAuth ? 'Неверный пароль' : 'Пароль слишком легкий';
      }
    },
  };
  Object.keys(values).forEach((key) => rules[key] && rules[key](errors, values[key]));
};
