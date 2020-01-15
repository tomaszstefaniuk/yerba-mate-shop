import React, { useState } from 'react';
import { withRouter } from 'react-router';
import './SideNav.scss';
import dataStore from '../../data/dataStore.json';
import { uid } from 'react-uid';
import SideNavItem from './SideNavItem';


const SideNav = ({ history }) => {
  return(
    <aside className='sideNav'>
			<ul className='sideNav__mainlist-ul'>
        {dataStore.sideNav.mainList.map(item => (
          <SideNavItem
            item={item}
            onPathChange={(path) => history.push(path)}
            key={uid(item)}
          />
        ))}
			</ul>
		</aside>
  );
}


export default withRouter(SideNav);
