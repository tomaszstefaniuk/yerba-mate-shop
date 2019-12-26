import React from 'react';

import styles from './SideNav.scss';
import dataStore from '../../data/dataStore.json';


class SideNav extends React.Component {
  render() {
    return(
      <aside className="sideNav">
				<ul>
					<li><a href="#"><p>{dataStore.sideNav.mainList[0]}</p></a><i class="fas fa-plus"></i></li>
					<li><a href="#"><p>{dataStore.sideNav.mainList[1]}</p></a><i class="fas fa-plus"></i></li>
					<li><a href="#"><p>{dataStore.sideNav.mainList[2]}</p></a><i class="fas fa-plus"></i></li>
					<li><a href="#"><p>{dataStore.sideNav.mainList[3]}</p></a><i class="fas fa-plus"></i></li>
					<li><a href="#"><p>{dataStore.sideNav.mainList[4]}</p></a><i class="fas fa-plus"></i></li>
				</ul>
			</aside>
    );
  }
}


export default SideNav;
