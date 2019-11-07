import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Pages from './Pages'
export default class Text extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            page:''
        }
    }

    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics/?tab=dev')
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({data:res.data});
        })
    }

    Page=(idx)=>{
        this.setState({
            page:idx
        })
    }
    componentDidUpdate(prevState,prevProps){
        if(prevProps.page !== this.state.page){        
            fetch('https://cnodejs.org/api/v1/topics/?tab=dev&page='+this.state.page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({data:res.data})
            });
        }
    }
    render() {
        return (
        <div className='all-back'>
            <ul>
                <div>
                {
                    this.state.data.map((item,idx)=>
                    <li key={idx} class="all-cell">
                        <img src={item.author.avatar_url} alt={item.author.loginname} class="all-img"/>
                        <div className='all-all'>
                            <div className='all-text'>
                                <span class="all-reply">{item.reply_count}/</span>
                                <span class="all-visit">{item.visit_count}</span>
                            </div>
                            <sapn class="all-share">分享</sapn>                               
                            <Link  to={'/topics/'+item.id}>{item.title}</Link>
                            <span class="all-time">1天前</span>
                            <div className='all-img1'></div>
                        </div>
                    </li>)
                }
                </div>
            </ul>
            <Pages getPages={this.Page} id='all-pages'/>
        </div>
        )
    }
}