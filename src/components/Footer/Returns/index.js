import React from 'react';
import withAutoScroll from 'components/hoc/withAutoScroll';
import __html from 'data/Footer/returns';
import './Returns.scss';


class Returns extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html }} />;
  }
}


export default withAutoScroll(Returns);
