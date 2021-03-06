/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import {
    Avatar, Breadcrumb, Menu, Select,
} from 'antd';
import { connect } from 'dva';
import './index.less';
// import { setLocale } from 'umi-plugin-react/locale';


const { Option } = Select;
const Context = React.createContext({});
console.log('Context', Context);
@connect(({ global }) => {
    return {
        userInfo: global.userInfo,
    };
})
class Header extends Component {
  getMemu = () => {
      return (
          <Menu>
              <Menu.Item>
                  <span onClick={this.logout}>
                      退出登录
                  </span>
              </Menu.Item>
          </Menu>
      );
  }

  logout = () => {
      const { dispatch } = this.props;
      dispatch({
          type: 'global/logout',
      });
  }

   onLocaleChange = (value) => {
       const { dispatch } = this.props;
       dispatch({
           type: 'global/initlocal',
           payload: value,
       });
       // TODO: umi自己的插件实现
       //    setLocale(value, false);
   }

  checkUserInfo = () => {
      try {
          const userInfo = JSON.parse(localStorage.getItem('userInfo'));
          return userInfo.username || (window.location.href = '/Login');
      } catch (e) {
          this.logout();
      }
  }

  render() {
      const { currLocale } = this.props;
      return (
          <header className="title">
              <div className="person-pic">
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <Breadcrumb.Item overlay={this.getMemu()} style={{ marginLeft: '20px' }} separator="">
                      <span>{this.checkUserInfo()}</span>
                  </Breadcrumb.Item>
                  <Select
                      defaultValue={currLocale}
                      style={{ width: 100, marginLeft: '20px' }}
                      onChange={this.onLocaleChange}
                  >
                      <Option value="zh-CN">中文</Option>
                      <Option value="en-US">English</Option>
                  </Select>
              </div>
          </header>
      );
  }
}

export default Header;
