import React from "react";
import {  Layout, Menu} from 'antd'
const { Sider } = Layout;



function NavTabs(props) {
  return (
   
<>
    <Sider>
    <Menu style={{ width: 200 }} mode="vertical-right">
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
    </Sider>
  </>
  );
}

export default NavTabs;