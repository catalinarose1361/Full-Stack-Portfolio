import React from "react";
import { Typography, Avatar, Row, Col } from 'antd';
import profilePic from "../images/profile-pictures/IMG_3001.png";       

const { Title, Paragraph, Text } = Typography;

const About = () => (
  
    <div id="aboutMeContainer" style={{textAlign: "center"}}>

        <Row justify="center">

            <Avatar style={{textAlign: 'center'}} size={150}src={profilePic} />
               
        </Row>
    
        <Row justify="center">
    
            <Title>Allow me to introduce myself,</Title>

        </Row>
    
        <Row justify="center">

            <Col >
      
                <Typography>

                    <Paragraph  bold>
                        <h3 style={{textAlign: 'center'}}>Catalina Williams</h3>
   
                        <Text maxLength={15}>Catalina Williams is a Full 

                        Full Stack Web developer on a mission to turn her Passion for Coding into a career. She

                        graduated Denver University's Coding Bootcamp program, in April 2020 . 

                        Post-Bootcamp I've been keeping my skills sharp by continuing to update my portfolio projects, and learning new coding languages. 

                        I'm looking to fill an entry-level role at a company that will embrace my potential as a trainable newcomer in the Tech industry. I desire to be part of a team of more experienced professionals that I can learn from and grow my skills

                        </Text>

                        <Title level={4}>Thank you for taking the time to visit my portfolio website! If you would like to look at my work, please naviagate to the "Portfolio" section. If you have any feedback on my portfolio, or know of an opportunity that would be a good fit please naviage to the "Connect" Section</Title>

                    </Paragraph>
               
                </Typography>
      
            </Col>

        </Row>
    
    </div>
);

export default About;