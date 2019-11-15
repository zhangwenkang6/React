import React, { Component } from 'react'
import { NavBar, Icon} from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import '../index.css';

export default class AppSearch extends React.Component {
  // componentDidMount() {
  //   this.autoFocusInst.focus();
  // }
  // onChange= (value) => {
  //   this.setState({ value });
  // };
  // clear = () => {
  //   this.setState({ value: '' });
  // };
  // handleClick = () => {
  //   this.manualFocusInst.focus();
  // }
  render() {
    return (<div className='shop-search'>
      <div className='shop-search-list'>
        <a><img src={`${require('../images/category.png')}`} /></a>
      </div>
      <SearchBar placeholder="输入关键字搜索" maxLength={8} />
      <WhiteSpace />
    </div>);
  }
}
