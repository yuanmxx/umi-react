import './index.less';
import React, { Component } from 'react';
import { connect } from 'dva';
import { Row, Col,Breadcrumb,ConfigProvider} from 'antd';
import Header from '@/components/Header';
import Footer from '@//components/Footer'
import NavList from '@//components/NavList'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import en_US from 'antd/lib/locale-provider/en_US';


@connect(({global}) => {
  return {
    currLocale: global.currLocale,
    localeLoad: global.localeLoad,
  }
})

class BasicLayout extends Component {
  componentDidMount() {
    // 初始化国际化
    const {dispatch} = this.props;
    dispatch({
      type: 'global/initlocal',
    });
  }


  render() {
    const {location: {pathname}, children, currLocale } = this.props;
      return (
        <ConfigProvider  locale={ currLocale === 'zh_CN' ? zh_CN : en_US }>   
        <Row className="container">
          <NavList { ...this.props }/>
          <Col span={20} className="normal">
            <Header { ...this.props }/>
            <div className="main">
              <div className="breadcrumb">
                <Breadcrumb separator=">">
                  
                  {
                    pathname.slice(1).split('/').length > 0 
                    ?
                      pathname.slice(1).split('/').map((item) => {
                        return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                      })
                    : 
                      ""
                  }
                </Breadcrumb>
              </div>
              {children}
            </div>
            <Footer />
          </Col>
        </Row>
        </ConfigProvider >
      );
    }
}


export default BasicLayout