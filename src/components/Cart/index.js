import React from 'react';
import styles from './Cart.scss';
import dataStore from '../../data/dataStore.json';


class Cart extends React.Component {
  render() {
    return (
      <div className='cart-wrapper'>
        <div className='cart' title="Pokaż mój koszyk">
          <i className='fas fa-shopping-cart'></i>
          <span className='cart-main0'>{dataStore.cart.main[0]}</span>
          <span className='cart-main1'>{dataStore.cart.main[1]}</span>
          <i className='fas fa-sort fa-sort-down'></i>
        </div>
      </div>
    );
  }
}


export default Cart;
