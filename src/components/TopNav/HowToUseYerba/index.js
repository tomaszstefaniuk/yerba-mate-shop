import React from 'react';
import styles from './HowToUseYerba.scss';
import __html from 'data/TopNav/howToUseYerba';


class HowToUseYerba extends React.Component {

  componentDidMount() {
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }

  render() {
    return <div dangerouslySetInnerHTML={{ __html }} />;
  }
}


export default HowToUseYerba;
