import React, { Component,useState,useEffect } from 'react'

export default class Topic extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            id:''
        }
    }
    
    componentDidMount(){
        var a=this.props.location.pathname;
        console.log(a);
        var b = a.split('/');
        var c = b[b.length-1];
        console.log(c);
        fetch('https://cnodejs.org/api/v1/topic/'+c)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.data);
            this.setState({data:res.data});
        })
    }
    render() {
        return (
            <div>
                <div className='topics-all'>
                    <div className = 'topics-header'>
                        <div className = 'topics-span'>
                            <h2 className='topics-title'>{this.state.data.title}</h2>
                            <span>●发布于{this.state.data.last_reply_at && this.state.data.last_reply_at.slice(0,10)}</span>
                            <span>●作者{this.state.data.author && this.state.data.author.loginname}</span>
                            <span>●{this.state.data.visit_count}浏览次数</span>
                            <span>●来自{this.state.data.tab}</span>
                        </div>
                        
                        <div className='topics-grey'></div>
                    </div>
                    <div dangerouslySetInnerHTML={{__html:this.state.data.content}} className='topics-content'></div>
                    <div className='topics-answer'>
                        <span>{this.state.data.reply_count} 回复</span>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.replies && this.state.data.replies[0] && 1+this.state.data.replies[0].content}} className='replies-content'></div>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.replies && this.state.data.replies[1] && 2+this.state.data.replies[1].content}} className='replies-content'></div>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.replies && this.state.data.replies[2] && 3+this.state.data.replies[2].content}} className='replies-content'></div>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.replies && this.state.data.replies[3] && 4+this.state.data.replies[3].content}} className='replies-content'></div>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.replies && this.state.data.replies[4] && 5+this.state.data.replies[4].content}} className='replies-content'></div>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.replies && this.state.data.replies[5] && 6+this.state.data.replies[5].content}} className='replies-content'></div>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.replies && this.state.data.replies[6] && 7+this.state.data.replies[6].content}} className='replies-content'></div>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.replies && this.state.data.replies[7] && 8+this.state.data.replies[7].content}} className='replies-content'></div>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.replies && this.state.data.replies[8] && 9+this.state.data.replies[8].content}} className='replies-content'></div>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.replies && this.state.data.replies[9] && 10+this.state.data.replies[9].content}} className='replies-content'></div>
                        <button dangerouslySetInnerHTML={{__html:this.state.data.replies && this.state.data.replies[10] && '......'}} className='replies-contents'></button>
                    </div>  
                </div>
                              
            </div>
        )
    }
}
