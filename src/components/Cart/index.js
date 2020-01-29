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
      items: [],
      showPreviewCart: false
    }
  }

  togglePreviewCart = (showCart) => {
    let toggleShow = !this.state.showPreviewCart;
    this.setState({
      showPreviewCart: showCart
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.items !== this.props.items) {
      productService.getManyProducts(nextProps.items)
      .then(items => this.setState({ items }))
    }
  }

  render() {

    const { items, showPreviewCart } = this.state;

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
            onItemDelete={this.props.delItem}
            showPreviewCart={this.togglePreviewCart}/>
        }
      </div>
    );
  }
}

const mapDispatchToProps = { delItem: cartActions.del };

const mapStateToProps = state => ({ items: state.cartReducer.items });

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
