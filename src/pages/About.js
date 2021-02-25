import React, { useState } from 'react';
import { Typography, Row, Col, Drawer, Button,  PageHeader, Tag, Card, List } from 'antd';
import profilePic from "../images/profile-pictures/IMG1.png";       
import resume from "../documents/Catalina's Resume.pdf"
import certification from "../documents/certificate.pdf"
const { Paragraph } = Typography;

const frontEndSkill = ["HTML5", "jQuery", "JavaScript", "ReactJS", "CSS3", "Ant.Design"]
const backEndSkill = ["Python", "Node.js", "Git", "HerokuCLI", "APIs"]
const dbSkill = ["MySQL", "MongoDB",]

const About = () => {

    const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

    const [visible3, setVisible3] = useState(false);
  const showDrawer3 = () => {
    setVisible3(true);
  };
  const onClose3 = () => {
    setVisible3(false);
  };

  return (

    <>
    <Row justify='center'>

    <Card style={{ width: 800 }}>

      <PageHeader
        title="Catalina Williams"
        className="site-page-header"
        tags={<Tag color="green">available for hire</Tag>}
        avatar={{ src: profilePic, size: 'large' }}
        extra={[

          <Button href={certification} >
            Certification
          </Button>,

          <Button href={resume} download>
            Resume
          </Button>

        ]}
      >

         <Paragraph>
          I build full stack web applications using ReactJS. My comprehensive knowlege of both Front-End and Back-End technologies, allows me the freedom to code and create without limits.
        </Paragraph>

        <Paragraph>
          I graduated an all female Coding Bootcamp course in April 2020, since that day I have been continuing upon that education by staying active in my coding and continued learning.
          I am currently seeking my first professional role in the Technical Industry, please consider this portfolio and its contents to speak for my proficiency as a Developer.
        </Paragraph>

        <Paragraph>
          Thank you for visiting my website, please take your time and look around. 
        </Paragraph>

        <Button type="primary" onClick={showDrawer3}>
          Skillset
        </Button>,

        <Button type="primary" onClick={showDrawer}>
          Education
        </Button>
  
      </PageHeader>
  
    </Card>

  </Row>




      <Row justify="center">
        <Col span={12}>
         {/* <Button type="primary" onClick={showDrawer3}>
        Skillset
      </Button> */}
      <Drawer
        title="Technical Skillset"
        placement="right"
        closable={true}
        onClose={onClose3}
        visible={visible3}
        width="600"
      >
         <Row style={{marginTop:'50px'}} gutter={16} justify="center">
        
        <Col span={8}>
  
          <h4 orientation="center">Client Side</h4>
  
          <List
            size="medium"
            itemLayout="horizontal"
            bordered
            dataSource={frontEndSkill}
            renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
          />
  
        </Col>
  
        <Col span={8}>
  
          <h4 orientation="center">Server Side</h4>
  
          <List
            size="medium"
            bordered
            dataSource={backEndSkill}
            renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
          />
  
        </Col>
  
        <Col span={8}>
  
          <h4 orientation="center">Databases</h4>
  
          <List
            size="medium"
            bordered
            dataSource={dbSkill}
            renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
          />
  
        </Col>
        </Row>
      </Drawer>
        </Col>
      <Col>

      {/* <Button type="primary" onClick={showDrawer}>
        Education
      </Button> */}
      <Drawer
        title="Education"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        width="800"
      >
        <Card>
        <PageHeader
      
      title="University of Denver Coding Bootcamp"
      tags={<Tag color="green">Graduated</Tag>}
      
     
    >
      </PageHeader>
        <Row>
         
        <p>October 2019 - April 2020</p>
        

        </Row>
        </Card>

        <Card>
        <PageHeader
      
      title="University of Colorado Denver"
      tags={<Tag color="red">Dropped Out</Tag>}
      
     
    >
      </PageHeader>
        <p>August 2014 - December 2014</p>
        </Card>
        <Card>
        <PageHeader
      
      title="Pikes Peak Community College"
      tags={<Tag color="orange">Transferred</Tag>}
      
     
    >
      </PageHeader>
        <p>August 2012 - May 2014</p>
        </Card>
        <Card>
        <PageHeader
      
      title="Cheyenne Mountain High School"
      tags={<Tag color="green">Graduated</Tag>}
      
     
    >
      </PageHeader>
        <p>September 2008 - May 2011</p>
        </Card>
      </Drawer>
      </Col>
      </Row>
  
    
    </>
  );
       
      
    
};

export default About;