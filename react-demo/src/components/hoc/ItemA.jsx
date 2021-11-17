// 用于展示高阶组件具体使用的业务组件
import React from 'react';
import withTooltip from './withToolTip';

const ItemA = (props) => {
    // 高阶函数是该业务组件的父组件，所以这里props是从高阶组件中传过来的
    return (
        <div className="container">
            <button type="btn">tooltip将会展示这里的文字</button>
            {
                props.action.showToolTip && (
                    <span>
                        {props.action.content}
                    </span>
                    
                )
            }
        </div>
    );
}
 // 把该业务组件当做参数传入高阶组件中
export default withTooltip(ItemA);