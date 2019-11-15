import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';
import AppCarousel1 from './AppCarousel1';
import '../index.css';
import AppSearch from './AppSearch';
import AppShopGrid from './AppShopGrid'

export default class AppShop extends Component {
    render() {
        return (
            <div>
                 <NavBar style = {{backgroundColor:'#3fcccb',color:'#fff'}}
                 rightContent={[
                    <Icon key="0" type="shopping-cart"  />,
                    // 购物城这个小图标无法显示
                    <Icon key="1" type="ellipsis"  />,
                ]}>
                    商场
                </NavBar>
                <AppSearch />
                <AppCarousel1/>
                <AppShopGrid />
                <div className='shop-pic'>
                    <a><div className='shop-tee'></div></a>
                    <a><div className='shop-clock'></div></a>
                    <a><span className='shop-tee-text'>Top Art Studio 欧式风格精细...</span></a>
                    <a><span className='shop-clock-text'>顺顺工艺欧式风格塑料外框黑...</span></a>
                    <p className='shop-tee-p'>¥ 39.95</p>
                    <p className='shop-clock-p'>¥ 83.99</p>
                    <a><div className='shop-bed'></div></a>
                </div>
            </div>
        )
    }
}
