import React from 'react';
import styles from './Home.scss';
//import {listData} from '../../data/dataStore';
import PropTypes from 'prop-types';

//App components
import LoginHeader from '../LoginHeader/LoginHeader.js';
import Container from '../Container/Container.js';



class Home extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node
  }

  render() {
    const {title, subtitle} = this.props;

    return (
      <div className='component'>
        <LoginHeader />
        <h1 className='component'>{title}</h1>
        <h2 className='component'>{subtitle}</h2>
        <div className="homeContainer">
          <Container />
        </div>
      </div>
    );
  }
}

export default Home;
