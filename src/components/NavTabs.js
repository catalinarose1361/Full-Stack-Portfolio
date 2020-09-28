import React from "react";
import {  Link, NavLink } from "react-router-dom"
import { GithubOutlined, LinkedinOutlined, YahooOutlined, PhoneOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Row, Col} from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography


// this.state = {
  
//   current: 'mail'
// };

// const handleClick = e => {
// console.log('click ', e);
// this.setState({ current: e.key });
// }
function NavTabs () {
  // const { current } = this.state;
  

  return (
   

    
    <Row justify="center">
      <Header >

    <Menu  inlineIndent={50}   mode="horizontal">
      <Menu.Item  key="mail" icon={<MailOutlined />} className="nav-item">
      <NavLink 
                className="nav-link"
                to="/about"
                // without this peice of code, Active link will always be highlighted
                // isActive={() => window.location.pathname === "/"}
                activeClassName="active"
                 >
                    About
                </NavLink>
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />} className="nav-item">
      <NavLink 
                className="nav-link"
                to="/portfolio"
                activeClassName="active"
                 >
                    Portfolio
                </NavLink>
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />} className="nav-item">
      <NavLink 
                className="nav-link"
                to="/skills"
                
                activeClassName="active"
                 >
                    Skills
                </NavLink>
      </Menu.Item>
     
     
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Connect">
     
            <Menu.Item key="setting:1"><a href="https://www.linkedin.com/in/catalinarwilliams/"><LinkedinOutlined style={{ fontSize: '32px' }} /></a><Text>CatalinaRWilliams</Text></Menu.Item>
            <Menu.Item key="setting:2"><a href="https://github.com/catalinarose1361"><GithubOutlined style={{ fontSize: '32px' }} /></a><Text>CatalinaRose1361</Text></Menu.Item>
            <Menu.Item key="setting:2"><a href="mailto:catalinarose@yahoo.com"><YahooOutlined style={{ fontSize: '32px' }} /></a><Text>CatalinaRose@yahoo.com</Text></Menu.Item>
            <Menu.Item key="setting:2"><PhoneOutlined style={{ fontSize: '32px' }} /><Text>(719) 749-8070</Text></Menu.Item>
  
        
        </SubMenu>
    
      
    
    
    </Menu>
      </Header>
    </Row>

  
   
 
  );
}

export default NavTabs;