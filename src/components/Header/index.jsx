import React, { Component }  from 'react';
import { Avatar,Breadcrumb,Menu,Select } from 'antd';
import { connect } from 'dva';
import './index.less';
const { Option } = Select;

@connect(({global}) => {
  return{
    userInfo:global.userInfo
  }
})
 class Header extends Component {
  getMemu = () => {
    return(
      <Menu>
        <Menu.Item>
          <span onClick={this.logout}>
            退出登录
          </span>
        </Menu.Item>
      </Menu>
    )
  }

  logout = () => {
    const { dispatch } = this.props;
    dispatch({
      type:'global/logout'
    })
  }

   onLocaleChange = (value) => {
    this.props.dispatch({
      type: 'global/changeLocale',
      payload: value,
    })

  }

  out = () => {
    localStorage.clear();
    window.location.href = '/Login';
  }
  
  checkUserInfo = () => {
    try {
      const {userInfo} = JSON.parse(localStorage.getItem('userInfo'));
      return userInfo || this.out();
    } catch (e) {
      this.out();
    }
  }

    render() {
      const {currLocale} = this.props;
        return(
            <header className="title">
                <div className="person-pic">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <Breadcrumb.Item overlay={this.getMemu()} style={{marginLeft:'20px'}} separator="">
                    <span>{this.checkUserInfo()}</span>
                    </Breadcrumb.Item>
                    <Select
                      defaultValue={currLocale}
                      style={{ width: 100,marginLeft:'20px' }}
                      onChange={this.onLocaleChange}>
                      <Option value='zh_CN'>中文</Option>
                      <Option value='en_US'>English</Option>
                    </Select>
                </div>
            </header>
        )
    }
}

export default Header