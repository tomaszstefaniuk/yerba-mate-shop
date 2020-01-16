import React from 'react';
import styles from './Product.scss';
import dataStore from '../../data/dataStore.json';

const formatPrice = (price) => {
  if (!price) { return null; }
  const priceDecimalValues = Math.floor(price * 100).toString().slice(-2);
  const priceFloorValue = Math.floor(price);
  return `${priceFloorValue},${priceDecimalValues} zł`;
}

const Product = ({ name, price, imgSrc }) => {
  return (
    <div className='product'>
      <img src={imgSrc} alt="yerba-mate-shop"/>
      <p className='product__desc'>{name}</p>
      <div className='product__btn-div'>
        <p className='product__btn-div__price'>{formatPrice(price)}</p>
        <button type="button">Dodaj do<br />koszyka</button>
      </div>
    </div>
  );
}

export default Product;
