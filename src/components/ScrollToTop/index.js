import React from 'react';
import './ScrollToTop.scss';

class ScrollToTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    (window.pageYOffset>420) ?
      this.setState({isVisible: true}):
      this.setState({isVisible: false});
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  render() {
    const { isVisible } = this.state;
    const scrollToTopClassName = `scroll-to-top ${isVisible ? '' : 'hidden'}`;
    return (
      <div
        className={scrollToTopClassName}
        onClick={() => this.scrollToTop()}
      >
        <i className="fas fa-chevron-up"></i>
      </div>
    );
  }
}


export default ScrollToTop;
