import React from 'react';
import dataStore from '../../../data/dataStore.json';
import styles from './WhyYerba.scss';


class WhyYerba extends React.Component {
  render() {
    const items = [];

    for (let i=0; i<dataStore.topNav.whyYerba.h2.length; i++) {
      items.push(<h2 key={i}>{dataStore.topNav.whyYerba.h2[i]}</h2>);
      items.push(<p key={i+9*9}>{dataStore.topNav.whyYerba.p[i]}</p>);
    }

    return (
      <div className='why-yerba'>
        <h1>{dataStore.topNav.whyYerba.h1}</h1>
        {items}
      </div>
    );
  }
}


export default WhyYerba;
