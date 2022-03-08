import './App.css';
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import landingPage from "./components/LandingPage/landingPage";
import Home from './components/Home';

import NavCreate from './components/CreateNewRecipe/NavCreate';
import DetailRecipe from './components/Detail/DetailRecipe';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route  exact path="/" component={landingPage} />
      <Route   exact path="/home" component={Home}/>
        <Route  exact path="/recipe/:id" component={DetailRecipe}/>
      

      
      <Route   path="/newrecipe" component={NavCreate}/>
      

    </div>
      

    </BrowserRouter>
  );
}

export default App;
