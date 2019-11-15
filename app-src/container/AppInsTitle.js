import { Tabs, WhiteSpace } from 'antd-mobile';
import React, { Component } from 'react';
import '../index.css';
import AppInsMain from './AppInsMain';

export default class AppInsTitle extends Component {
    renderContent = tab =>
    (<AppInsMain/>);

  render() {
    const tabs = [
      { title: '推荐' },
      { title: '冬季' },
      { title: '宜家' },
      { title: '小清新' },
      { title: '小户型' },
      { title: '个性色彩' },
      { title: '彪' },
    ];

    return (
      <div>
        <Tabs tabs={tabs} renderTabBar={props => <div><Tabs.DefaultTabBar {...props} page={6} /><a><div className='ins-title-add'></div></a></div>}>
          {this.renderContent}
        </Tabs>
      </div>
    );
  }
}
