import React from 'react';
import {Link} from 'react-router-dom';
import '../index.css';

export default function Header(){
    return(<div className = 'headerwarp'>
        <header>
            <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"></img>
            <input class="header-seach" type="text" value=""/>
            <div style = {{float:'right',lineHeight:'50px'}}>
                <Link to='/home'>首页</Link>
                <Link to='start'>新手入门</Link>
                <Link to='api'>API</Link>
                <Link to='about'>关于</Link>
                <Link to='login'>登陆</Link>
            </div> 
        </header>
        
    </div>)
}