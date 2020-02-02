import React from 'react';
import withAutoScroll from 'components/hoc/withAutoScroll';
import mailService from 'services/mailService';
import './Contact.scss';

const initialState = { name: '', email: '', subject: '', message: '' };

class Contact extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      sendOk: false,
      sendError: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    mailService.post({ name, email, subject, message })
    .then(res => {
      if (res.status) {
        this.setState({ ...initialState, sendOk: true })
      } else {
        this.setState({ sendError: true })
      }
    });
  }

  handleValueChange = (key, value) => {
    this.setState({ [key]: value, sendOk: false, sendError: false })
  };

  render() {
    const { name, email, subject, message } = this.state

    return (
      <div className='contact'>
        <h1>Napisz do nas</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
              <input
                placeholder="Twoje imię"
                required
                value={name}
                type="text"
                onChange={e => this.handleValueChange('name', e.target.value)}/>
          </div>
          <div>
              <input
                placeholder="Twój e-mail"
                required
                value={email}
                type="text"
                onChange={e => this.handleValueChange('email', e.target.value)}/>
          </div>
          <div>
              <input
                placeholder="Temat"
                required
                value={subject}
                type="text"
                onChange={e => this.handleValueChange('subject', e.target.value)}/>
          </div>
          <div>
              <input
                placeholder="Treść wiadomości"
                required
                value={message}
                type="text"
                className='contact__message-input'
                onChange={e => this.handleValueChange('message', e.target.value)}/>
          </div>
          {this.state.sendOk &&
            <div className='contact-send-status'>Dziękujemy za wiadomość!</div>}
          {this.state.sendError &&
            <div className='contact-send-status'>Coś poszło nie tak..</div>}
          <button type="submit">Wyślij</button>
        </form>
      </div>
    );
  }
}


export default withAutoScroll(Contact, 200);
