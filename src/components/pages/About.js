import React from "react";
import { Avatar, Tabs, Row, Col, Card, Meta } from 'antd';
import profilePic from "../../images/profile-pictures/IMG_3001.png"
import fullStackPic from "../../images/Document Screenshots/fullStack.png"
import fullStackCert from "../../documents/certificate.pdf"
import pythonCert from "../../documents/CertificateOfCompletion_Learning Python.pdf"
import resumeFormat from "../../documents/resume.formatted.pdf"
import { Typography } from 'antd'
import resumePic from "../../images/Document Screenshots/resume.png"
import pythonPic from "../../images/Document Screenshots/python.png"

const { Text } = Typography
const { Title } = Typography

const { TabPane } = Tabs;
const About = () => (
  

    <>

    
    <Row>
    <Col span={18} push={6}>
    <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Introduction" key="1">
          <Text keyboard>Full Stack developer with an eye for style and design; leveraging my skills to develop visually beautiful, user-friendly applications.

Earned a certificate in full stack development from Denver University. Developed skills in JavaScript, CSS, React.js, Node.js, MongoDB, and MySQL. 

My ability to focus on the big picture without neglecting stylistic details enables me to combine front-end design with back-end functionality. 

My background in Anthropology helps me create user-friendly applications with enriching content relatable to diverse populations and cultures.

I worked as part of a team of students to develop an E-Commerce, full stack React application that connects coders to hourly, contract work.   

I am excited to demonstrate my new skills to build a successful career and presence in the Technology Industry.</Text>
          </TabPane>
          <TabPane tab="Download Documents" key="2">
              <Row>
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
    </Row> 


 
          </TabPane>
        </Tabs>
    </div>
   
    </Col>
    <Col span={6} pull={18}>
    <Avatar size={200}src={profilePic} />
    <h3>Catalina Williams</h3>
    <h3>Full Stack Web Developer</h3>
    <h3>27 Years Old</h3>
    </Col>
  </Row>
   
  
  </>
);

export default About;