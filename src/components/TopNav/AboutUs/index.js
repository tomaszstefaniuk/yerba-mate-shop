import React from 'react';
import styles from './AboutUs.scss';
import __html from 'data/TopNav/aboutUs';


class AboutUs extends React.Component {

  componentDidMount() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html }} />;
  }
}


export default AboutUs;
