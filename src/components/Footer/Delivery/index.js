import React from 'react';
import styles from './Delivery.scss';
import __html from 'data/Footer/delivery';


class Delivery extends React.Component {
  componentDidMount() {
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html }} />;
  }
}


export default Delivery;
