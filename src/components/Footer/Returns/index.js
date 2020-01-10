import React from 'react';
import withAutoScroll from 'components/hoc/withAutoScroll';
import styles from './Returns.scss';
import __html from 'data/Footer/returns';


class Returns extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html }} />;
  }
}


export default withAutoScroll(Returns);
