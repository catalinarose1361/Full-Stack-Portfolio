import React from "react";
import Routes from "./Routes.js";
import { BrowserRouter as withRouter } from "react-router-dom"
import NavBar from "./components/NavTabs"
import FooterComp from "./components/FooterComp"

const App = ({ location }) => {

  return (

    <div style={{textAlign: 'center'}}>
      
      {location.pathname !== '/' &&  <NavBar />}
     
        <Routes />

      {location.pathname === '/' && <FooterComp />}

    </div>

  );

}

export default withRouter(App);
