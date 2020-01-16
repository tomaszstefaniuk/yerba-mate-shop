import React from 'react';

function withAutoScroll(Component, scrollTop=300) {
  return class ComponentWithAutoScroll extends React.Component {
    componentDidMount() {
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }

    render() {
      return <Component {...this.props} />;
    }
  }
}

export default withAutoScroll;
