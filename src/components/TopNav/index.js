import React from 'react';

import dataStore from '../../data/dataStore.json';
import styles from './TopNav.scss';

//App components


class TopNav extends React.Component {
  render() {
    return(
      <nav className="topNav">
  			<ul>
  				<li><a href="#">{dataStore.topNav[0]}</a></li>
  				<li><a href="#">{dataStore.topNav[1]}</a></li>
  				<li><a href="#">{dataStore.topNav[2]}</a></li>
  				<li><a href="#">{dataStore.topNav[3]}</a></li>
  				<li><a href="#">{dataStore.topNav[4]}</a></li>
  				<li><a href="#">{dataStore.topNav[5]}</a></li>
  			</ul>
  		</nav>
    );
  }
}

export default TopNav;
