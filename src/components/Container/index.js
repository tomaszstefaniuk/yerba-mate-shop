import React from 'react';
import styles from './Container.scss';

//App components
import SearchEngine from '../SearchEngine';
import Cart from '../Cart';
import TopNav from '../TopNav';
import SideNav from '../SideNav';
import Product from '../Product';
import Paging from '../Paging';


class Container extends React.Component {
  render() {

    return (
      <div className='container'>

        <div className='header-wrapper'>
          <img src="https://i.imgur.com/5iFdjdL.jpg" alt="yerba-mate-shop"/>
          <SearchEngine />
          <Cart />
        </div>

        <div className='top-nav-wrapper'>
          <TopNav />
        </div>

        <div className='centre-wrapper'>
          <SideNav />
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
        </div>

      </div>
    );
  }
}



export default Container;
