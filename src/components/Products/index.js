import React from 'react';
import styles from './Products.scss';

//App components
import Product from '../Product';
import Paging from '../Paging';


class Test extends React.Component {
  render() {
    console.log(this.props.route)
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
