import React from 'react';
import './Delivery.scss';
import __html from 'data/Footer/delivery';
import withAutoScroll from 'components/hoc/withAutoScroll';


class Delivery extends React.Component {

  render() {
    return <div dangerouslySetInnerHTML={{ __html }} />;
  }
}


export default withAutoScroll(Delivery);
