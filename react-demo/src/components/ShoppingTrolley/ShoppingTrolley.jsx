import React, { useState } from 'react';
import './shoppingTrolley.css';
import NavBar from './NavBar';
import ListPage from './ListPage'
import {productsData} from './data.js'

function ShoppingTrolley() {
  const [productList, setProductList] = useState(productsData)

  const handleReset = () => { // 将所有的物件的数量都重置为0
    const _list = productList.map(item => {
      const _item = { ...item }
      _item.count = 0
      return _item
    })
    setProductList(_list)
  }

  const handleDelete = (id) => {
    setProductList(productList.filter(item => item.id !== id)) // fiflter方法返回新数组
  }

  const handleIncrease = (id) => {
    console.log('加法：'+ id)
    const _data = productList.map((item)=>{
      if (item.id === id){
        const _item={...item}
        _item.count++
        return _item
      } else{
        return item
      }
    })
    setProductList(_data)     
  }

  const handleDecrease = (id) => {
    console.log('减法：'+ id)
    const _data = productList.map((item)=>{
      if (item.id === id){
        const _item={...item}
        _item.count--
        if(_item.count<0) _item.count= 0
        return _item
      } else{
        return item
      }
    })
    setProductList(_data)
  }


  return (
    <>
      <NavBar handleReset={handleReset} total={productList.length}/>
      <ListPage 
        productList={productList} 
        handleDecrease={handleDecrease}
        handleIncrease={handleIncrease}
        handleDelete={handleDelete}
        />
    </>
  );
}

export default ShoppingTrolley;
