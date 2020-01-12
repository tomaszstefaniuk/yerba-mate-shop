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
      showModal: false,
      showLogin: false
    };
  }

  openModal = (showLogin) => {
    this.setState({
      showModal: true,
      showLogin
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
        <div className={this.state.showModal?'modal-bcg':''} onClick={this.closeModal}></div>
        <div className='login-wrapper__div'>
          <a href="" onClick={ (e) => {e.preventDefault(); this.openModal(true);} }>
            {dataStore.login.logIn}
          </a>
        </div>
        <div className='login-wrapper__div'>
          <a href="" onClick={ (e) => {e.preventDefault(); this.openModal(false);} }>
            {dataStore.login.newAcc}
          </a>
        </div>
        {this.state.showModal &&
          <Portal>
            <Modal
              closeModal={this.closeModal}
              showLogin={this.state.showLogin}
            />
          </Portal>}
      </div>
    );
  }
}


export default LoginHeader;
