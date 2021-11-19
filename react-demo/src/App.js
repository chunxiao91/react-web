import React from 'react';
import './App.css';
import ShoppingTrolley from './components/ShoppingTrolley/ShoppingTrolley';
import NavBar from './components/NavBar';
import Home from './components/Home'
import RouterTest2 from './components/RouterTest2'
import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <div>
      <NavBar/>
      <div className = "container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shoppingTrolley" element={<ShoppingTrolley/>} />
          <Route path="/routerTest2"  element={<RouterTest2/>}/>
        </Routes>
      </div>

    </div>
    
  );
}

export default App;
