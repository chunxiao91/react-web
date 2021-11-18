// 用于展示‘函数作为子组件’：鼠标移入和移出的状态

import React from 'react';

    class WithToolTip extends React.Component{
        state={
            showToolTip:false,  // 鼠标移入和移出
            content:''          // 移入后显示的内容
        }

        handleOver=(ev) => this.setState(
            {
                showToolTip:true,
                content: ev.target.innerText // 当前鼠标移入的内容
            }
        )
        handleOut = () => this.setState(
            {
                showToolTip:false,
                content: ''
            }
        )
        render() {
            return(
                <div onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
                    {this.props.children(this.state)}
                </div>
            )
        }

    }
 
export default WithToolTip ;