import React from 'react';
import withAutoScroll from 'components/hoc/withAutoScroll';
import mailService from 'services/mailService';
import './Contact.scss';

const initialState = { name: '', email: '', subject: '', message: '' };

class Contact extends React.Component {
  state = initialState;

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    mailService.post({ name, email, subject, message })
    .then(res => {
      if (res.status === 'success') {
        alert('Pomyślnie wysłano');
        this.setState(initialState)
      } else {
        alert('Wystąpił błąd');
      }
    });
  }

  handleValueChange = (key, value) => this.setState({ [key]: value });

  render() {
    return (
      <div className='contact'>
        <h1>Napisz do nas</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
              <input
                placeholder="Twoje imię"
                required
                type="text"
                onClick={e => this.handleValueChange('name', e.target.value)}/>
          </div>
          <div>
              <input
                placeholder="Twój e-mail"
                required
                type="text"
                onClick={e => this.handleValueChange('email', e.target.value)}/>
          </div>
          <div>
              <input
                placeholder="Temat"
                required
                type="text"
                onClick={e => this.handleValueChange('subject', e.target.value)}/>
          </div>
          <div>
              <input
                placeholder="Treść wiadomości"
                required
                type="text"
                className='contact__message-input'
                onClick={e => this.handleValueChange('message', e.target.value)}/>
          </div>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    );
  }
}


export default withAutoScroll(Contact, 200);
