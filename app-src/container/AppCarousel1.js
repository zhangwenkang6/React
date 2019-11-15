import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'

export default class AppCarousel1 extends React.Component {
  state = {
    data: ['e_02', 'e_02', 'e_02','e_02'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['e_02', 'e_02', 'e_02','e_02'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank style={{width:'100%',margin:'0'}}>
        <Carousel
          autoplay={true}
          autoplayInterval = {3000}
          infinite={true}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href=""
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://raw.githubusercontent.com/zhangwenkang6/React/master/images/${val}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}
