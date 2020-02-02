import React from 'react';
import { NavLink } from 'react-router-dom';
import dataStore from '../../data/dataStore.json';
import './TopNav.scss';


class TopNav extends React.Component {
  render() {
    return(
      <nav className="topNav">
  			<ul>
  				<li><NavLink exact to="/">{dataStore.topNav.nav[0]}</NavLink></li>
  				<li><NavLink to="/promocje">{dataStore.topNav.nav[1]}</NavLink></li>
  				<li><NavLink to="/dlaczego-yerba-mate">{dataStore.topNav.nav[2]}</NavLink></li>
  				<li><NavLink to="/jak-pic-yerbe">{dataStore.topNav.nav[3]}</NavLink></li>
  				<li><NavLink to="/o-nas">{dataStore.topNav.nav[4]}</NavLink></li>
  				<li><NavLink to="/kontakt">{dataStore.topNav.nav[5]}</NavLink></li>
  			</ul>
  		</nav>
    );
  }
}

export default TopNav;
