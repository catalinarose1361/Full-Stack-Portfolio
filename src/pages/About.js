import React from "react";
import { Typography, Avatar, Row, Col, Image } from 'antd';
import profilePic from "../images/profile-pictures/IMG_3002.jpg";       
import {  CrownTwoTone, RocketTwoTone, EyeTwoTone  } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;

const About = () => (
  
    <div id="aboutMeContainer" style={{textAlign: "center", marginTop: '100px'}}>

        <Row  justify="center">
            <Col span={12}>
                <div>
                <img width={300} src={profilePic} alt="profilepic" />

                </div>
            </Col>
               
   

            <Col span={12} >
                <Title>Pleased to meet you,</Title>
      
                <Typography>

                    <Paragraph  bold>
                        {/* <h3 style={{textAlign: 'center'}}>Catalina Williams</h3> */}
   
                        <Text maxLength={15}>My name is Catalina Williams, I'm a Full-Stack Web Developer from Colorado. Thank you for taking the time to visit my portfolio site. 


                        Full Stack Web developer working towards a goal to turn her Passion for Coding into a career. Catalina has experience building full stack web applications that start off as nothing more than idea.
                        She 

                        Graduating Denver University's Coding Bootcamp program in April 2020, Catalina has developed the skills nessasary to build full stack web applications.

                        Post-Bootcamp I've been keeping my skills sharp by continuing to update my portfolio projects, and learning new coding languages. 

                        I'm looking to fill an entry-level role at a company that will embrace my potential as a trainable newcomer in the Tech industry. I desire to be part of a team of more experienced professionals that I can learn from and grow my skills

                        </Text>

                        

                    </Paragraph>
               
                </Typography>
      
            </Col>

        </Row>
        <Row gutter={16}>
            <Col span={8}>
            <CrownTwoTone twoToneColor={'#b72c2c'} style={{ fontSize: '80px' }}  />
            Elegant
            </Col>
            <Col span={8}>
            <RocketTwoTone twoToneColor={'#b72c2c'} style={{ fontSize: '80px' }} />
            Modern
            </Col>
            <Col span={8}>
            <EyeTwoTone twoToneColor={'#b72c2c'} style={{ fontSize: '80px' }} />
            Intuitive
            </Col>
        </Row>
    
    </div>
);

export default About;