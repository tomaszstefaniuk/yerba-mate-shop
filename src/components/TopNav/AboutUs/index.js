import React from 'react';
import styles from './AboutUs.scss';
import __html from 'data/TopNav/aboutUs';
import withAutoScroll from 'components/hoc/withAutoScroll';


class AboutUs extends React.Component {

  render() {
    return <div dangerouslySetInnerHTML={{ __html }} />;
  }
}


export default withAutoScroll(AboutUs, 200);
