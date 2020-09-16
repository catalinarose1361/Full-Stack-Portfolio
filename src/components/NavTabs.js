import React from "react";
import { Avatar, Layout, Menu} from 'antd'
import profilePic from "../images/profile-pictures/IMG_3001.png"
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
          href="#connect"
          onClick={() => props.handlePageChange("Connect")}
          className={props.currentPage === "Connect" ? "nav-link active" : "nav-link"}
        >
          Connect
        </a>
      </Menu.Item>
      <Menu.Item className="nav-item">
        <a
          href="#skills"
          onClick={() => props.handlePageChange("Skills")}
          className={props.currentPage === "Skills" ? "nav-link active" : "nav-link"}
        >
          Skill Timeline
        </a>
      </Menu.Item>
      
    
    
    </Menu>
    <Avatar size={150}src={profilePic} />
    <h3 style={{textAlign: 'center'}}>Catalina Williams</h3>
  
    </Sider>
  </>
  );
}

export default NavTabs;