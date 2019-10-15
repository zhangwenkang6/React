import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo:[1,2,3]
        }
    }
    addItem = (msg)=>{
        this.setState({
            todo:[...this.state.todo,msg],
            msg:''
        })  
        console.log(msg);
    }
    delItem =(a) => {
        // this.state.todo.splice(a,1); //不要写
        // 深拷贝\浅拷贝
        //不要直接改变处理状态，setState是异步的

        var todo = [...this.state.todo];
        todo.splice(a,1);
        this.setState({
            todo:this.state.todo
        })
        console.log(a);
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo = {this.state.todo}
                delTodo ={this.delItem}/>
            </div>
        )
    }
}