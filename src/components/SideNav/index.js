import React from 'react';

import styles from './SideNav.scss';
import dataStore from '../../data/dataStore.json';


class SideNav extends React.Component {
  render() {
    return(
      <aside className="sideNav">
				<ul>
					<li><a href="#"><p>{dataStore.sideNav[0]}</p></a></li>
					<li><a href="#"><p>{dataStore.sideNav[1]}</p></a></li>
					<li><a href="#"><p>{dataStore.sideNav[2]}</p></a></li>
					<li><a href="#"><p>{dataStore.sideNav[3]}</p></a></li>
					<li><a href="#"><p>{dataStore.sideNav[4]}</p></a></li>
				</ul>
			</aside>
    );
  }
}


export default SideNav;
