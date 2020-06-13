import React, { Component } from "react";
import NavTabs from "./NavTabs";
import { Layout } from 'antd';

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const { Header, Content, Footer } = Layout;
class PortfolioCont extends Component {
  state = {
    currentPage: "About",
    // hovered: false
  };
 
  
  // hide = () => {
  //   this.setState({
  //     hovered: false,
  //   });
  // };
  
  
  // handleHoverChange = visible => {
  //   this.setState({
  //     hovered: visible,
  //     clicked: false,
  //   });
  // };
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
      return <Contact />;
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
    //   <div>
    //     <NavTabs
    //       currentPage={this.state.currentPage}
    //       handlePageChange={this.handlePageChange}
    //     />
    //     {this.renderPage()}
    //   </div>
    )
  }
}

export default PortfolioCont;
