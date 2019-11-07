import React, { Component } from 'react';
import '../index.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <div id = 'login-left'>
                    <div id= 'login-left-top'>
                        <a href='/home' id = 'login-left-top-home'>主页</a>
                        <p>/ </p>
                        <a href='/login' id = 'login-left-top-login'> 登录</a>
                    </div>
                    <form id = 'login-center'>
                        <div>
                            <label className= 'login-name'>用户名</label>
                            <div>
                                <input type="text"/>
                            </div>
                        </div>
                        <div>
                            <label className= 'login-passwd'>密码</label>
                            <div>
                                <input type="password"/>
                            </div>
                        </div>
                        <div>
                            <a href='./home'><div className='login-center-button'>登录</div></a>
                            <a>忘记密码了?</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}