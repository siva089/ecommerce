import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homePage.component"
import {Switch,Route} from "react-router-dom"

const HatsPage=()=>(<div>Hello</div>)

function App() {
  return (
    <div>
     
      <Switch> 
   <Route exact path="/" component={HomePage} /> 
     <Route exact path="/hats" component={()=><div>hats</div>} /> 
      </Switch>
    </div>
  );
}

export default App;
