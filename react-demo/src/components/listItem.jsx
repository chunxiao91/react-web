// 类组件  类组件中要注意this的指向问题

import React, { Component } from 'react';
import './listItem.css'

let count = 0

class ListItem extends Component {

    // 在类组件中绑定this有三种方法，在jsx中用bind，在构造函数中用bind，和直接用箭头函数。
    // 这里是为了演示在构造函数中使用bind绑定this, 不推荐这种方式，现在多用箭头函数
    // constructor(props) {
    //     super(props)
    //     // 一定要在super之后使用bind
    //     this.handleDecrease = this.handleDecrease.bind(this)
    // }

    doSomethingWithCount(){
        if(count <0){
            count =0
        }
    }

    handleDecrease = (en)=>{
        console.log('这里能捕捉到什么事件以及屏幕中的位置等信息：', en)
        count--
        this.doSomethingWithCount()
    }


    render() {
        const product = this.props.data       
        return(
            <div className="row mb-3">
                <div className="col-6 themed-grid-col">
                    <span style={{ color: '#700000', fontSize: 20 }}>
                        {product.name}
                    </span>
                </div>
                <div className="col-3 themed-grid-col" >￥{product.price}</div>
                <div className={`col-2 themed-grid-col${count ? '' : '-s'}`}>
                    <button type="button" className="btn btn-primary" onClick={this.handleDecrease}>-</button>
                    <span className="digital">{count}</span>
                    <button type="button" className="btn btn-primary">+</button>
                </div>
            </div>
        );
    }
}
 
export default ListItem;