import React from 'react';
import './Cart.scss';
import dataStore from '../../data/dataStore.json';
import PreviewCart from './PreviewCart';
import { connect } from 'react-redux';
import cartActions from 'redux/actions/cartActions';
import productService from 'services/productService';


class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      showPreviewCart: false
    }
  }

  handleBasketSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user, items } = this.props
      if (user.hasOwnProperty('_id')) {
        alert('Dziękujemy! Na skrzynkę pocztową otrzymasz maila potwierdzającego zamówienie.');
        const { data } = await productService.submitBasket(items, user._id)
      } else {
        alert('Użytkownik niezalogowany!')
      }
    } catch(e) {
      console.log('e:', e)
    }
  }

  togglePreviewCart = (showCart) => {
    let toggleShow = !this.state.showPreviewCart;
    this.setState({
      showPreviewCart: showCart
    });
  }

  render() {

    const { showPreviewCart } = this.state;
    const { items } = this.props;

    return (
      <div className='cart-wrapper'>
        <div
          className='cart'
          onMouseEnter={() => this.togglePreviewCart(true)}
          onMouseLeave={() => this.togglePreviewCart(false)}
        >
          <i className='fas fa-shopping-cart'></i>
          <span className='cart-main0'>{dataStore.cart.main[0]}</span>
          <span className='cart-main1'>
            {items.length>0 ? `(${items.length} prod.)`:
              dataStore.cart.main[1]}
          </span>
          <i className={'fas fa-sort' + (showPreviewCart?' fa-sort-up':' fa-sort-down')}></i>
        </div>
        {this.state.showPreviewCart &&
          <PreviewCart
            items={items}
            handleBasketSubmit={this.handleBasketSubmit}
            onItemDelete={this.props.delItem}
            showPreviewCart={this.togglePreviewCart}/>
        }
      </div>
    );
  }
}

const mapDispatchToProps = { delItem: cartActions.del };

const mapStateToProps = state => ({ items: state.cartReducer.items, user: state.userReducer });

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
