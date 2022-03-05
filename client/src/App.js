import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import landingPage from "./components/LandingPage/landingPage";
import Home from './components/Home';
import NewRecipe from './components/CreateNewRecipe/NewRecipe';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
      <Route  exact path="/" component={landingPage} />
      <Route  exact path="/home" component={Home}/>
      <Route  exact path="/newrecipe" component={NewRecipe}/>
      </Switch>
    </div>
      

    </BrowserRouter>
  );
}

export default App;
