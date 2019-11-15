import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import AppCarousel from './AppCarousel';
import '../index.css';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                 <NavBar style = {{backgroundColor:'#3fcccb',color:'#fff'}}>
                    住吧家居
                </NavBar>
                <AppCarousel/>
                <div className='home-three1'><p>热门品牌</p></div>
                <div className='home-three2'><p>私人搭配师</p></div>
                <div className='home-three3'><p>选购指南</p></div>
                <div className='home-hot'>
                    <div className='home-hot-green'></div>
                    <p>热门推荐</p>
                </div>
                <div className='home-last'>
                    <p><a>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</a></p>
                </div>
            </div>
        )
    }
}