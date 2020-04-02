import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

export default function Routes() {
  return(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </BrowserRouter>
  );
};