import React from 'react';
import ListItem from './listItem'

const ListPage = (props)=>{
    const {productList, handleDecrease, handleIncrease, handleDelete} = props
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
    return <>
            <div className="container">
                {productList.length === 0 && <div className="text-center">购物车是空的</div>}
                {
                    renderList()
                }
            </div>
        </>;
}

export default ListPage;