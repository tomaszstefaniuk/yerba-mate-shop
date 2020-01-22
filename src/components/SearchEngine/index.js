import React from 'react';
import { withRouter } from 'react-router';
import styles from './SearchEngine.scss';


class SearchEngine extends React.Component {
  state = { value: '' };

  handleInputChange = (e) => this.setState({ value: e.target.value });

  handleSubmit = () => this.props.history.push({
    pathname: '/', search: `?q=${this.state.value}`
  });

  render() {
    return (
      <div className='search-engine-wrapper'>
        <div className='search-engine'>
          <input
            type='text'
            placeholder='Szukaj'
            onChange={this.handleInputChange}
            value={this.state.value}
            className='search-engine__input'
            title='Co chcesz wyszukać'
            onKeyDown={e => e.keyCode === 13 ? this.handleSubmit() : null}/>
          <button
            type='submit'
            className='search-engine__button'
            title='Wyszukaj'
            onClick={this.handleSubmit}>
              <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    );
  }
}


export default withRouter(SearchEngine);
