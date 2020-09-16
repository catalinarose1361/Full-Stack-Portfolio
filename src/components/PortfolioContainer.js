import React, { Component } from "react";
import NavTabs from "./NavTabs";
import { Layout, PageHeader } from 'antd';

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Connect from "./pages/Connect";
import Skills from "./pages/Skills"
import { Typography } from 'antd';

const { Title } = Typography;
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
      return <Portfolio/>;
    } else if (this.state.currentPage === "Skills") {
      return <Skills/>;
    } else {
      return <Connect />;
    }
  };

  render() {
    return (
      <Layout>
       
          <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
          />
          
          
      
        <Layout className="layout">
          <Header>
            <PageHeader >
            <Title justify="end" level={2}></Title>
            </PageHeader>
          </Header>
        <Content style={{ padding: '0px' }}>
        
        {this.renderPage()}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
   </Layout>
    )
  }
}

export default PortfolioCont;
