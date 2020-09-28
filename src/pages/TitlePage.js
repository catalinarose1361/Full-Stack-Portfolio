import React from "react";
import  { Button } from 'antd';
import { RightOutlined, LoginOutlined } from '@ant-design/icons';
import {  Link } from "react-router-dom"
import logo from '../images/Icons/logo_transparent_background.png'
import '../App.less'


const TitlePage = () => {
    // const imageUrl = logo
    return (
      
        <div id="background"     style={{backgroundImage: `url(${logo})`, textAlign:'center'}}>
            

            

<div id="footer">
            <a href="%PUBLIC_URL%/about">
         <LoginOutlined style={{ fontSize: '32px' }} />
            </a>

</div>
         
        </div>
      
       
    );
    }
export default TitlePage;