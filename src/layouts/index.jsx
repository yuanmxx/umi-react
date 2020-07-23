import './index.less';
import React, { Component } from 'react';
import { connect } from 'dva';
import {
    Row, Col, Breadcrumb, ConfigProvider,
} from 'antd';
import CN from 'antd/lib/locale-provider/zh_CN';
import US from 'antd/lib/locale-provider/en_US';
import Header from '@/components/Header';
// import { formatMessage, setLocale } from 'umi-plugin-react/locale';

import Footer from '@//components/Footer';
import NavList from '@//components/NavList';

@connect(({ global }) => {
    return {
        currLocale: global.currLocale,
        localeLoad: global.localeLoad,
    };
})

class BasicLayout extends Component {
    // 初次渲染的时候
    componentDidMount() {
        this.initlocal();
    }

    // 初始化国际化
    initlocal = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'global/initlocal',
        });
    }


    render() {
        const { location: { pathname }, children, currLocale } = this.props;
        // TODO: umi自己的插件实现
        // console.log(formatMessage({ id: 'textaaa' }));
        return (
            <ConfigProvider locale={currLocale === 'zh-CN' ? CN : US}>
                <Row className="container">
                    <NavList {...this.props} />
                    <Col span={20} className="normal">
                        <Header {...this.props} />
                        <div className="main">
                            <div className="breadcrumb">
                                <Breadcrumb separator=">">

                                    {
                                        pathname.slice(1).split('/').length > 0
                                            ? pathname.slice(1).split('/').map((item) => {
                                                return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
                                            })
                                            : ''
                                    }
                                </Breadcrumb>
                            </div>
                            {children}
                        </div>
                        <Footer />
                    </Col>
                </Row>
            </ConfigProvider>
        );
    }
}


export default BasicLayout;
