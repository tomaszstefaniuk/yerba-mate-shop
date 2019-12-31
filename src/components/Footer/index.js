import React from 'react';
import { NavLink } from 'react-router-dom';
import dataStore from '../../data/dataStore.json';
import styles from './Footer.scss';


class Footer extends React.Component {
  render() {
    return(
      <footer>

        <div className='footer-info'>
          <div className='footer-info__sec1'>
            <h3>{dataStore.footer.header1}</h3>
            <ul>
              <li><NavLink to="/regulamin">{dataStore.footer.arr1[0]}</NavLink></li>
              <li><NavLink to="/polityka-prywatnosci">{dataStore.footer.arr1[1]}</NavLink></li>
              <li><NavLink to="/o-firmie">{dataStore.footer.arr1[2]}</NavLink></li>
              <li><NavLink to="/kontakt">{dataStore.footer.arr1[3]}</NavLink></li>
            </ul>
          </div>

          <div className='footer-info__sec1'>
            <h3>{dataStore.footer.header2}</h3>
            <ul>
              <li><NavLink to="/zwroty">{dataStore.footer.arr2[0]}</NavLink></li>
              <li><NavLink to="/dostawa-i-platnosc">{dataStore.footer.arr2[1]}</NavLink></li>
              <li><NavLink to="/jak-nas-znalezc">{dataStore.footer.arr2[2]}</NavLink></li>
            </ul>
          </div>

          <div className='footer-info__sec2'>
            {dataStore.footer.sMedia1}
            <a href="https://www.facebook.com" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://aboutme.google.com/" target="_blank">
              <i class="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>

        <div className='footer-copyright'>
          {dataStore.footer.footer}
        </div>

      </footer>
    );
  }
}

export default Footer;
