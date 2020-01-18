import React, { useState } from 'react';
import { uid } from 'react-uid';


const SideNavItem = ({ item, currentPath, onPathChange }) => {
  const initIsOpenValue = currentPath.split("/")[1] === item.path.split("/")[1];
  const [isOpen, setOpen] = useState(initIsOpenValue);

  const handleClick = (e) => {
    e.preventDefault();
    if(!e.target.className.includes('subList')){
      setOpen(!isOpen);
    }

  }
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
    <li
      onClick={handleClick}
      className={isOpen?'sideNav-mainlistOpen-li':'sideNav__mainlist-li'}>
      <div className='sideNav__wrapper'>
        <a href="#" className='sideNav__mainlist-a'>
          <p className={isOpen?'sideNav-mainlistOpen-p':'sideNav__mainlist-p'}>{item.label}</p>
        </a>
        {isOpen &&
          <div className='sideNav-subList'>
            <ul className='sideNav-subList__ul'>
              {isOpen && item.subItems.map(subItem => {
                const path = `${item.path}${subItem.path}`;
                const dataState = currentPath === path ? 'active' : '';
                return (
                  <li
                    key={uid(subItem)}
                    className='sideNav-subList__li'
                    data-state={dataState}
                    onClick={(e) => { onPathChange(path) }}>
                    <a href="#" className='sideNav-subList__a'>
                      <p className='sideNav-subList__p'>› {subItem.label}</p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>}
      </div>
      <i className={'fas sideNav__mainlist-i' + (isOpen?' sideNav-mainlistOpen-i fa-minus':' fa-plus')}></i>
    </li>
  );
}


export default SideNavItem;
