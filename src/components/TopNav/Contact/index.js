import React from 'react';
import './Contact.scss';

class Contact extends React.Component {

  componentDidMount() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }

  render() {
    return (
      <div className='contact'>
        <h1>Napisz do nas</h1>
        <form action="">
          <div>
              <input name="yourName" placeholder="Twoje imię" required type="text" />
          </div>
          <div>
              <input name="yourEmail" placeholder="Twój e-mail" required type="email" />
          </div>
          <div>
              <input name="subject" placeholder="Temat" required type="text" />
          </div>
          <div>
              <input name="message" placeholder="Treść wiadomości" required type="text" />
          </div>
          <button type="submit">Wyślij</button>
        </form>
      </div>
    );
  }
}


export default Contact;
