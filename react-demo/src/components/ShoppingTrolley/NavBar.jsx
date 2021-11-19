// 函数组件

import React from 'react'

const NavBar =(props) => {
    const{total,handleReset} =props

        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light ">
                <span className="title">购物车中一共有：</span>
                <span className="badge badge-pill">
                    {total}
                </span>
                <span>件商品</span>
                <button className="btn btn-primary" onClick={()=>{handleReset()}}> 重置 </button>

            </div>
        );   
}
 
export default NavBar;