import { Grid } from 'antd-mobile';
import React, { Component } from 'react';
import '../index.css';

const text = ['桌','床','以','几','柜','书架','沙发','家居饰品','户外家具','全部分类'];
const pic =  [require('../images/g_03.jpg'), require('../images/g_05.jpg'), require('../images/g_07.jpg'), require('../images/g_09.jpg'),
    require('../images/g_11.jpg'),require('../images/g_18.jpg'),require('../images/g_19.jpg'),require('../images/g_21.jpg'),
    require('../images/g_23.jpg'),require('../images/g_24.jpg')]
const data = Array.from(new Array(10)).map((_val, i) => ({
  icon: `${pic[i]}`,
  text: `${text[i]}`,
}));

const GridExample = () => (
  <div className='shop-grid'>
    <Grid data={data} hasLine={false} columnNum={5} itemStyle={{height: 'auto',width:'150%'}}/>
  </div>
);

// $(".am-grid-icon").css("cssText", "width:50% !important;");
// ReactDOM.render(<GridExample />, mountNode);

export default class AppShopGrid extends Component {

    render() {
        return (
            <div>
                <GridExample />
            </div>
        )
    }
}

