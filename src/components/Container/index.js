import React from 'react';
import styles from './Container.scss';

//App components
import SearchEngine from '../SearchEngine';
import Cart from '../Cart';
import TopNav from '../TopNav';
import SideNav from '../SideNav';
import Product from '../Product';


class Container extends React.Component {
  render() {

    return (
      <div className='container'>

        <div className='header-wrapper'>
          <img src="https://i.imgur.com/5iFdjdL.jpg" alt="yerba-mate-shop"/>
          <SearchEngine />
          <Cart />
        </div>

        <div className='topNavWrapper'>
          <TopNav />
        </div>

        <div className='centreWrapper'>
          <SideNav />
          <div className='productsWrapper'>
            <Product />
          </div>
        </div>

      </div>
    );
  }
}



export default Container;
