import React, { Component } from 'react';
import { Menu, Col } from 'antd';
import { connect } from 'dva';
import './index.less';
const { SubMenu } = Menu;
const keys = [];


@connect(({getMenu:{navList}}) =>({navList}))
class NavList extends Component {
  state = {
    rootSubmenuKeys:[],
    openKeys: ['sports'],
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'getMenu/getMenu',
    }).then(()=> {
      this.getRootSubmenuKeys()
    })
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({ 
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

   //递归渲染菜单
   getMenuOption =  (navList) => {
        const {currLocale} = this.props;
        return navList.map((item) => {
          const name = currLocale === 'zh_CN' ? item.title : item.entitle;
            if(item.children) {
                return(
                    <SubMenu title={name} key={item.key}>
                        {this.getMenuOption(item.children)}
                    </SubMenu>
                )
            }
            return (
              <Menu.Item 
                title={name} 
                key={item.key} 
                onClick={() => {this.props.history.push(item.route)}}
                >
                  {name}
                </Menu.Item>
            )
        })
   }

   // 获取 rootSubmenuKeys
   getRootSubmenuKeys = () => {
    this.props.navList.map((item) => {
        keys.push(item.key)
        this.setState({
            rootSubmenuKeys: keys
        })
        return this.state.rootSubmenuKeys;
    })
   }

   render() {
    return (
    <Col span={4} className="nav-list">
      <div className="nav-logo">
        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
        <span className="logo-intr" >Umi~Practice</span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
      >
          {this.getMenuOption(this.props.navList)}
      </Menu>
    </Col>
    );
  }
}


export default NavList