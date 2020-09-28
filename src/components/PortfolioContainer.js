import React, { Component } from "react";
import NavTabs from "./NavTabs";
import { Layout, PageHeader } from 'antd';

// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";

// import Skills from "./pages/Skills"
// import TitlePage from "../pages/TitlePage";

import { Typography, Avatar } from 'antd';
import profilePic from "../images/profile-pictures/IMG_3001.png"
const { Title } = Typography;
const { Header, Content, Footer } = Layout;
class PortfolioCont extends Component {
  // state = {
  //   currentPage: "TitlePage",
    
  // };

 
  
 
  // handlePageChange = page => {
  //   this.setState({ currentPage: page });
  // };

  // renderPage = () => {
  //   if (this.state.currentPage === "About") {
  //     return <About />;
  //   } else if (this.state.currentPage === "Portfolio") {
  //     return <Portfolio/>;
  
  //   } else if (this.state.currentPage === "TitlePage") {
  //     return <TitlePage/>;
  //   } else {
  //     return <Skills />;
  //   }
  // };

  render() {
  
    return (
      
       
        
          
          
      
        <Layout className="layout">
          {/* <Header justify="center">
          <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
          current={current}
          handleClick={this.handleClick}
          />
     
            
          </Header> */}
        <Content style={{ padding: '0px' }}>
        
        {/* {this.renderPage()} */}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Built by Catalina Williams using Ant Design ©2018</Footer>
      </Layout>
   
    )
  }
}

export default PortfolioCont;
