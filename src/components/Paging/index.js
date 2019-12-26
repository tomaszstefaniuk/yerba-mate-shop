import React from 'react';
import styles from './Paging.scss';


class Paging extends React.Component {
  render() {
    return(
      <div className='products-pagination'>
        <ul className='paginator'>
          <li>«</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>»</li>
        </ul>
      </div>
    );
  }
}


export default Paging;
