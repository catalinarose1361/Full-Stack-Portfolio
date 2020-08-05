import React from "react";
import { Typography, Avatar, Tabs, Row, Col, Card, Space } from 'antd';
import profilePic from "../../images/profile-pictures/IMG_3001.png"
import fullStackPic from "../../images/Document Screenshots/fullStack.png"
import fullStackCert from "../../documents/certificate.pdf"
import pythonCert from "../../documents/CertificateOfCompletion_Learning Python.pdf"
import resumeFormat from "../../documents/resume.formatted.pdf"

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
          <Space direction="vertical">
          <Text level={4} strong>Full Stack developer with a passion for Front-End design</Text>
          <Text level={4} strong>Earned a certificate in full stack development from Denver University</Text>
          <Text  level={4}strong>Developed skills in JavaScript, CSS, React.js, Node.js, Python, MongoDB, and MySQL </Text>
          <Text  level={4}strong> Eager to join a team of proffessionals and begin an exciting career</Text>
          </Space>
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