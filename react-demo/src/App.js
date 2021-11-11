import './App.css';
import ListItem from './components/listItem'
import ListItemFun from './components/listItemFun';

const productList = [
  {
    id: 1,
    name:'Sony耳机1',
    price: 1001,
    stock: 10,
  },
  {
    id: 2,
    name:'Sony耳机2',
    price: 1001,
    stock: 10,
  },
  {
    id: 3,
    name:'Sony耳机3',
    price: 1001,
    stock: 10,
  }
]

const renderList = () => {
  return productList.map((item, index) => {
   return  <ListItem key={index} data={item}></ListItem>
  })
}

function App() {
  return (
    <div className="container">
      { productList.length === 0 && <div className="text-center">购物车是空的</div>}
      {
        renderList()
      }
      <ListItemFun/>
    </div>
  );
}

export default App;
