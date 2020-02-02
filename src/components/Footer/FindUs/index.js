import React from 'react';
import './FindUs.scss';
import __html from 'data/Footer/findUs';
import withAutoScroll from 'components/hoc/withAutoScroll';


class FindUs extends React.Component {

  render() {
    return <div dangerouslySetInnerHTML={{ __html }} />;
  }
}


export default withAutoScroll(FindUs);
