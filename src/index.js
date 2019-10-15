import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ShowTime} from './import';
import Todolist from "./Todolist/Todolist";
import PropTypes from 'prop-types';
import Axios from 'axios';

export default class Request extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        Axios.get('https://api.apiopen.top/musicRankingsDetails?type=1')
            .then((res)=>{
                console.log(res);
                this.setState({
                    data: res.data.result
                })
            })
    }
    render() {
        return (
            <div>
                <h1>请求接口</h1>
                <ul>
                    {
                        this.state.data.map(
                            (item,index)=>(
                                <li key={index}>
                                    <h2>{item.album_title}</h2>
                                    <p>{item.author}</p>
                                </li>
                            )
                        )
                    }
                    
                </ul>
            </div>
        )
    }
}

ReactDOM.render(<Request/>,document.getElementById('root'));

// class Hello extends Component{
//     render(){
//         return <h1>hello {this.props.name}</h1>
//     }
// }
// Hello.propTypes = {
//     name:PropTypes.string.isRequired
// }
// Hello.defaultProps = {
//     name:'world'
// }
// ReactDOM.render(
//     <div style={{ height:'100px' ,backgroundColor : 'red' } }>
//         <Hello/>
//         <Hello name = 'zwk'/>
//     </div>,
//     document.getElementById('root')
// );

//ReactDOM.render(<Todolist/>,document.getElementById('root'));

// jsx表达式会被react转成一个对象
var ele = React.createElement(
    'div',
    {'id':'box'},
    'hello',
    React.createElement(
        'h1',
        {'id':'h'},
        'react'
    )
);
//var ele = React.createElement('div',{'id':'box'},'hello',React.createElement(('h1'),{'id':'h'},'react'));
//ReactDOM.render(<h1>{str} react</h1>,document.getElementById('root'));
//ReactDOM.render(ele,document.getElementById('root'));
var obj = {
    type: 'div',
    props: {
        id: 'box',
        class: 'box',
        children: ['hello',{
            type: 'h1',
            props: {
                id: 'h',
                class: 'h',
                children: ['react']
            }
        }]
    }
}

// function tick() { 
// 	const ele = (
// 		<div>
// 			<p>hello world</p>
// 			{new Date().toLocaleTimeString()}
// 		</div> 
// 	); 	
// 	ReactDOM.render(ele, document.getElementById('root')); 
// } 
// setInterval(tick, 1000);

//加载html文件、浏览器解析html生成DOM树
//link解析css规则，和DOM树结合生成render tree,浏览器渲染引擎渲染render tree
// 页面回流（重排）：内容改变、大小改变、结构改变,肯定会使页面重绘
// 页面重绘：把字体颜色、背景颜色等样式改变，不一定引起回流

// node.offsetLeft、node.offsetWidth等慎用
// var root = document.getElementById('root');
// var width = root.offsetWidth;
// setInterval(function(){
//     width += 1
//     root.style.width = width + 'px';
// },100)

// display、width、height、font-size等会引起页面回流
// document.body.style.width = '100px';
// document.body.style.height = '100px';
// 声明一个css的一个类
// .change{
//     width: 100px;
//     height: 100px;
// }
// document.body.className = 'change';

// console.time('a');
// var str = '';
// for(var i=0;i<1000;i++){
//     str += '<li>'+i+'</li>';
// }
// document.body.innerHTML = str;
// console.timeEnd('a');

function render(obj,container){
    var {type,props} = obj;
    // 文档碎片
    var fr = document.createDocumentFragment();

    var ele = document.createElement(type);
    for(var item in props){
        if(item === 'class'){
            ele.className = props[item];
        }else if(item === 'children'){
            for(var i=0;i<props[item].length;i++){
                if(typeof props[item][i] === 'object'){
                    render(props[item][i],ele);
                }else{
                    var txt = document.createTextNode(props[item][i]);
                    ele.appendChild(txt);
                }
            }
        }else{
            ele[item] = props[item];
        }
    }
    fr.appendChild(ele);
    container.appendChild(fr);
}
// render(obj,document.getElementById('root'));

// var e = <h1>hello</h1>;
// ReactDOM.render(ele,document.getElementById('root'));

// 函数定义
// function Hello(props){
// 	console.log(arguments)
// 	return(
// 		<div>
// 			<h1>Hello {props.namex}</h1>
// 			<h2>你好 {props.namex}</h2>
// 		</div>)
// } 

//类定义
// class Hello extends React.Component{
//     handleClick = ()=>{
//         console.log(this);
//         this.setState({content:'world'})
//     }
// 	render(){
// 		// this就是当前组件，包含
// 		//console.log(this)
// 		return(
// 			<div>
// 				<h1>Hello {this.props.namex}</h1>
// 				<h2>你好 {this.props.namex}</h2>
//                 <button onClick={this.handleClick}>Click</button>
//  			</div>
// 		)
// 	}
// } 
// ReactDOM.render(<Hello namex="React"/>, document.getElementById('root'));

// 类定义组件
// class Hello extends Component{
//     constructor(){
//         super();
//         this.state = {
// 			time: new Date().toLocaleString()
// 		}
// 		setInterval(()=>{
// 			this.setState({
// 				time: new Date().toLocaleString()
// 			})
// 		},1000)
//     }
//     render(){
//         return (
//             <Fragment>
//                 <div>{this.state.time}</div>
//                 <div>hello{this.props.word}</div>
//             </Fragment>
//         );
//     }
// }
// ReactDOM.render(<Hello word="react"/>,document.getElementById('root'));

// 函数定义组件（无生命周期函数）
// 当只是渲染结构时
// function Todo(props){
//     return (
//         <div>
//             {/* 条件渲染 */}
//             {props.list.length>=6?<h1>todo</h1>:''}
//             {props.list.length>=5 && <h1>todo</h1>}
//             <ul>
//                 {/* 循环渲染 */}
//                 {
//                     props.list.map(
//                         (item,index)=> index%2 === 0&&<li key={item}>{item}</li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
// var item = [1,2,3,4,5];
// ReactDOM.render(<Todo list={item}/>,document.getElementById('root'));


//ReactDOM.render(<ShowTime word="react"/>,document.getElementById('root'));

// class App extends React.Component {
// 	constructor(){
// 		super();
// 		this.state = {
// 			content:'hello'
// 		}
// 	}
// 	//要将事件对象参数放在最后一个
// 	handleClick = (name,ev)=>{
// 		console.log(name);
// 		console.log(ev);
// 	}
// 	// 将原生的onchange事件进行了优化，实现用户输入的实时响应处理
// 	handleChange = (e)=>{
// 		console.log(e.target.value);
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<p>{this.state.content}</p>
// 				<input type="text" onChange={this.handleChange}/>
// 				{/* <button onClick={this.handleClick.bind(this,'liu')}>Click</button> */}
//                 <button onClick={(e)=> this.handleClick('liu',e)}>Click</button>
// 			</div>
// 		)
// 	}
// }
// ReactDOM.render(<App />, document.getElementById('root'));

// class TodoList extends Component{
//     constructor(){
//         super();
//         this.state = {
//             inputValue:'hello'
//         }
//     }
//     // 不设置onChange事件，input无法修改里面的内容，重新设置state，render被调用，重新渲染
//     handleChange = (e)=>{
//         this.setState({
//             inputValue:e.target.value
//         })
//     }
//     render(){
//         return (
//             <div>
//                 <input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
//                 {/* <input type = 'text'/> //非受控组件 */}
//                 <button>提交</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <TodoList />,
//     document.getElementById('root')
// );

// class TodoList extends Component{
//     handleClick = ()=>{
//         console.log(this.inp.value);
//         console.log(this.refs);
//     }
//     render(){
//         return (
//             <div>
//                 <input type="text" defaultValue='hello' ref={inp=>this.inp = inp}/>
//                 <button onClick={this.handleClick}>提交</button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <TodoList />,
//     document.getElementById('root')
// );


// class TodoList extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			inputValue:'',
// 			list:[]
// 		}
// 	}

// 	handleChange = (e)=>{
// 		this.setState({inputValue:e.target.value})
// 	}
// 	buttonCLick = ()=>{
// 		this.setState({
// 			list:[...this.state.list,this.state.inputValue],
// 			inputValue:''
// 		})
// 	}
// 	itemDelete = (index)=>{
// 		let list = [...this.state.list];
// 		list.splice(index,1);
// 		this.setState({
// 			list:list
// 		})
// 	}
// 	render(){
// 		return(
// 			<Fragment>
// 				<div>
// 					<input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
// 					<button onClick={this.buttonCLick}>添加数据</button>
// 				</div>
// 				<ul>
// 					{
// 						this.state.list.map((item,index)=>{
// 							return <li key={index}>{item}  --- <button onClick={this.itemDelete.bind(this,index)}>删除</button></li>
// 						})
// 					}
// 				</ul>
// 			</Fragment>
// 		)
// 	}
// }
// ReactDOM.render(
//     <TodoList />,
//     document.getElementById('root')
// );

// var arr = [1,2,{a:100}];
// var b = JSON.parse(JSON.stringify(arr));
// b[2].a = 200;
// console.log(arr);
// console.log(b);

// 对象的拷贝
var a= {a:100,b:200};
var o = Object.assign({},a);
console.log(o===a);
console.log(o);
//Object.keys返回由属性名组成的一个数组
Object.keys(a).forEach((item)=>{
    console.log(item+':'+a[item]);
    //console.log(a[item]);
})
// 尽量不用for in
// for(var item in a){
//     console.log(a);
// }