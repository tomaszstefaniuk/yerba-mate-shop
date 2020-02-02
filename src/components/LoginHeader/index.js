import React from 'react';
import './LoginHeader.scss';
import PropTypes from 'prop-types';
import dataStore from '../../data/dataStore.json';
import Portal from '../Portal';
import Modal from './Modal';
import AuthService from 'services/authService'

import { connect } from 'react-redux';
import userActions from 'redux/actions/userActions';

class LoginHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showLogin: false,
      authError: false,
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
      const { data } = await AuthService.register({ name, password, email })
      this.props.addItem(data)
      this.setState({
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
      const {data} = await AuthService.login({ password, email })
      this.props.addItem(data)
      window.localStorage.user = JSON.stringify(data)
      this.setState({
        showModal: false
      })
    } catch(e) {
        console.warn(e.message);
        this.setState({
          authError: true
        });
    }
  }

  logout = () => {
    this.props.delItem()
    delete window.localStorage.user
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      authError: false
    });
  }

  componentDidMount() {
    console.warn(window.localStorage.user)
    try {
      this.props.addItem(JSON.parse(window.localStorage.user))
    } catch(e) {
      console.warn(e.message)
    }
  }

  render() {

    const { userReducer } = this.props

    return (
      <div className='login-wrapper'>
        <div className={this.state.showModal?'modal-bcg':''} onClick={this.closeModal}></div>
        <div className={'login-wrapper__div' + (userReducer.hasOwnProperty('_id')?' login-wrapper__welcome':'')}>
          {!userReducer.hasOwnProperty('_id') ?
            (<a href="" onClick={ (e) => {e.preventDefault(); this.openModal(true);} }>
              {dataStore.login.logIn}
            </a>)
            :
            (<span>Witaj, {userReducer.name}</span>)
        }
        </div>
        <div className='login-wrapper__div'>
          {!userReducer.hasOwnProperty('_id') ?
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


const mapDispatchToProps = { addItem: userActions.add, delItem: userActions.del };

const mapStateToProps = state => {
  return { userReducer: state.userReducer }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginHeader);
