import React from 'react';
import styles from './Products.scss';
import Product from '../Product';
import Paging from '../Paging';


class ProductsWrapper extends React.Component {
  componentDidMount() {
    fetch('http://localhost:5001/api/product')
    .then(products => {console.log('products')});
  }

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
