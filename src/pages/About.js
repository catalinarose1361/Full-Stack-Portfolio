import React from "react";
import { Typography, Avatar, Row, Col, Image } from 'antd';
import profilePic from "../images/profile-pictures/IMG_3001.jpg";       

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
                <Title>Introducing Catalina,</Title>
      
                <Typography>

                    <Paragraph  bold>
                        {/* <h3 style={{textAlign: 'center'}}>Catalina Williams</h3> */}
   
                        <Text maxLength={15}>Catalina Williams is a Full 

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
    
    </div>
);

export default About;