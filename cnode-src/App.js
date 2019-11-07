import React, { Component } from 'react';
import Headers from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';
import LoginRight from './container/LoginRight';
import Right from './container/Right'

export default class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Headers/>
          <div className = 'main'>
            <div className = 'content'>
              <Route path='/home' component={Home} />
              <Route path='/api' component={Api}/>
              <Route path='/start' component={Start}/>
              <Route path='/about' component={About}/>
              <Route path='/login' component={Login}/>
            </div>
            <div className = 'sider'>
              <Route path='/login' component={LoginRight}/>
              <Route path='/home' component={Right} />
              <Route path='/api' component={Right} />
              <Route path='/start' component={Right} />
              <Route path='/about' component={Right} />
            </div>
            <div id="footer">
              <div>
                <div>
                  RSS | 源码地址
                </div>
              <div>
                <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>服务器赞助商为
                  <a>
                    <img src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" width="92px"/>
                  </a>
                ，存储赞助商为
                  <a>
                    <img src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" width="115px"/>
                  </a>
                ，由<a>
                    <img src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" width="166px"/>
                  </a>提供应用性能服务。
                </p>
                <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a>DigitalOcean(https://www.digitalocean.com/)</a></p>
            </div>
            </div>
            </div>
          </div>
        </div> 
      </Router>
    )
  }
}
