import React from "react";
import { Typography, Divider, Avatar, Tabs, Row, Col, Card, Space, List } from 'antd';
import profilePic from "../../images/profile-pictures/IMG_3001.png"
import fullStackPic from "../../images/Document Screenshots/fullStack.png"
import fullStackCert from "../../documents/certificate.pdf"
import pythonCert from "../../documents/CertificateOfCompletion_Learning Python.pdf"
import resumeFormat from "../../documents/resume.formatted.pdf"

import resumePic from "../../images/Document Screenshots/resume.png"
import pythonPic from "../../images/Document Screenshots/python.png"

const { Title, Paragraph, Text } = Typography;
const frontEndSkill = ["HTML", "JavaScript", "jQuery", "CSS", "React"]
const backEndSkill = ["Python", "Node.js", "MongoDB", "MySQL", "Express"]
const cssFramework = ["Bootstrap", "Bulma", "Materialize", "UiKit", "Ant.Design"]  
const toolsTech = ["Git", "Github", "Postman", "SQL Workbench", "VS Code"] 
   


// const { TabPane } = Tabs;
const About = () => (
  

    <div style={{ textAlign: 'center' }} id= "container">

   

    
    <Row justify="center">
        <Col >
            <Typography>
                <Title>Introduction</Title>
                <Paragraph bold>
                <Avatar style={{textAlign: 'center'}} size={150}src={profilePic} />
    <h3 style={{textAlign: 'center'}}>Catalina Williams</h3>
   
    <Title level={4}>Allow me to introduce myself, 

My name is Catalina, I'm a Full Stack Web developer looking to turn my passion into a career!

I'm a graduate of Denver University's Coding Bootcamp program, where I developed strong skills in Full Stack Web Development. 

Post-Bootcamp I've been keeping my skills sharp by continuing to update my portfolio projects, and learning new coding languages. 

I'm looking to fill an entry-level role at a company that will embrace my potential as a trainable newcomer in the Tech industry. I desire to be part of a team of more experienced professionals that I can learn from and grow my skills</Title>
        <Title level={4}>Thank you for taking the time to visit my portfolio website! If you would like to look at my work, please naviagate to the "Portfolio" section. If you have any feedback on my portfolio, or know of an opportunity that would be a good fit please naviage to the "Connect" Section</Title>
                </Paragraph>
               
                
            </Typography>
        </Col>
    </Row>
    
    <Row justify="center">
        <Typography>
            <Title>Technical Skills</Title>
        </Typography>  
    </Row>
    <Row justify="center">
        <Col>
        
    <Divider orientation="left">Front-End Development</Divider>
    <List
      size="large"
   
      bordered
      dataSource={frontEndSkill}
      renderItem={item => <List.Item><Typography.Title level={3}>{item}</Typography.Title ></List.Item>}
    />
        </Col>
        <Col>
        
    <Divider orientation="center">Back-End Development</Divider>
    <List
      size="large"
     
      bordered
      dataSource={backEndSkill}
      renderItem={item => <List.Item><Typography.Title level={3}>{item}</Typography.Title ></List.Item>}
    />
        </Col>
        <Col>
        
    <Divider orientation="right">CSS Frameworks</Divider>
    <List
      size="large"
     
      bordered
      dataSource={cssFramework}
      renderItem={item => <List.Item><Typography.Title level={3}>{item}</Typography.Title ></List.Item>}
    />
        </Col>
        <Col>
        
    <Divider orientation="right">Tools and Technologies</Divider>
    <List
      size="large"
     
      bordered
      dataSource={toolsTech}
      renderItem={item => <List.Item><Typography.Title level={3}>{item}</Typography.Title ></List.Item>}
    />
        </Col>
    </Row>
    <Row justify="center">
        <Typography>
            <Title>Credentials</Title>
        </Typography>
    </Row>
    <Row gutter={16} justify="center" >
        <Col span={8}>

            <div className="card-container">
                <Card 
                hoverable
                style={{width: 250}}
                cover={ <img alt={"certification"} src={fullStackPic} /> }
                >

                    <a class="button is-inverted" href={fullStackCert} download>

                        <span class="icon">

                            <i class="fas fa-file-download"></i>

                        </span>

                        <span>DOWNLOAD CERTIFICATION</span>
        
                    </a>
                </Card> 
            </div> 
        </Col>

        <Col span={8}>

            <div className="card-container">

                <Card 
                hoverable
                style={{width: 250}}
                cover={ <img alt={"certification"} src={resumePic} /> }
                >

                    <a class="button is-inverted" href={resumeFormat} download>

                        <span class="icon">

                            <i class="fas fa-file-download"></i>

                        </span>

                        <span>DOWNLOAD RESUME</span>
        
                    </a>
                </Card>  
            </div>
        </Col> 
        <Col>
            <div>
                <Card 
                hoverable
                style={{width: 250}}
                cover={ <img alt={"certification"} src={pythonPic} /> }
                >

                    <a class="button is-inverted" href={pythonCert} download>

                        <span class="icon">

                            <i class="fas fa-file-download"></i>

                        </span>

                        <span>DOWNLOAD CERTIFICATION</span>
        
                    </a>

                </Card>  

            </div>
   
        </Col>

               
    </Row>

  </div>
);

export default About;