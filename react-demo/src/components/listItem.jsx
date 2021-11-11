// 类组件  类组件中要注意this的指向问题

import React, { Component } from 'react';
import './listItem.css'

// 在类组件中绑定this有三种方法，在jsx中用bind，在构造函数中用bind，和直接用箭头函数。
class ListItem extends Component {

    constructor(props) {
        super(props)
        this.state={
            count: 0
        }
        // 这里是演示在构造函数中使用bind绑定this, 不推荐这种方式，现在多用箭头函数。如果用此方式一定要在super之后使用bind。
        // this.handleDecrease = this.handleDecrease.bind(this)
    }

    doSomethingWithCount(){
        if(this.state.count <0){
            this.setState({
                count:0
            })
        }
    }

    handleIncrease =() =>{
        console.log('加法：')
        this.setState({
            count: this.state.count + 1
        })       
    }

    handleDecrease = (en)=>{ // 这里能捕捉到什么事件以及屏幕中的位置等信息
        console.log('减法：', en) 
        this.setState({
            count:this.state.count-1
        })
        this.doSomethingWithCount()
    }


    render() {    
        return(
            <div className="row mb-3">
                <div className="col-6 themed-grid-col">
                    <span style={{ color: '#700000', fontSize: 20 }}>
                        {this.props.data.name}
                    </span>
                </div>
                <div className="col-2 themed-grid-col" >￥{this.props.data.price}</div>
                <div className={`col-2 themed-grid-col${this.state.count ? '' : '-s'}`}>
                    <button type="button" className="btn btn-primary" onClick={this.handleDecrease}>-</button>
                    <span className="digital">{this.state.count}</span>
                    <button type="button" className="btn btn-primary" onClick={this.handleIncrease}>+</button>
                </div>
                <div className="col-1 themed-grid-col" >
                    <button className="btn btn-danger" onClick={()=>{this.props.onDelete(this.props.data.id)}}>删除</button>
                </div>

            </div>
        );
    }
}
 
export default ListItem;