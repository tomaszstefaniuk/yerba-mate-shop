import React from 'react';
import styles from './LoginHeader.scss';
import PropTypes from 'prop-types';

import dataStore from '../../data/dataStore.json';


class LoginHeader extends React.Component {
  render() {
    return (
      <div className='login-wrapper'>
        <div className='login-wrapper__div'>
          <a href="">{dataStore.login.logIn}</a>
        </div>
        <div className='login-wrapper__div'>
          <a href="">{dataStore.login.newAcc}</a>
        </div>
      </div>
    );
  }
}


export default LoginHeader;
