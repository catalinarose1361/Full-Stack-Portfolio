import React from "react";
import { NavLink, Link } from "react-router-dom"
import { GithubOutlined, LinkedinOutlined, YahooOutlined, PhoneOutlined, IdcardOutlined, UserAddOutlined, ToolOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Row, Col, Tooltip } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons';


const { Header } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography


function NavTabs () {
  
  return (
   
    <Header id="headerContainer" >

      <Row justify="center">
        {/* NAME LOGO lINK COL */}
        <Col style={{textAlign: 'left'}} span={8}>

        <Tooltip title="Title Page" color={'green'}>

          <Link to="/">

          <SettingOutlined style={{ color:'#530EF0', fontSize: '25px' }} />

          </Link>
          </Tooltip>

        </Col> 
        {/* NAV MENU COL */}
        <Col style={{textAlign: 'center'}} span={8}>
        
          <Menu  id="menuDiv"  mode="horizontal">

            <Menu.Item  key="mail" icon={<IdcardOutlined style={{ fontSize: '24px' }} />} className="nav-item">

              <NavLink 

                className="nav-link"
                to="/about"
                // without this peice of code, Active link will always be highlighted
                isActive={() => window.location.pathname === "/about"}
                activeClassName="active"

              > 

                about

              </NavLink>

            </Menu.Item>

            <Menu.Item key="app" icon={<AppstoreOutlined style={{ fontSize: '24px' }} />} className="nav-item">

              <NavLink 

                className="nav-link"
                to="/portfolio"
                activeClassName="active"

              > 

                portfolio

              </NavLink>

            </Menu.Item>

           
     
            <SubMenu key="SubMenu" icon={<UserAddOutlined style={{ fontSize: '24px' }} />} title="connect">
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
        <Col style={{textAlign: 'right' }} span={8}>
        <Tooltip title="Site Repo" color={'green'} >

        <a href="https://github.com/catalinarose1361/React-Portfolio">

          <GithubOutlined style={{ color:'#530EF0', fontSize: '25px',  }} />

        </a>
        </Tooltip>

        </Col> 

      </Row>
      
    </Header>


  );

}

export default NavTabs;