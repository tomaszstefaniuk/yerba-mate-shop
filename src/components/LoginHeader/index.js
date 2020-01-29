import React from 'react';
import './LoginHeader.scss';
import PropTypes from 'prop-types';
import dataStore from '../../data/dataStore.json';
import Portal from '../Portal';
import Modal from './Modal';
import AuthService from 'services/authService'

class LoginHeader extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      showLogin: false,
      logged: false,
      userName: '',
      authError: false
    };
  }

  openModal = (showLogin) => {
    this.setState({
      showModal: true,
      showLogin
    });
  }

  onRegisterHandler = async (e, { name, password, email }) => {
    e.preventDefault();
    if(name==='' || email==='' || password==='') {
      this.setState({
        authError: true
      });
      return;
    }
    try {
      const data = await AuthService.register({ name, password, email })
      // @TODO przeniesc do czesto uzywanych (common.js) (np. doAfterLogin())
      window.localStorage.token = data.data.token;
      window.localStorage.name = data.data.name;
      this.setState({
        userName: data.data.name,
        logged: true,
        showModal: false
      });
    } catch(e) {
        console.warn(e);
        this.setState({
          authError: true
        });
    }
  }

  onLoginHandler = async (e, { email, password }) => {
    e.preventDefault();
    if(email==='' || password==='') {
      this.setState({
        authError: true
      });
      return;
    }
    try {
      const data = await AuthService.login({ password, email })
      // @TODO przeniesc do czesto uzywanych (common.js) (np. doAfterLogin())
      window.localStorage.token = data.data.token;
      window.localStorage.name = data.data.name;
      this.setState({
        userName: data.data.name,
        logged: true,
        showModal: false
      })
      this.props.closeModal();
    } catch(e) {
        console.warn(e);
        this.setState({
          authError: true
        });
    }
  }

  logout = () => {
    window.localStorage.token = null
    window.localStorage.name = null
    this.setState({
      userName: '',
      logged: false
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      authError: false
    });
  }

  render() {

    const { userName, logged } = this.state
    return (
      <div className='login-wrapper'>
        <div className={this.state.showModal?'modal-bcg':''} onClick={this.closeModal}></div>
        <div className={'login-wrapper__div' + (logged?' login-wrapper__welcome':'')}>
          {!logged ?
            (<a href="" onClick={ (e) => {e.preventDefault(); this.openModal(true);} }>
              {dataStore.login.logIn}
            </a>)
            :
            (<span>Witaj, {userName}</span>)
        }
        </div>
        <div className='login-wrapper__div'>
          {!logged ?
            (<a href="" onClick={ (e) => {e.preventDefault(); this.openModal(false);} }>
              {dataStore.login.newAcc}
            </a>)
            :
            (<a onClick={(e) => {e.preventDefault(); this.logout();}}>
              Wyloguj się
            </a>)
          }
        </div>
        {this.state.showModal &&
          <Portal>
            <Modal
              onLoginHandler={this.onLoginHandler}
              onRegisterHandler={this.onRegisterHandler}
              closeModal={this.closeModal}
              showLogin={this.state.showLogin}
              authError={this.state.authError}
            />
          </Portal>}
      </div>
    );
  }
}


export default LoginHeader;
