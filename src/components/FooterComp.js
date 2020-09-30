import React from "react";
import { Link } from "react-router-dom";
import { KeyOutlined } from '@ant-design/icons';

function FooterComp () {
 
    return (
      
      <div style={{ marginBottom: '50px'}} id="footer">

        <Link to="/about">
        <KeyOutlined style={{ fontSize: '50px' }} />
         
          

        </Link>

      </div>
         
    )
  
}

export default FooterComp;
