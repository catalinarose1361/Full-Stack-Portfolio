import React from "react";
import { NavLink, Link } from "react-router-dom"
import { GithubOutlined, LinkedinOutlined, YahooOutlined, PhoneOutlined, IdcardOutlined, UserAddOutlined, ToolOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Row, Col } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons';
import nameLogo from "../images/Icons/namelogo.jpg"
import tagLine from "../images/Icons/tagline.jpg"

const { Header } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography

function NavTabs () {
  
  return (
   
    <Header id="headerContainer" >

      <Row justify="center">
        {/* NAME LOGO lINK COL */}
        <Col style={{textAlign: 'left'}} span={8}>

          <Link to="/">

            <img width={300} src={nameLogo} alt="namelogo" />

          </Link>

        </Col> 
        {/* NAV MENU COL */}
        <Col style={{textAlign: 'center'}} span={12}>

          <Menu  id="menuDiv"  mode="horizontal">

            <Menu.Item  key="mail" icon={<IdcardOutlined style={{ fontSize: '24px' }} />} className="nav-item">

              <NavLink 

                className="nav-link"
                to="/about"
                // without this peice of code, Active link will always be highlighted
                isActive={() => window.location.pathname === "/about"}
                activeClassName="active"

              > 

                About 

              </NavLink>

            </Menu.Item>

            <Menu.Item key="app" icon={<AppstoreOutlined style={{ fontSize: '24px' }} />} className="nav-item">

              <NavLink 

                className="nav-link"
                to="/portfolio"
                activeClassName="active"

              > 

                Portfolio

              </NavLink>

            </Menu.Item>

            <Menu.Item key="app" icon={<ToolOutlined style={{ fontSize: '24px' }} />} className="nav-item">

              <NavLink 

                className="nav-link"
                to="/skills"
                activeClassName="active"

              > 

                Skills

              </NavLink>

            </Menu.Item>
     
            <SubMenu key="SubMenu" icon={<UserAddOutlined style={{ fontSize: '24px' }} />} title="Connect">
              {/* LINKEDIN */}
              <Menu.Item key="setting:1">

                <a href="https://www.linkedin.com/in/catalinarwilliams/">

                  <LinkedinOutlined style={{ fontSize: '32px' }} />
                  
                </a>

                <Text>CatalinaRWilliams</Text>

              </Menu.Item>
              {/* GITHUB */}
              <Menu.Item key="setting:2">

                <a href="https://github.com/catalinarose1361">

                  <GithubOutlined style={{ fontSize: '32px' }} />

                </a>

                <Text>CatalinaRose1361</Text>

              </Menu.Item>
              {/* EMAIL */}
              <Menu.Item key="setting:2">

                <a href="mailto:catalinarose@yahoo.com">

                  <YahooOutlined style={{ fontSize: '32px' }} />

                </a>

                <Text>CatalinaRose@yahoo.com</Text>

              </Menu.Item>
              {/* TELEPHONE */}
              <Menu.Item key="setting:2">

                <PhoneOutlined style={{ fontSize: '32px' }} />

                <Text>(719) 749-8070</Text>

              </Menu.Item>
  
            </SubMenu>

          </Menu>

        </Col>
      {/* TAGLINE COL */}
        <Col style={{textAlign: 'right' }} span={4}>

          <img width={250} src={tagLine} alt="namelogo" />

        </Col> 

      </Row>
      
    </Header>


  );

}

export default NavTabs;