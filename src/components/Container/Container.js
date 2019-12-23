import React from 'react';
import styles from './Container.scss';


class Container extends React.Component {
  render() {

    return (
      <div className='container'>

        <div className='header'>
          <img src="https://i.imgur.com/5iFdjdL.jpg" alt="yerba-mate-shop"/>

          <div className='searchEngine'>
            <input type='text' placeholder='Szukaj' className='searchEngine__input' />
            <button type='submit' className='searchEngine__button'><i className="fas fa-search"></i></button>
    			</div>


          <div className="cart" title="Pokaż mój koszyk">
    				<i className="fas fa-shopping-cart"></i>Koszyk<span>(pusty)<i className="fas fa-sort fa-sort-down"></i></span>
    			</div>
        </div>

      </div>
    );
  }
}



export default Container;
