import React from 'react';
import './Modal.scss';

class Modal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showLogin: props.showLogin,
      authError: props.authError,
      password: '',
      email: '',
      name: ''
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      authError: nextProps.authError
    });
  }

  showLoginHandler = (showLogin) => {
    this.setState({
      showLogin,
      authError: false
    });
  }

  render() {
    const { name, password, email, showLogin } = this.state;

    return (
      <div className='modal-wrapper'>
        <span
          className='modal-closeX'
          onClick={this.props.closeModal}>
          ×
        </span>
        <div className='modal-header'>
          <h1
            onClick={() => {this.showLoginHandler(true)}}
            className={showLogin?'modal-header__h1':''}
          >
            Zaloguj się
          </h1>
          <h1
            onClick={() => {this.showLoginHandler(false)}}
            className={!showLogin?'modal-header__h1':''}
          >
            Zarejestruj się
          </h1>
        </div>

        <div className='modal-newAcc-form'>
          <form >
            {this.state.authError &&
              <div className='modal-authError'>Coś poszło nie tak..</div>}
            {!showLogin &&
              <div>
                <input
                  name="yourName"
                  value={name}
                  onChange={({ target }) => this.setState({ name: target.value })}
                  placeholder="Twoje imię"
                  required type="text"
                />
              </div>
            }
            <div>
              <input
                name="yourEmail"
                value={email}
                onChange={({ target }) => this.setState({ email: target.value })}
                placeholder="Twój e-mail"
                required type="email"
              />
            </div>
            <div>
              <input
                name="password"
                value={password}
                onChange={({ target }) => this.setState({ password: target.value })}
                placeholder="Twoje hasło"
                required type="password"
              />
            </div>
            <button onClick={showLogin ?
              (e) => this.props.onLoginHandler(e, { email, password }) :
              (e) => this.props.onRegisterHandler(e, { name, email, password })}>
              {showLogin ? 'Zaloguj się' : 'Zarejestruj się' }</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
