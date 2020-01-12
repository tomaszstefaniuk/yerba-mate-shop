import React from 'react';
import './Modal.scss';


class Modal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showLogin: props.showLogin
    };
  }

  showLoginHandler = (showLogin) => {
    this.setState({
      showLogin
    });
  }

  render() {
    return (
      <div className='modal-wrapper'>
        <span className='modal-closeX' onClick={this.props.closeModal}>×</span>
        <div className='modal-header'>
          <h1 onClick={() => {this.showLoginHandler(true)}}>Zaloguj się</h1>
          <h1 onClick={() => {this.showLoginHandler(false)}}>Zarejestruj się</h1>
        </div>
        {!this.state.showLogin?
          <div className='modal-newAcc-form'>
            <form action="">
              <div>
                  <input name="yourName" placeholder="Twoje imię" required type="text" />
              </div>
              <div>
                  <input name="yourEmail" placeholder="Twój e-mail" required type="email" />
              </div>
              <div>
                  <input name="password" placeholder="Utwórz hasło" required type="password" />
              </div>
              <button type="submit">Zarejestruj się</button>
            </form>
          </div>:
          <div className='modal-login-form'>
            <form action="">
              <div>
                  <input name="yourEmail" placeholder="Twój e-mail" required type="email" />
              </div>
              <div>
                  <input name="password" placeholder="Twoje hasło" required type="password" />
              </div>
              <button type="submit">Zaloguj się</button>
            </form>
          </div>
        }
      </div>
    );
  }
}


export default Modal;
