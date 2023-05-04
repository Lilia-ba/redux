import logo from './logo.svg';
import React from 'react';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';
import { CreateUser } from './components/create-user';
import {UserList} from './components/user-list';
import ProductList from './components/product-list';
import { CreateProduct } from './components/create-product';
import './App.css';

function App() {
  return (
    <div className="App">
       Hello Armenia
        <CreateUser />
        <UserList />
        <CreateProduct /> 
        <ProductList />
     </div>
  );
}

export default App;
