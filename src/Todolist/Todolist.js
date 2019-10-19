import React, { Component } from 'react'
import Todoing from './Todoing';
import Todoinput from './Todoinput';

export default class Todolist extends Component {
    open = () =>{
        if(!window.localStorage){
            alert("浏览器不支持localstorage");
            return false;
        }else{
            var storage = window.localStorage;
            storage.todo = '1,2,3';
            storage.over = '4,5,6';
        }
    }
    constructor(){
        var storage = window.localStorage;
        super();
        // this.open(); //重置
        this.state = {
            todo:storage.todo.split(","),
            over:storage.over.split(','),
        };
    }
    addItem = (msg)=>{
        var storage = window.localStorage;
        var rep = storage.todo.split(",")+storage.over.split(",");
        if(msg !== '' && rep.includes(msg)  === false){
            this.setState({
                todo:[...this.state.todo,msg],
                msg:'',
            })  
            storage.todo = storage.todo+','+msg;
            // console.log(storage.todo);
        }
        else if(msg !== '' && rep.includes(msg)  === true){
            alert('不允许加入相同名字的任务')
        }
    }
    delItem =(a) => {
        var todo1 = [...this.state.todo];
        var x = todo1[a];
        todo1.splice(a,1);
        this.setState({
            todo:todo1
        })
        // console.log(a);
        // console.log(x);
        var storage = window.localStorage;
        storage.todo = storage.todo.replace(x+',','');
        storage.todo = storage.todo.replace(','+x,'');
        console.log(storage.todo);
    }
    delItem1 =(a) => {
        var over1 = [...this.state.over];
        var x = over1[a];
        // console.log(a);
        // console.log(x);
        over1.splice(a,1);
        this.setState({
            over:over1
        })
        var storage = window.localStorage;
        storage.over = storage.over.replace(x+',','');
        storage.over = storage.over.replace(','+x,'');
        console.log(storage.over);
    }
    change1 =(a) => {
        var todo1 = [...this.state.todo];
        var b=todo1.splice(a,1);
        var over1 = [...this.state.over];
        over1.push(b);
        this.setState({
            todo:todo1,
            over:over1
        })
        var storage = window.localStorage;
        storage.todo = storage.todo.replace(b+',','');
        storage.todo = storage.todo.replace(','+b,'');
        storage.over = storage.over+','+b;
    }
    change2 =(a) =>{
        var over1 = [...this.state.over];
        var b=over1.splice(a,1);
        var todo1 = [...this.state.todo];
        todo1.push(b);
        this.setState({
            todo:todo1,
            over:over1
        })
        var storage = window.localStorage;
        storage.over = storage.over.replace(b+',','');
        storage.over = storage.over.replace(','+b,'');
        storage.todo = storage.todo+','+b;
    }
    render() {
        return (
            <div>
                <Todoinput addTodo={this.addItem}/>
                <Todoing todo = {this.state.todo}
                over = {this.state.over}
                delTodo ={this.delItem}
                delOver ={this.delItem1}
                chanTodo1 = {this.change1}
                chanTodo2 = {this.change2}/>
            </div>
        )
    }
}