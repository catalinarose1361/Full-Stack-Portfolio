import React, { Component } from "react";
import NavTabs from "./NavTabs";
import { Layout, PageHeader } from 'antd';

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Connect from "./pages/Connect";
// import Skills from "./pages/Skills"
import { Typography, Avatar } from 'antd';
import profilePic from "../images/profile-pictures/IMG_3001.png"
const { Title } = Typography;
const { Header, Content, Footer } = Layout;
class PortfolioCont extends Component {
  state = {
    currentPage: "About",
    current: 'mail'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  
 
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio/>;
    // } else if (this.state.currentPage === "Skills") {
    //   return <Skills/>;
    } else {
      return <Connect />;
    }
  };

  render() {
    const { current } = this.state;
    return (
      <Layout>
       
        
          
          
      
        <Layout className="layout">
          <Header justify="center">
          <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
          current={current}
          handleClick={this.handleClick}
          />
     
            
          </Header>
        <Content style={{ padding: '0px' }}>
        
        {this.renderPage()}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Built by Catalina Williams using Ant Design ©2018</Footer>
      </Layout>
   </Layout>
    )
  }
}

export default PortfolioCont;
