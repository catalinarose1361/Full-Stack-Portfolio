import React from "react";
import { Link } from "react-router-dom";
import { SettingOutlined  } from '@ant-design/icons';
import { Tooltip } from 'antd';

//THIS FOOTER COMPONENT ONLY APPEARS ON THE LANDING PAGE "/"

function FooterComp () {
 
  return (
      
    <div style={{ marginBottom: '50px'}} id="footer">
      <Tooltip title="unlock portfolio" color={'green'}>

      <Link to="/about">

      <SettingOutlined spin style={{ color:'#530EF0', fontSize: '50px' }} />
         
      </Link>
      </Tooltip>

    </div>
         
  )
  
}

export default FooterComp;
