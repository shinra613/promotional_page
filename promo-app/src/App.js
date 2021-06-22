import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PromoHome from './promohome';
import PromoPlans from './promoplans';
import PromoLocations from './locations';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




const routes =(
  <BrowserRouter>
    <div>
      <Switch>
      <Route exact path="/">
        <PromoHome />
      </Route>

      <Route path="/offers">
        <PromoPlans />
        </Route>
        
        <Route path="/locations">
        <PromoLocations />
      </Route>
      </Switch>
    
    </div>
    
  </BrowserRouter>
);

function App() {
  return (
    <div className="App">
      

      {routes}
      
      
      
    </div>
  );
}

export default App;
