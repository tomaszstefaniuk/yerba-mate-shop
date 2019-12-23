import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//App components
import Home from '../Home';
import Info from '../Info/Info.js';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/info' component={Info} />
    </Switch>
  </BrowserRouter>
);

export default App;
