import React, { Component } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, Col } from 'antd';
import intl from 'react-intl-universal';
import storage from '../../utils/localStorage'
import './index.less';

@connect(({global}) => {
    return {
      currLocale: global.currLocale,
    }
  })
@Form.create()
class Login extends Component {
  handleSubmit = e => {
      const { dispatch } = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        storage.add("userInfo",JSON.stringify(values))
        dispatch({
            type:'global/login',
            payload:values
        })
      }
    });
  };

  render() {
    const { form:{getFieldDecorator} } = this.props;
    const intlLogin = intl.get('user.login.loginBtn');
    const intlUsername = intl.get('user.login.placeholderName');
    const intlPwd = intl.get('user.login.placeholderPws');
    const intlforgetPwd = intl.get('user.login.forgetPwd');
    const intlRemember = intl.get('user.login.remember');
    const intluserPlaceholder = intl.get('user.login.userPlaceholder');
    const intlpwsPlaceholder = intl.get('user.login.pwsPlaceholder');
    const intlregister = intl.get('user.login.register');

    return (
    <div className="login">
        <Col className="login-wrap">
            <h1>umi-react</h1>
        <Form onSubmit={this.handleSubmit}>
            <Form.Item>
            {getFieldDecorator('username', {
                rules: [{ required: true, message: intlUsername }],
            })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={intluserPlaceholder}
                />,
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('password', {
                rules: [{ required: true, message:intlPwd }],
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder={intlpwsPlaceholder}
                />,
            )}
            </Form.Item>
            <Form.Item>
            {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
            })(<Checkbox>{intlRemember}</Checkbox>)}
                    <a href="" style={{float:'right'}}>
                        {intlforgetPwd}
                    </a>
            <Button type="primary" htmlType="submit" className="login-but">
            {intlLogin}
            </Button>
                    <a href="">{intlregister}</a>
            </Form.Item>
        </Form>
      </Col>
      </div>
    );
  }
}


export default Login