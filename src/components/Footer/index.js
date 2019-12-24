import React from 'react';

import dataStore from '../../data/dataStore.json';
import styles from './Footer.scss';


class Footer extends React.Component {
  render() {
    return(
      <footer>

        <div className='footer-section1'>
          <div className='footer-section1__div'>
            <h3>{dataStore.footer.header1}</h3>
            <ul>
              <li><a href="#">{dataStore.footer.arr1[0]}</a></li>
              <li><a href="#">{dataStore.footer.arr1[1]}</a></li>
              <li><a href="#">{dataStore.footer.arr1[2]}</a></li>
              <li><a href="#">{dataStore.footer.arr1[3]}</a></li>
            </ul>
          </div>

          <div className='footer-section1__div'>
            <h3>{dataStore.footer.header2}</h3>
            <ul>
              <li><a href="#">{dataStore.footer.arr2[0]}</a></li>
              <li><a href="#">{dataStore.footer.arr2[1]}</a></li>
              <li><a href="#">{dataStore.footer.arr2[2]}</a></li>
            </ul>
          </div>

          <div>
            {dataStore.footer.sMedia1}
          </div>
        </div>

        <div>
          {dataStore.footer.footer}
        </div>

      </footer>
    );
  }
}

export default Footer;
