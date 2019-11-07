import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Good from './Good';
import All from './All';
import Ask from './Ask';
import Share from './Share';
import Job from './Job';
import Test from './Test';
import '../index.css';

export default class Home extends Component{
    render() {
        let url = this.props.match.url
        return (
            <div>
                <div className = 'home-header'>
                    <Link to={url+'/all'} onClick={()=>{a()}} onBlur={()=>{aa()}} id='home-header-a' className='home-header-a'>全部</Link>
                    <Link to={url+'/good'} onClick={()=>{b()}} onBlur={()=>{bb()}} id='home-header-b' className='home-header-a'>精华</Link>
                    <Link to={url+'/share'} onClick={()=>{c()}} onBlur={()=>{cc()}} id='home-header-c' className='home-header-a'>分享</Link>
                    <Link to={url+'/ask'} onClick={()=>{d()}} onBlur={()=>{dd()}} id='home-header-d' className='home-header-a'>问答</Link>
                    <Link to={url+'/job'} onClick={()=>{e()}} onBlur={()=>{ee()}} id='home-header-e' className='home-header-a'>招聘</Link>
                    <Link to={url+'/test'} onClick={()=>{f()}} onBlur={()=>{ff()}} id='home-header-f' className='home-header-a'>客户端测试</Link>
                </div>
                <div>
                    <Route path={`${url}/all`} component={All} />
                    <Route path={`${url}/good`} component={Good} />
                    <Route path={`${url}/share`} component={Share}/>
                    <Route path={`${url}/ask`} component={Ask}/>
                    <Route path={`${url}/job`} component={Job}/>
                    <Route path={`${url}/test`} component={Test}/>
                </div>
            </div>
        )
    }
}
function a(){
    var a = document.getElementById('home-header-a');
    a.className = 'home-header-aa';
}
function aa(){
    var a = document.getElementById('home-header-a');
    a.className = 'home-header-a';
}
function b(){
    var b = document.getElementById('home-header-b');
    b.className = 'home-header-aa';}
function bb(){
    var a = document.getElementById('home-header-b');
    a.className = 'home-header-a';
}
function c(){
    var c = document.getElementById('home-header-c');
    c.className = 'home-header-aa';}
function cc(){
    var a = document.getElementById('home-header-c');
    a.className = 'home-header-a';
}
function d(){
    var d = document.getElementById('home-header-d');
    d.className = 'home-header-aa';}
function dd(){
    var a = document.getElementById('home-header-d');
    a.className = 'home-header-a';
}
function e(){
    var e = document.getElementById('home-header-e');
    e.className = 'home-header-aa';}
function ee(){
    var a = document.getElementById('home-header-e');
    a.className = 'home-header-a';
}
function f(){
    var f = document.getElementById('home-header-f');
    f.className = 'home-header-aa';}
function ff(){
    var a = document.getElementById('home-header-f');
    a.className = 'home-header-a';
}