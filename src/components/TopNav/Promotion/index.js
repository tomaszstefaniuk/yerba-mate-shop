import React from 'react';
import styles from './Promotion.scss';
import dataStore from '../../../data/dataStore.json';
import withAutoScroll from 'components/hoc/withAutoScroll';
import { uid } from 'react-uid';


class Promotion extends React.Component {
  constructor(props) {
    super(props);
    const { promotion: data } = dataStore.topNav;
    this.state = { data };
  }

  render() {
    const { h1, items } = this.state.data;
    return (
      <div className='promotion'>
        <h1>{h1}</h1>
        {items.map(item => {
          return (
            <div key={uid(item)}>
              <img src={item.img} alt=""/>
              <div>
                <h2>{item.h2}</h2>
                <p>{item.p}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}


export default withAutoScroll(Promotion, 200);
