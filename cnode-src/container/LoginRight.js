import React, { Component } from 'react';
import '../index.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <div id = 'login-right'>
                    <div id= 'login-left-top'>
                        <p>关于</p>
                    </div>
                    <div className="login-right-center">
                        <p>CNode：Node.js专业中文社区</p>

                        <p>在这里你可以：</p>
                        <ul>
                            <li>向别人提出你遇到的问题</li>
                            <li>帮助遇到问题的人</li>
                            <li>分享自己的知识</li>
                            <li>和其它人一起进步</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}