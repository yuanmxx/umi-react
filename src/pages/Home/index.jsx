import React, { Component } from 'react';
import { Table, DatePicker } from 'antd';
import intl from 'react-intl-universal';
import './index.less';

const { Column } = Table;
console.log(intl);
export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Table
                    dataSource={[]}
                    scroll={{ x: 1500, y: 300 }}
                >
                    <Column title={intl.get('tableTitle.Name')} dataIndex="name" />
                    <Column title={intl.get('tableTitle.Sex')} dataIndex="sex" />
                    <Column title={intl.get('tableTitle.Age')} dataIndex="age" />
                    <Column title={intl.get('tableTitle.Address')} dataIndex="address" />
                </Table>
                <DatePicker onChange={this.onChange} />

            </div>
        );
    }
}
