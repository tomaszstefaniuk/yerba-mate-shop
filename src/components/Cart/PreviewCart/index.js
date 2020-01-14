import React from 'react';
import './PreviewCart.scss';


class PreviewCart extends React.Component {
  render() {
    return (
      <div
        className='preview-cart-container'
        onMouseEnter={() => this.props.showPreviewCart(true)}
        onMouseLeave={() => this.props.showPreviewCart(false)}
      >
        <div className='preview-cart'>
          <div>(Brak produktów w koszyku)</div>
          <div className='preview-cart__line'></div>
          <div className='preview-cart__total'>
            <div className='preview-cart__total__sub-div'>
              <p>Produkty:</p>
              <p>0zł</p>
            </div>
            <div className='preview-cart__total__sub-div'>
              <p>Dostawa:</p>
              <p>0zł</p>
            </div>
            <div className='preview-cart__total__sub-div'>
              <p><b>Do zapłaty:</b></p>
              <p><b>0zł</b></p>
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
