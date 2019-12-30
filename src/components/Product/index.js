import React from 'react';
import styles from './Product.scss';
import dataStore from '../../data/dataStore.json';


class Product extends React.Component {
  render() {
    return(
      <div className='product'>
        <img src="https://i.imgur.com/rmXEPdS.jpg" alt="yerba-mate-shop"/>
        <p className='product__desc'>Amanda Despalada 0,5kg</p>
        <div class='product__btn-div'>
          <p class='product__btn-div__price'>17,49 zł</p>
          <button type="button">Dodaj do<br />koszyka</button>
        </div>
      </div>
    );
  }
}


export default Product;
