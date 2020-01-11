import React from 'react';
import './LoginHeader.scss';
import PropTypes from 'prop-types';
import dataStore from '../../data/dataStore.json';
import Portal from '../Portal';
import Modal from './Modal';

class LoginHeader extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };
  }

  openModal = () => {
    this.setState({
      showModal: true
    });
  }

  closeModal = () => {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div className='login-wrapper'>
        <div className='login-wrapper__div'>
          <a href="">{dataStore.login.logIn}</a>
        </div>
        <div className='login-wrapper__div'>
          <a href="" onClick={ (e) => {e.preventDefault(); this.openModal();} }>
            {dataStore.login.newAcc}
          </a>
        </div>
        {this.state.showModal &&
          <Portal>
            <Modal />
          </Portal>}
      </div>
    );
  }
}


export default LoginHeader;
