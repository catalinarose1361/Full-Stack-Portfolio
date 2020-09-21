import React from "react";
import { GithubOutlined, LinkedinOutlined, YahooOutlined, PhoneOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Row, Col} from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography

//  state = {
//     current: 'mail'
//   }
//   handleClick = e => {
//     console.log('click ', e);
//     this.setState({ current: e.key });
//   };

function NavTabs(props) {
  // const { current } = this.state;
  return (
   
<>
    {/* <Sider> */}
    <Row justify="center">
      <Col  span={12} offset={6}>

    <Menu inlineIndent={50} onClick={props.handleClick} selectedKeys={[props.current]} mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />} className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />} className="nav-item">
        <a
          href="#portfolio"
          onClick={() => props.handlePageChange("Portfolio")}
          className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </Menu.Item>
     
      {/* <Menu.Item className="nav-item">
        <a
          href="#connect"
          onClick={() => props.handlePageChange("Connect")}
          className={props.currentPage === "Connect" ? "nav-link active" : "nav-link"}
        >
          Connect
        </a>
      </Menu.Item> */}
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Connect">
     
            <Menu.Item key="setting:1"><a href="https://www.linkedin.com/in/catalinarwilliams/"><LinkedinOutlined style={{ fontSize: '32px' }} /></a><Text>CatalinaRWilliams</Text></Menu.Item>
            <Menu.Item key="setting:2"><a href="https://github.com/catalinarose1361"><GithubOutlined style={{ fontSize: '32px' }} /></a><Text>CatalinaRose1361</Text></Menu.Item>
            <Menu.Item key="setting:2"><a href="mailto:catalinarose@yahoo.com"><YahooOutlined style={{ fontSize: '32px' }} /></a><Text>CatalinaRose@yahoo.com</Text></Menu.Item>
            <Menu.Item key="setting:2"><PhoneOutlined style={{ fontSize: '32px' }} /><Text>(719) 749-8070</Text></Menu.Item>
  
        
        </SubMenu>
      {/* <Menu.Item className="nav-item">
        <a
          href="#skills"
          onClick={() => props.handlePageChange("Skills")}
          className={props.currentPage === "Skills" ? "nav-link active" : "nav-link"}
        >
          Skill Timeline
        </a>
      </Menu.Item> */}
      
    
    
    </Menu>
      </Col>
    </Row>

  
    {/* </Sider> */}
  </>
  );
}

export default NavTabs;