import React from 'react';
import { uid } from 'react-uid';
import './PreviewCart.scss';

const DELIVERY_COST = 20;

const CartItem = ({
  _id,
  name,
  price,
  onItemDelete
}) => {
  return (
    <div className='preview-cart-item'>
      <div className='preview-cart-item__name'>{name}</div>
      <div className='preview-cart-item__price'>{`${price.toFixed(2)}zł`}</div>
      <i class="fas fa-trash-alt" onClick={(e) => onItemDelete(_id)}></i>
    </div>
  );
}

class PreviewCart extends React.Component {
  render() {
    const { items, onItemDelete } = this.props;
    const itemsPrice = Number(items.reduce(
      (total, item) => Number(item.price) + total,
      0
    ).toFixed(2));

    return (
      <div
        className='preview-cart-container'
        onMouseEnter={() => this.props.showPreviewCart(true)}
        onMouseLeave={() => this.props.showPreviewCart(false)}
      >
        <div className='preview-cart'>
          <div className='preview-cart-item-container'>{items.length <= 0 ? (
            `(Brak produktów w koszyku)`
          ) : (
            items.map(item => (
              <CartItem
                key={uid(item)}
                _id={item._id}
                name={item.name}
                price={item.price}
                onItemDelete={onItemDelete} />
            ))
          )}</div>
          <div className='preview-cart__line'></div>
          <div className='preview-cart__total'>
            <div className='preview-cart__total__sub-div'>
              <p>Produkty:</p>
              <p>{itemsPrice.toFixed(2)}zł</p>
            </div>
            <div className='preview-cart__total__sub-div'>
              <p>Dostawa:</p>
              <p>{DELIVERY_COST.toFixed(2)}zł</p>
            </div>
            <div className='preview-cart__total__sub-div'>
              <p><b>Do zapłaty:</b></p>
              <p><b>{(itemsPrice + DELIVERY_COST).toFixed(2)}zł</b></p>
            </div>
          </div>
          <div className='preview-cart__line'></div>
          <button className='preview-cart__order-btn'>ZAMÓW</button>
        </div>
      </div>
    );
  }
}

export default PreviewCart;
