import React from "react";
import { NavLink, Link } from "react-router-dom"
import { GithubOutlined, LinkedinOutlined, YahooOutlined, IdcardOutlined, UserAddOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Row, Col, Tooltip } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons';


const { Header } = Layout;
const { SubMenu } = Menu;
const { Text } = Typography


function NavTabs () {
  
  return (
   
    <Header id="headerContainer" >

      <Row justify="center">
       
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

                projects

              </NavLink>

            </Menu.Item>

           
     
            <SubMenu key="SubMenu" icon={<UserAddOutlined style={{ fontSize: '24px' }} />} title="connect">
              {/* LINKEDIN */}
              <Menu.Item key="setting:1">

                <a href="https://www.linkedin.com/in/catalinarwilliams/">

                  <LinkedinOutlined style={{ fontSize: '32px' }} />
                  
                </a>

                <Text>Connect</Text>

              </Menu.Item>
              {/* GITHUB */}
              <Menu.Item key="setting:2">

                <a href="https://github.com/catalinarose1361">

                  <GithubOutlined style={{ fontSize: '32px' }} />

                </a>

                <Text>View Code</Text>

              </Menu.Item>
              {/* EMAIL */}
              <Menu.Item key="setting:2">

                <a href="mailto:webdevcatalina@gmail.com">

                  <YahooOutlined style={{ fontSize: '32px' }} />

                </a>

                <Text>Send Email</Text>

              </Menu.Item>
            
  
            </SubMenu>

          </Menu>

        </Col>
    
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