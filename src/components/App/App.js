import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//App components
import Home from '../Home';
import Info from '../Info';
import Product from '../Product';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
