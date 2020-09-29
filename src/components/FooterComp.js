import React from "react";
import { Layout } from 'antd';
import { Link } from "react-router-dom";
import { LoginOutlined, SendOutlined, ArrowRightOutlined, LogoutOutlined } from '@ant-design/icons';

const { Footer } = Layout;

function FooterComp () {
 
    return (
      
      <div id="footer">
                <Link to="/about">
                    <LogoutOutlined style={{ fontSize: '80px' }} />
                    Enter
                </Link>

            </div>
         
      
   
    )
  
}

export default FooterComp;
