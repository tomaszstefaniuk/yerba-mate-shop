import React, { useState } from 'react';
import { withRouter } from 'react-router';
import styles from './SideNav.scss';
import dataStore from '../../data/dataStore.json';
import { uid } from 'react-uid';


const SideNav = ({ history }) => {
  return(
    <aside className='sideNav'>
			<ul className='sideNav__mainlist-ul'>
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
      <li onClick={() => onPathChange(item.path)} className='sideNav__mainlist-li'>
        <a href="#" className='sideNav__mainlist-a'>
          <p>{item.label}</p>
        </a>
        <i className="fas fa-plus sideNav__mainlist-i"></i>
      </li>
    )
  }
  return (
    <li onClick={() => setOpen(!isOpen)} className={isOpen?'sideNav-mainlistOpen-li':'sideNav__mainlist-li'}>
      <div className='sideNav__wrapper'>
        <a href="#" className='sideNav__mainlist-a'>
          <p className={isOpen?'sideNav-mainlistOpen-p':'sideNav__mainlist-p'}>{item.label}</p>
        </a>
        {isOpen &&
          <div className='sideNav-subList'>
            <ul className='sideNav-subList__ul'>
              {isOpen && item.subItems.map(subItem => (
                <li
                  key={uid(subItem)}
                  className='sideNav-subList__li'
                  onClick={() => onPathChange(`${item.path}${subItem.path}`)}>
                  <a href="#" className='sideNav-subList__a'>
                    <p className='sideNav-subList__p'>› {subItem.label}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>}
      </div>
      <i className={'fas sideNav__mainlist-i' + (isOpen?' sideNav-mainlistOpen-i fa-minus':' fa-plus')}></i>
    </li>
  );
}


export default withRouter(SideNav);
