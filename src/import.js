import React,{Component,Fragment} from 'react';

//组件生命周期
class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
        
        console.log('constructor',this.props.word);
	}
	static getDerivedStateFromProps(nextProps, prevState){
		console.log('2-getDerivedStateFromProps');
		return null;
	}
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log(1)
            this.setState({
                time: new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(){
		console.log('getsnapshot');
		return true;
    }
    componentDidUpdate(){
        console.log('didupdate');
        
    }
    render(){
        console.log('render');

        return (
            <Fragment>
                <div>{this.state.time}</div>
                <div>hello{this.props.word}</div>
            </Fragment>
        );
    }
}

//export default ShowTime; //默认导出

export {ShowTime};  //命名导出