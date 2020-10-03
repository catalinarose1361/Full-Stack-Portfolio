import React from "react";
import { Typography, Row, Col } from 'antd';
import profilePic from "../images/profile-pictures/IMG_3001.jpg";       
import {  CrownTwoTone, RocketTwoTone, EyeTwoTone  } from '@ant-design/icons';

const { Paragraph, Text } = Typography;

const About = () => (
  
    <div id="aboutMeContainer" style={{textAlign: "center"}}>
       
        <Row style={{marginTop:'50px'}} >

            <Col span={10}>

                <div>

                    <img width={300} src={profilePic} alt="profilepic" />

                </div>

            </Col>
               
            <Col span={14} >
                <div style={{textAlign:'left', marginTop:'100px', fontSize: '30px', marginRight: '60px'}}>

                <Typography>

                    <Paragraph  bold>
                       
                        <Text id="aboutText"  strong >

                            Pleased to meet you! My name is Catalina, I'm a Full-Stack Web Developer based in Colorado. 
                            I have a passion for building Applications that have an  ELEGANT look, a MODERN feel, and an INTUITIVE user experience.
                            I specialize in React.js and MERN Stack Applications.

            
                        </Text>
                    
                    </Paragraph>
            
                </Typography>
                </div>
               
      
      
            </Col>

        </Row>

        <Row style={{marginTop:'100px'}} gutter={16}>

            {/* ELEGANT COLUM */}
            <Col span={8}>

                <Row justify={'center'}>

                    <CrownTwoTone twoToneColor={'#b72c2c'} style={{ fontSize: '80px' }}  />

                </Row>

                <Row justify={'center'}>

                    Elegant

                </Row>

            </Col>

            {/* MODERN COL */}
            <Col span={8}>

                <Row justify={'center'}>

                    <RocketTwoTone twoToneColor={'#b72c2c'} style={{ fontSize: '80px' }} />

                </Row>

                <Row justify={'center'}>

                    Modern

                </Row>

            </Col>

            {/* iNTUITIVE COL */}
            <Col span={8}>

                <Row justify={'center'}>

                    <EyeTwoTone twoToneColor={'#b72c2c'} style={{ fontSize: '80px' }} />

                </Row>

                <Row justify={'center'}>

                    Intuitive

                </Row>

            </Col>
            
        </Row>
    
    </div>
);

export default About;