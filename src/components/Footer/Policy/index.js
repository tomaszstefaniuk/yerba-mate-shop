import React from 'react';
import withAutoScroll from 'components/hoc/withAutoScroll';
import './Policy.scss';
import __html from 'data/Footer/policy';


class Policy extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html }} />;
  }
}


export default withAutoScroll(Policy);
