import React from 'react';
import styles from './Products.scss';
import Product from '../Product';
import Paging from '../Paging';


class ProductsWrapper extends React.Component {
  render() {
    return (
      <div className='products-wrapper'>
        <Product />
        <Product />
        <Product />
        <Product />

        <Product />
        <Product />
        <Product />
        <Product />

        <Product />
        <Product />
        <Product />
        <Product />
        <Paging />
      </div>
    );
  }
}


export default ProductsWrapper;
