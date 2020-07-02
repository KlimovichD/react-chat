import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';
import { Block, Button } from '../../../components';
import { Link } from 'react-router-dom';
import '../components/RegisterForm.scss';

function RegisterForm(props) {
  const success = true;
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {success ? (
          <Form name="normal_login" className="login-form" initialValues={{ remember: true }}>
            <Form.Item
              name="email"
              validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
              help={!touched.email ? '' : errors.email}
              hasFeedback>
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
                size="large"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Ваше имя"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
              help={!touched.password ? '' : errors.password}>
              <Input
                id="password"
                type="password"
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Пароль"
                size="large"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item rules={[{ required: true, message: 'Please input your Password!' }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторите пароль"
                size="large"
              />
            </Form.Item>
            {isSubmitting && !isValid && <span>Ошибка</span>}
            <Button onClick={handleSubmit} type="primary" block="true" size="large">
              Зарегистрироваться
            </Button>
            <Link className="auth__register-link" to="/login">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <InfoCircleTwoTone className="site-form-item-icon" />
            </div>
            <h2>Подтвердте свой аккаунт</h2>
            <p>На вашу почту отправленно письмо со ссылкой для подтверждения аккаунта.</p>
          </div>
        )}
      </Block>
    </div>
  );
}

export default RegisterForm;
