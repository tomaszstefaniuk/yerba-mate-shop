import React from 'react';
import styles from './FindUs.scss';
import __html from 'data/Footer/findUs';


class FindUs extends React.Component {

  componentDidMount() {
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html }} />;
  }
}


export default FindUs;
