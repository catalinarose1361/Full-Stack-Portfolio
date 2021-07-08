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

  const gridStyle = {
    width: '50%',
    
  };

  return (

    <>
    <Row justify='center'>

    <Card style={{maxWidth: '800px'}}>

      <PageHeader
        title="Catalina Williams"
        className="site-page-header"
        subTitle="Full Stack JavaScript Developer"
        tags={<Tag color="green">available for hire</Tag>}
        avatar={{ src: profilePic, size: 'large' }}
        extra={[

          // <Button href={certification} >
          //   Certification
          // </Button>,

          // <Button href={resume} download>
          //   Resume
          // </Button>

        ]}
      >
        <Button href={certification} >
            Certification
          </Button>

          <Button href={resume} download>
            Resume
          </Button>
        
         <Paragraph>
         Pleased to meet you, and thank you for taking time out of your busy day to check out my portfolio! Allow me to tell you a little bit about myself, and my qualifications.
         </Paragraph>
         <Paragraph>
My name is Catalina, I'm a Full-Stack JavaScript Developer living in the beautiful state of Colorado. I spend my days committing code to GitHub, exercising with my VR headset, and caring for my dog.
</Paragraph>
<Paragraph>
A few years ago, I began to grow tired of customer service jobs. After six years of full-time work, I wasn't growing professionally or intellectually. Eventually, I decided to switch career paths and make a daring leap into the Technology Industry.
</Paragraph>

<Paragraph>
I earned my Web Development qualifications at the University of Denver's Coding Bootcamp. I developed skills in JavaScript, HTML, CSS, jQuery, MySQL, MongoDB, Node.js, React.js, Git, and more. I graduated in April 2020, certifying 240 classroom hours completed.
</Paragraph>
<Paragraph>
Post-Bootcamp, I have continued to develop my skills in pursuit of a Career as a Full Stack JavaScript Developer. I specialize in building Web Applications using M.E.R.N Stack Technologies and deploying them live to Heroku. If you would like to check out my portfolio of personal projects, please visit www.hirecatalina.com
</Paragraph>
<Paragraph>
I'm currently seeking Full-Time opportunities, and open to relocation anywhere. If you would like to reach out regarding a job opportunity please email me at webdevcatalina@gmail.com or message me on LinkedIn. I look forward to hearing from you!
        </Paragraph>

       

        <Button type="primary" onClick={showDrawer3}>
          Skillset
        </Button>

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