import React from "react";
import {  Menu } from 'antd'
import { Typography } from 'antd';

const { Title } = Typography;

function NavTabs(props) {
  return (
  
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
     
      <Menu.Item className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </Menu.Item>
      <Menu.Item className="nav-item">
        <a
          href="#portfolio"
          onClick={() => props.handlePageChange("Portfolio")}
          className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </Menu.Item>
      <Menu.Item className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Connect")}
          className={props.currentPage === "Connect" ? "nav-link active" : "nav-link"}
        >
          Connect
        </a>
      </Menu.Item>
      
    
    
    </Menu>
  
  );
}

export default NavTabs;