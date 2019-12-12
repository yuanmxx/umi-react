import React, { Component } from 'react';
import { Table } from 'antd';
import './index.less';
const { Column } = Table;
const data = [
    {1:1,2:2,3:3,4:4},
    {1:11,2:22,3:33,4:44},
    {1:111,2:222,3:333,4:444},
    {1:1111,2:2222,3:3333,4:4444},
]
export default class Home extends Component{
    render() {
        return(
            <div className="home">
                <Table 
                dataSource={data} 
                scroll={{ x: 1500, y: 300 }}
                >
                    <Column title="总金额" dataIndex="1" />
                    <Column title="出货数量" dataIndex="2" />
                    <Column title="来源单号" dataIndex="3" />
                    <Column title="来源单项次" dataIndex="4" />
                </Table>
            </div>
        )
    }
}