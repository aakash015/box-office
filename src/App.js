import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Navs from './components/Navs';
import Home from './Pages/Home';
import Shows from './Pages/Shows';
import Starred from './Pages/Starred';


function App() {

  
  return (
   <>
   
   <Switch>
     <Route exact  path = "/">
       <Home></Home>
     </Route>

     <Route exact  path = "/starred">
       <Starred></Starred> 
     </Route>

     <Route exact path = "/show/:id">  {/* this colon is for dynamic route like /show/123 /show/12
      everything will be opening this route 
     */
     }
       <Shows></Shows> 
     </Route>
    <Route>
      Page Not Found
    </Route>
   </Switch>
   </>
  );
}

export default App;
