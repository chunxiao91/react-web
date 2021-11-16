// 类组件  类组件中要注意this的指向问题 （这里留作类组件示例）

import React, { Component } from 'react';
import './listItem.css'

// 在类组件中绑定this有三种方法，在jsx中用bind，在构造函数中用bind，和直接用箭头函数。
class ListItem extends Component {

    // constructor(props) {
    //     super(props)
    //     // this.state={
    //     //     count: this.props.data.value  //  初始化购物车中的数量
    //     // }
    //     // 以下是演示在构造函数中使用bind绑定this, 不推荐这种方式，现在多用箭头函数。如果用此方式一定要在super之后使用bind。
    //     // this.handleDecrease = this.handleDecrease.bind(this)
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('this.props:', this.props, 'nextProps',nextProps)
    //     console.log('this.state:', this.state, 'nextState',nextState)      
    //     if(this.state.count === nextState.count) return false
    //     return true
    // }

    render() {
        console.log('item is rendering......')   
        return(
            <div className="row mb-3">
                <div className="col-6 themed-grid-col">
                    <span style={{ color: '#700000', fontSize: 20 }}>
                        {this.props.data.name}
                    </span>
                </div>
                <div className="col-2 themed-grid-col" >￥{this.props.data.price}</div>
                <div className={`col-2 themed-grid-col${this.props.data.count ? '' : '-s'}`}>
                    <button type="button" className="btn btn-primary" onClick={()=>{this.props.handleDecrease(this.props.data.id)}}>-</button>
                    <span className="digital">{this.props.data.count}</span>
                    <button type="button" className="btn btn-primary" onClick={()=>{this.props.handleIncrease(this.props.data.id)}}>+</button>
                </div>
                <div className="col-1 themed-grid-col"> ￥{this.props.data.price * this.props.data.count} </div>
                <div className="col-1 themed-grid-col" >
                    <button className="btn btn-danger" onClick={()=>{this.props.onDelete(this.props.data.id)}}>删除</button>
                </div>

            </div>
        );
    }
}
 
export default ListItem;