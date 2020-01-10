import React, { useState } from 'react';
import { withRouter } from 'react-router';
import styles from './SideNav.scss';
import dataStore from '../../data/dataStore.json';
import { uid } from 'react-uid';


const SideNav = ({ history }) => {
  return(
    <aside className="sideNav">
			<ul>
        {dataStore.sideNav.mainList.map(item => (
          <SideNavItem item={item} onPathChange={(path) => history.push(path)} />
        ))}
			</ul>
		</aside>
  );
}

const SideNavItem = ({ item, onPathChange }) => {
  const [isOpen, setOpen] = useState(false);

  if(!item.subItems || (item.subItems && !Array.isArray(item.subItems))) {
    return (
      <li onClick={() => onPathChange(item.path)}>
        <a href="#">
          <p>{item.label}</p>
        </a>
        <i class="fas fa-plus"></i>
      </li>
    )
  }
  return (
    <li onClick={() => setOpen(!isOpen)}>
      <a href="#">
        <p>{item.label}</p>
      </a>
      <i class="fas fa-plus"></i>
      <div>
        <ul>
          {isOpen && item.subItems.map(subItem => (
            <li
              key={uid(subItem)}
              onClick={() => onPathChange(`${item.path}${subItem.path}`)}>
              <a href="#">
                <p>{subItem.label}</p>
              </a>
              <i class="fas fa-plus"></i>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}


export default withRouter(SideNav);
