import React from 'react';
import styles from './Promotion.scss';
import dataStore from '../../../data/dataStore.json';


class Promotion extends React.Component {
  render() {
    const items = [];

    for (let i=0; i<dataStore.topNav.promotion.h2.length; i++) {
      items.push(<h2 key={i}>{dataStore.topNav.promotion.h2[i]}</h2>);
      items.push(<p key={i+9*9}>{dataStore.topNav.promotion.p[i]}</p>);
    }

    return (
      <div className='promotion'>
        <h1>{dataStore.topNav.promotion.h1}</h1>
        {items}
      </div>
    );
  }
}


export default Promotion;
