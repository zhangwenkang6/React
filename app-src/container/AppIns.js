import React, { Component } from 'react';
import { NavBar, Icon} from 'antd-mobile';
import '../index.css';
import AppInsTitle from './AppInsTitle'

export default class AppIns extends Component {
    render() {
        return (
            <div>
                <NavBar style = {{backgroundColor:'#3fcccb',color:'#fff'}}
                rightContent={[
                    <Icon key="1" type="search" style={{ marginRight: '0px' }} />,
                ]}
                >
                    灵感
                </NavBar>
                <AppInsTitle/>
            </div>
        )
    }
}
