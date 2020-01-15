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
        <div className='preview-cart-wrapper'>
          <div>(Dodane produkty)</div>
          <p>Produkty:</p>
          <p>Dostawa:</p>
          <p>Do zapłaty:</p>
          <button>Zamów</button>
        </div>
      </div>
    );
  }
}

export default PreviewCart;
