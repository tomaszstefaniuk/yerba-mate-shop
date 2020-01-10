import React from 'react';

function withAutoScroll(Component) {
  return class ComponentWithAutoScroll extends React.Component {
    componentDidMount() {
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }

    render() {
      return <Component {...this.props} />;
    }
  }
}

export default withAutoScroll;
