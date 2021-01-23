import React from "react";
import { Link } from "react-router-dom";
import { FunctionOutlined } from '@ant-design/icons';
//THIS FOOTER COMPONENT ONLY APPEARS ON THE LANDING PAGE "/"
function FooterComp () {
 
  return (
      
    <div style={{ marginBottom: '50px'}} id="footer">

      <Link to="/about">

      <FunctionOutlined style={{ color:'#ffffff', fontSize: '50px' }} />
         
      </Link>

    </div>
         
  )
  
}

export default FooterComp;
