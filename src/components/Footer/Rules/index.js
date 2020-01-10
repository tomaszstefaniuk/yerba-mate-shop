import React from 'react';
import withAutoScroll from 'components/hoc/withAutoScroll';
import __html from 'data/Footer/rules';
import './Rules.scss';


class Rules extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html }} />;
  }
}


export default withAutoScroll(Rules);
