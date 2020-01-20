import React, { useEffect } from 'react';
import css from './Login.module.scss';
import { Row, Col, Button, Form, Input, Icon, Card } from 'antd';
const Login = props => {
  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched,
    validateFields
  } = props.form;

  useEffect(() => {
    // To disable submit button at the beginning.
    validateFields();
  }, [validateFields]);

  const handleSubmit = e => {
    e.preventDefault();

    validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };
  const hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  // Only show error after a field is touched.
  const usernameError = isFieldTouched('username') && getFieldError('username');
  const passwordError = isFieldTouched('password') && getFieldError('password');

  return (
    <Row type="flex" justify="center" align="middle" className={css.container}>
      <Col lg={6} md={8} sm={12}>
        <Card title="新村街道办事处后台管理系统">
          <Form layout="vertical" onSubmit={handleSubmit}>
            <Form.Item
              validateStatus={usernameError ? 'error' : ''}
              help={usernameError || ''}
            >
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }]
              })(
                <Input
                  prefix={<Icon type="user" className={css.Icon} />}
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item
              validateStatus={passwordError ? 'error' : ''}
              help={passwordError || ''}
            >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  prefix={<Icon type="lock" className={css.Icon} />}
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              disabled={hasErrors(getFieldsError())}
            >
              登录
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Form.create()(Login);
