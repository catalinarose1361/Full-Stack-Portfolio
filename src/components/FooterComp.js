import React from "react";
import { Link } from "react-router-dom";
import { CoffeeOutlined } from '@ant-design/icons';
//THIS FOOTER COMPONENT ONLY APPEARS ON THE LANDING PAGE "/"
function FooterComp () {
 
  return (
      
    <div style={{ marginBottom: '50px'}} id="footer">

      <Link to="/about">

      <CoffeeOutlined style={{ color:'#530EF0', fontSize: '50px' }} />
         
      </Link>

    </div>
         
  )
  
}

export default FooterComp;
