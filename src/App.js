import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Routes from "./Routes.js";
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom"
import NavBar from "./components/NavTabs"

// const App = () => <PortfolioContainer />;

// export default App;


const App = ({ location }) => {
  return (
    <div>
      
      {location.pathname !== '/' &&  <NavBar />}
     
        <Routes />
       

      
    </div>
  );
}

export default withRouter(App);
