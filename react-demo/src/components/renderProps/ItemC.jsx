
// ‘函数作为子组件’ ：ItemC是业务父组件

import React from 'react';
import WithToolTip from './withToolTip';

const ItemC = () => {
    return (
        <div className="container">
            <WithToolTip>
               {
                    ({showToolTip, content}) => (
                        <div>
                            <button type="btn">函数作为子组件传值：tooltipC 展示文字</button>
                            {showToolTip && (
                                <span>
                                    {content}
                                </span>
                            )
                            }
                        </div>
                    )        
                }               
            </WithToolTip>
        </div>
    );
}

export default ItemC;
