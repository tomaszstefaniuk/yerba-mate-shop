import React from 'react';
import styles from './SearchEngine.scss';


class SearchEngine extends React.Component {
  render() {
    return (
      <div className='search-engine-wrapper'>
        <div className='search-engine'>
          <input type='text' placeholder='Szukaj' className='search-engine__input' />
          <button type='submit' className='search-engine__button'><i className="fas fa-search"></i></button>
        </div>
      </div>
    );
  }
}


export default SearchEngine;
