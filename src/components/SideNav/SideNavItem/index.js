import React, { useState, useEffect } from 'react';
import { uid } from 'react-uid';
import strToNum from 'helpers/strToNum';
import styles from '../SideNav.scss';

class SideNavItem extends React.PureComponent {
  constructor(props) {
    super(props);
    const { currentPath, item } = props;
    const isOpen = this.isOpenPath(currentPath, item.path);
    this.state = { isOpen };
  }

  componentWillReceiveProps(nextProps) {
    const { currentPath, item } = nextProps;
    const isOpen = this.isOpenPath(currentPath, item.path);
    if (
      currentPath !== this.props.currentPath &&
      !isOpen &&
      this.state.isOpen
    ) {
      this.toggleOpen();
    }
  }

  isOpenPath = (currentPath, itemPath) => {
    return currentPath.split("/")[1] === itemPath.split("/")[1];
  }

  toggleOpen = () => this.setState(prevState => ({
    isOpen: !prevState.isOpen
  }));

  handleClick = (e) => {
    e.preventDefault();
    if(!e.target.className.includes('subList')){
      this.toggleOpen();
    }
  }

  render() {
    const { item, currentPath, onPathChange } = this.props;
    const { isOpen } = this.state;
    const liClassName = isOpen ?
      'sideNav-mainlistOpen-li' : 'sideNav__mainlist-li';
    const pClassName = isOpen ?
      'sideNav-mainlistOpen-p' : 'sideNav__mainlist-p';
    const iClassName = `fas sideNav__mainlist-i ${isOpen?
      'sideNav-mainlistOpen-i fa-minus' : 'fa-plus'}`;

    if(!item.subItems || (item.subItems && !Array.isArray(item.subItems))) {
      return (
        <li
          onClick={() => onPathChange(item.path)}
          className='sideNav__mainlist-li'>
          <a href="#" className='sideNav__mainlist-a'>
            <p>{item.label}</p>
          </a>
          <i className="fas fa-plus sideNav__mainlist-i"></i>
        </li>
      )
    }

    const { sideNavItemHeight } = styles;
    const sideNavHeight = `${(
      strToNum(sideNavItemHeight) * item.subItems.length
    )}px`;

    return (
      <li
        onClick={this.handleClick}
        className={liClassName}>
        <div className='sideNav__wrapper'>
          <a href="#" className='sideNav__mainlist-a'>
            <p
              className={pClassName}>
              {item.label}
            </p>
          </a>

          <div className='sideNav-subList' style={{ maxHeight: sideNavHeight, height: isOpen ? sideNavHeight : '0px', overflow: 'hidden', transition: 'height 0.4s' }}>
            <ul className='sideNav-subList__ul'>
              {item.subItems.map(subItem => {
                const path = `${item.path}${subItem.path}`;
                const dataState = currentPath === path ? 'active' : '';
                return (
                  <li
                    key={uid(subItem)}
                    className='sideNav-subList__li'
                    data-state={dataState}
                    style={{ height: sideNavItemHeight }}
                    onClick={(e) => { onPathChange(path) }}>
                    <a href="#" className='sideNav-subList__a'>
                      <p className='sideNav-subList__p'>› {subItem.label}</p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <i className={iClassName}></i>
      </li>
    );
  }
}

export default SideNavItem;
