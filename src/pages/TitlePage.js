import React from "react";
import { Link } from "react-router-dom";
import { LoginOutlined } from '@ant-design/icons';
import logo from '../images/Icons/logo_size.jpg';



const TitlePage = () => {
   
    return (
      
        <div id="background" style={{backgroundImage: `url(${logo})`, textAlign:'center'}}>
        
            {/* <div id="footer">
                <Link to="/about">
                    <LoginOutlined style={{ fontSize: '32px' }} />
                    Enter
                </Link>

            </div> */}
         
        </div>
       
    );
    }
export default TitlePage