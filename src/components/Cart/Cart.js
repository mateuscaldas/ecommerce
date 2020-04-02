import React, { Component } from 'react';

import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import Title from '../Title';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../context';

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;

            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name='Seu' title='Carrinho' />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            }
            else {
              return <EmptyCart />
            }
          }}
        </ProductConsumer>        
      </section>
    );
  };
};

export default Cart;