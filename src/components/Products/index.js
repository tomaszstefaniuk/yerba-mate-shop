import React from 'react';
import styles from './Products.scss';
import Product from '../Product';
import withAutoScroll from 'components/hoc/withAutoScroll';
import withPagination from 'components/hoc/withPagination';
import productService from 'services/productService';


class Products extends React.Component {
  render() {
    const products = this.props.data;
    const isProducts = products && Array.isArray(products);
    return (
      <div className='products-wrapper'>
        <div className='products-wrapper__container'>
          {isProducts && products.map(({ _id, name, price, imgSrc }) => (
            <Product
              _id={_id}
              key={_id}
              name={name}
              price={price}
              imgSrc={imgSrc} />
          ))}
        </div>
      </div>
    );
  }
}

export default withPagination(
  withAutoScroll(Products, 200),
  productService.getProducts
);
