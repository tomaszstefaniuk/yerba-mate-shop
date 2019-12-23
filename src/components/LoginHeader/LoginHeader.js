import React from 'react';
import styles from './LoginHeader.scss';
import PropTypes from 'prop-types';

import dataStore from '../../data/dataStore.json';


class LoginHeader extends React.Component {

  static propTypes = {
    logIn: PropTypes.string,
    newAcc: PropTypes.string,
  }

  render() {


    console.log('hehe', dataStore.login.logIn);

    const {logIn, newAcc} = this.props;

    console.log('this.props: ', this.props);
    console.log('logIn', logIn);

    return (
      <div className='loginHeader'>
        <a href="" className='loginHeader__link'>{dataStore.login.logIn}</a>
        <a href="" className='loginHeader__link'>{dataStore.login.newAcc}</a>
      </div>
    );
  }
}


export default LoginHeader;
