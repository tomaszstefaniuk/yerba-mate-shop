import React from 'react';
import styles from './Products.scss';

//App components
import Product from '../Product';
import Paging from '../Paging';


class Test extends React.Component {
  render() {
    return (
      <div className='products-wrapper2'>
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


export default Test;
