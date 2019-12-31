import React from 'react';
import styles from './Container.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

//App components
import SearchEngine from '../SearchEngine';
import Cart from '../Cart';
import TopNav from '../TopNav';
import SideNav from '../SideNav';
import Products from '../Products';
import Promotion from '../TopNav/Promotion';
import WhyYerba from '../TopNav/WhyYerba';
import HowToUseYerba from '../TopNav/HowToUseYerba';
import AboutUs from '../TopNav/AboutUs';
import Contact from '../TopNav/Contact';
import Rules from '../Footer/Rules';
import Policy from '../Footer/Policy';
import Returns from '../Footer/Returns';
import Delivery from '../Footer/Delivery';
import FindUs from '../Footer/FindUs';



class Container extends React.Component {
  render() {

    return (
      <div className='container'>

        <div className='header-wrapper'>
          <NavLink exact to="/">
            <img src="https://i.imgur.com/5iFdjdL.jpg"
              alt="yerba-mate-shop"
              title="Przejdź na stronę główną sklepu" />
          </NavLink>
          <SearchEngine />
          <Cart />
        </div>

        <div className='top-nav-wrapper'>
          <TopNav />
        </div>

        <div className='centre-wrapper'>
          <SideNav />
          <div className='main-section-wrapper'>
            <Switch>
              {/*TopNav*/}
              <Route exact path="/" component={Products} />
              <Route path="/promocje" component={Promotion} />
              <Route path="/dlaczego-yerba-mate" component={WhyYerba} />
              <Route path="/jak-pic-yerbe" component={HowToUseYerba} />
              <Route path="/o-nas" component={AboutUs} />
              <Route path="/kontakt" component={Contact} />
              {/*Footer*/}
              <Route path="/regulamin" component={Rules} />
              <Route path="/polityka-prywatnosci" component={Policy} />
              <Route path="/o-firmie" component={AboutUs} />
              <Route path="/kontakt" component={Contact} />
              <Route path="/zwroty" component={Returns} />
              <Route path="/dostawa-i-platnosc" component={Delivery} />
              <Route path="/jak-nas-znalezc" component={FindUs} />
            </Switch>
          </div>
        </div>

      </div>
    );
  }
}



export default Container;
