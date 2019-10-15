import React, { Component } from 'react'

export default class Todoing extends Component {
    delete = (idx)=>{
        this.props.delTodo(idx);
    }
    render() {
        return (
            <div>
                <h1>正在进行</h1>
                <ul>
                    {
                        this.props.todo.map((item,idx) => <li key = {item}>
                            {item}------
                            <button onClick= {() => this.delete(idx)}>
                            删除</button>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}