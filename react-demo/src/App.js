import React, { useState } from 'react';
import './App.css';
import ListItem from './components/listItem'
import ListItemFun from './components/listItemFun';

const products = [
  {
    id: 1,
    name: 'Sony耳机1',
    price: 1001,
    stock: 10,
    count: 4, // 购物车数量初始值
  },
  {
    id: 2,
    name: 'Sony耳机2',
    price: 1001,
    stock: 10,
    count: 2,
  },
  {
    id: 3,
    name: 'Sony耳机3',
    price: 1001,
    stock: 10,
    count: 2,
  }
]

function App() {
  const [productList, setProductList] = useState(products)

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



  const renderList = () => {
    return productList.map((item, index) => {
      return <ListItem 
              key={index} 
              data={item} 
              onDelete={handleDelete} 
              handleDecrease={handleDecrease} 
              handleIncrease={handleIncrease}
              />
    })
  }

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={handleReset}> 重置 </button>
      {productList.length === 0 && <div className="text-center">购物车是空的</div>}
      {
        renderList()
      }
      <ListItemFun />
    </div>
  );
}

export default App;
