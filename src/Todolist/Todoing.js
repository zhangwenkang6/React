import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        return (
            <section id = 'section'>
                <h1 id = 'h1'>正在进行  <p id='span1'>{this.props.todo.length}</p></h1>
                    <ul>
                        {
                            this.props.todo.map((item,idx) => <li key = {item}>
                                <input type='checkbox' onChange = {() => this.props.chanTodo1(idx)}></input>
                                {item}------------------------------------
                                <button onClick= {() => this.props.delTodo(idx)}>
                                删除</button>
                            </li>)
                        }
                    </ul>
                <h1>已经完成 <p id='span1'>{this.props.over.length}</p></h1>
                    <ul>
                        {
                            this.props.over.map((item,idx) => <li key = {item}>
                            <input type='checkbox' onChange = {() => this.props.chanTodo2(idx)} checked={true}></input>
                            {item}------------------------------------
                            <button onClick= {() => this.props.delOver(idx)}>
                            删除</button>
                        </li>)
                        }
                    </ul>
            </section>
        )
    }
}