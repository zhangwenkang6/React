import React from 'react'
import { TabBar } from 'antd-mobile';
import AppHome from "./AppHome";
import AppShop from "./AppShop";
import AppIns from "./AppIns";

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }
  render() {
    return (
        <div style={{ 
            position: 'fixed', 
            height: '100%', 
            width: '100%', 
            top: 0 
        }}>
            <TabBar
            unselectedTintColor="#949494"
            tintColor="#3fcccb"
            barTintColor="white"
            >
            <TabBar.Item
                title="首页"
                key="home"
                icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url("https://raw.githubusercontent.com/zhangwenkang6/React/master/images/home.png") center center /  21px 21px no-repeat` }}
                />
                }
                selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url("https://raw.githubusercontent.com/zhangwenkang6/React/master/images/home1.png") center center /  21px 21px no-repeat` }}
                />
                }
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                    });
                }}
            >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url("https://raw.githubusercontent.com/zhangwenkang6/React/master/images/linggan.png") center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url("https://raw.githubusercontent.com/zhangwenkang6/React/master/images/linggan1.png") center center /  21px 21px no-repeat` }}
              />
            }
            title="灵感"
            key="linggan"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
           <AppIns />
          </TabBar.Item>
          <TabBar.Item
          icon={
            <div style={{
              width: '40px',
              height: '40px',
              background: `url("https://raw.githubusercontent.com/zhangwenkang6/React/master/images/-.png") center center /  40px 40px no-repeat` }}
            />
          }>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url("https://raw.githubusercontent.com/zhangwenkang6/React/master/images/dianpu.png") center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url("https://raw.githubusercontent.com/zhangwenkang6/React/master/images/dianpu1.png") center center /  21px 21px no-repeat` }}
              />
            }
            title="店铺"
            key="dianpu"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          <AppShop/>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri:`https://raw.githubusercontent.com/zhangwenkang6/React/master/images/my.png`}}
            selectedIcon={{ uri:`https://raw.githubusercontent.com/zhangwenkang6/React/master/images/my1.png` }}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}