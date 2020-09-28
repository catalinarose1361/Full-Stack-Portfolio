// // router.js
import React from 'react'
import { Route, Switch } from "react-router-dom";

import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Skills from "./pages/Skills"
import TitlePage from './pages/TitlePage';

const Routes = () => (
  
    <Switch>

        <Route exact path ="/about" component={About} />
        <Route exact path ="/skills" component={Skills} />
        <Route exact path ="/portfolio" component={Portfolio} />
        <Route exact path ="/" component={TitlePage}  />
        <Route component={TitlePage}  />
    </Switch>
   
  
)

export default Routes;