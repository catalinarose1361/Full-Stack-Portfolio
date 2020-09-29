import React from "react";
import { Link } from "react-router-dom";
import { LogoutOutlined } from '@ant-design/icons';

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
