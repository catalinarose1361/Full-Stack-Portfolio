import React from "react";
import { Typography, Divider, Row, Col, Image } from 'antd';
import profilePic from "../images/profile-pictures/IMG_3002.jpg";       
import {  CrownTwoTone, RocketTwoTone, EyeTwoTone  } from '@ant-design/icons';
const { Title, Paragraph, Text } = Typography;

const About = () => (
  
    <div id="aboutMeContainer" style={{textAlign: "center"}}>
         {/* <Row  style={{marginTop:'40px'}} justify="center">

<Divider>

  <Typography>

    <Title>Pleased to meet you,</Title>

  </Typography>  

</Divider>

</Row> */}

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
                        {/* <h3 style={{textAlign: 'center'}}>Catalina Williams</h3> */}
                        
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
            <Col span={8}>
                <Row justify={'center'}>

            <CrownTwoTone twoToneColor={'#b72c2c'} style={{ fontSize: '80px' }}  />
                </Row>
                <Row justify={'center'}>
            Elegant

                </Row>
            </Col>
            <Col span={8}>
            <Row justify={'center'}>
            <RocketTwoTone twoToneColor={'#b72c2c'} style={{ fontSize: '80px' }} />
            </Row>
            <Row justify={'center'}>
            Modern
            </Row>
            </Col>
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