import React from "react";
import { Typography, Divider, Avatar, Tabs, Row, Col, Card, Space, List } from 'antd';


const { Title, Paragraph, Text } = Typography;
const frontEndSkill = ["HTML", "JavaScript", "jQuery", "CSS", "React"]
const backEndSkill = ["Python", "Node.js", "ORM", "MVC", "Express", "Passport.js"]
const cssFramework = ["Bootstrap", "Bulma", "Materialize", "UiKit", "Ant.Design"]  
const toolsTech = ["Git", "Github", "Postman", "SQL Workbench", "VS Code", "Heroku"] 
const dataBaseSkill = ["MySQL", "MongoDB"]  
const apiSkill = ["API's", "JSON", "AJAX"]
const csSkill = ["Algorithms", "Data Structures"]
// const { TabPane } = Tabs;
const Skills = () => (
    <div>
<Row justify="center">

        <Divider>

        <Typography>
            <Title>Technical Skills</Title>
        </Typography>  
        </Divider>
    </Row>
    <Row gutter={16} justify="center">
        
        <Col span={4}>
        <Card>
    <Divider orientation="left">Front-End Development</Divider>
    <List
      size="large"
   
      bordered
      dataSource={frontEndSkill}
      renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
    />
    </Card>
        </Col>
        <Col span={4}>
        <Card>
    <Divider orientation="center">Back-End Development</Divider>
    <List
      size="large"
     
      bordered
      dataSource={backEndSkill}
      renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
    />
    </Card>
        </Col>
        <Col span={4}>
        <Card>
    <Divider orientation="right">CSS Frameworks</Divider>
    <List
      size="large"
     
      bordered
      dataSource={cssFramework}
      renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
    />
    </Card>
        </Col>
        <Col span={4}>
        <Card>
    <Divider orientation="right">Tools and Technologies</Divider>
    <List
      size="large"
     
      bordered
      dataSource={toolsTech}
      renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
    />
        </Card>
        </Col>
        <Col span={4}>
        <Card>
    <Divider orientation="right">Databases</Divider>
    <List
      size="large"
     
      bordered
      dataSource={dataBaseSkill}
      renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
    />
    </Card>
        </Col>
        <Col span={4}>
        <Card>
    <Divider orientation="right">API Interaction</Divider>
    <List
      size="large"
     
      bordered
      dataSource={apiSkill}
      renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
    />
    </Card>
        </Col>
     
   
    </Row>
    </div>
)
export default Skills