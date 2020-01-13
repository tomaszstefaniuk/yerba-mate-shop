import React from 'react';
import './Cart.scss';
import dataStore from '../../data/dataStore.json';
import PreviewCart from './PreviewCart';


class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      showPreviewCart: false
    }
  }

  togglePreviewCart = (showCart) => {
    let toggleShow = !this.state.showPreviewCart;
    this.setState({
      showPreviewCart: showCart
    });
  }

  render() {
    return (
      <div className='cart-wrapper'>
        <div
          className='cart'
          onMouseEnter={() => this.togglePreviewCart(true)}
          onMouseLeave={() => this.togglePreviewCart(false)}
        >
          <i className='fas fa-shopping-cart'></i>
          <span className='cart-main0'>{dataStore.cart.main[0]}</span>
          <span className='cart-main1'>{dataStore.cart.main[1]}</span>
          <i className={'fas fa-sort' + (this.state.showPreviewCart?' fa-sort-up':' fa-sort-down')}></i>
        </div>
        {this.state.showPreviewCart &&
          <PreviewCart showPreviewCart={this.togglePreviewCart}/>
        }
      </div>
    );
  }
}


export default Cart;
