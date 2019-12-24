import React from 'react';


class Cart extends React.Component {
  render() {
    return (
      <div className="cart" title="Pokaż mój koszyk">
        <i className="fas fa-shopping-cart"></i>Koszyk<span>(pusty)<i className="fas fa-sort fa-sort-down"></i></span>
      </div>
    );
  }
}


export default Cart;
