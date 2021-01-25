import React from "react";
import { Typography, Row, Col } from 'antd';
import profilePic from "../images/profile-pictures/IMG_3001.jpg";       
import {  GithubOutlined, BookOutlined, BugOutlined  } from '@ant-design/icons';

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

                            Pleased to meet you! My name is Catalina. I build digital experiences. I specialize in both the front end and back end development.
                            

            
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
                <GithubOutlined style={{ color:'#530EF0', fontSize: '80px' }} />
                    {/* <CrownTwoTone twoToneColor={'#b72c2c'} style={{ fontSize: '80px' }}  /> */}

                </Row>

                <Row justify={'center'}>

                    491 GitHub Commits

                </Row>

            </Col>

            {/* MODERN COL */}
            <Col span={8}>

                <Row justify={'center'}>
                <BookOutlined style={{ color:'#530EF0', fontSize: '80px' }} />
                    {/* <RocketTwoTone twoToneColor={'#b72c2c'} style={{ fontSize: '80px' }} /> */}

                </Row>

                <Row justify={'center'}>

                    240 hrs of Coding Bootcamp

                </Row>

            </Col>

            {/* iNTUITIVE COL */}
            <Col span={8}>

                <Row justify={'center'}>
                <BugOutlined style={{ color:'#530EF0', fontSize: '80px' }} />
                    {/* <EyeTwoTone twoToneColor={'#b72c2c'} style={{ fontSize: '80px' }} /> */}

                </Row>

                <Row justify={'center'}>

                Immeasurable Personal Time De-Bugging Code

                </Row>

            </Col>
            
        </Row>
    
    </div>
);

export default About;