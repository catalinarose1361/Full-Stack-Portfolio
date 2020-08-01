import React, { Component } from "react";
import NavTabs from "./NavTabs";
import { Layout } from 'antd';
import Granim from 'react-granim'
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Connect from "./pages/Connect";

const { Header, Content, Footer } = Layout;
class PortfolioCont extends Component {
  state = {
    currentPage: "About",
    
  };
 
  
 
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio
      
      />;
    } else {
      return <Connect />;
    }
  };

  render() {
    return (
        <Layout className="layout">

        <Header>
          
          
          <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        </Header>
        <Content style={{ padding: '0 50px' }}>
        
        {this.renderPage()}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
   
    )
  }
}

export default PortfolioCont;
