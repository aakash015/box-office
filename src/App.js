import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Navs from './components/Navs';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
   <div>
    <Navs></Navs>
   <Switch>
     <Route exact  path = "/">
       <Home></Home>
     </Route>

     <Route exact  path = "/starred">
       <Starred></Starred> 
     </Route>

    <Route>
      Page Not Found
    </Route>
   </Switch>
   </div>
  );
}

export default App;
