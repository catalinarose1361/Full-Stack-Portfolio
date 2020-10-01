import React from "react";
import { Typography, Row, Col } from 'antd';
import profilePic from "../images/profile-pictures/IMG_3002.jpg";       
import {  CrownTwoTone, RocketTwoTone, EyeTwoTone  } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const About = () => (
  
    <div id="aboutMeContainer" style={{textAlign: "center"}}>
       
        <Row style={{marginTop:'50px'}} >

            <Col span={12}>

                <div>

                    <img width={300} src={profilePic} alt="profilepic" />

                </div>

            </Col>
               
            <Col span={12} >

                <Title>Pleased to meet you,</Title>
      
                <Typography>

                    <Paragraph  bold>
                       
                        <Text style={{textAlign:'left'}} strong >

                            My name is Catalina, I'm a Full-Stack Web Developer based in Colorado Springs, CO.
                            I specialize in Front-End design using React.js, and MERN Stack Applications.
                            I aim to build Web Applications that have an  ELEGANT look, a MODERN feel, and an INTUITIVE user experience.
            
                        </Text>
                    
                    </Paragraph>
            
                </Typography>
      
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