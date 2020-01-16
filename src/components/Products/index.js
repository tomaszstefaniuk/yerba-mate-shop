import React from 'react';
import styles from './Products.scss';
import Product from '../Product';
import Paging from '../Paging';
import withAutoScroll from 'components/hoc/withAutoScroll';


class Products extends React.Component {
  state = { products: [] };

  componentDidMount() {
    const { type } = this.props;
    fetch(
      `http://localhost:5001/api/product?type=${type || ""}`,
      { mode: 'cors' }
    ).then(res => {
      res.json()
      .then(products => this.setState({ products }));
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className='products-wrapper'>
        {products.map(({ _id, name, price, imgSrc }) => (
          <Product
            key={_id}
            name={name}
            price={price}
            imgSrc={imgSrc} />
        ))}
      </div>
    );
  }
}

export default withAutoScroll(Products, 200);
