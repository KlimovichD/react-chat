import React from 'react';
import { Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Block, Button } from '../../../components';
import { Link } from 'react-router-dom';

function LoginForm(props) {
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
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
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
          {isSubmitting && !isValid && <span>Ошибка</span>}
          <Button onClick={handleSubmit} type="primary" block="true" size="large">
            Войти в аккаунт
          </Button>
          <Link className="auth__register-link" to="/register">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
}

export default LoginForm;
