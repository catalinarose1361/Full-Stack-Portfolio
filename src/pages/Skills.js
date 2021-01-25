import React from "react";
import { Typography, Divider, Row, Col, List } from 'antd';

const { Title } = Typography;
const frontEndSkill = ["HTML", "JavaScript", "jQuery", "CSS", "React"]
const backEndSkill = ["Python", "Node.js", "ORM", "MVC", "Express", "Passport.js"]
const cssFramework = ["Bootstrap", "Bulma", "Materialize", "UiKit", "Ant.Design"]  
const toolsTech = ["Git", "Github", "Postman", "SQL Workbench", "VS Code", "Heroku"] 
const dataBaseSkill = ["MySQL", "MongoDB"]  
const apiSkill = ["API's", "JSON", "AJAX"]
// const csSkill = ["Algorithms", "Data Structures"]

const Skills = () => (

  <div>

    {/* <Row  style={{marginTop:'50px'}} justify="center">

      <Divider>

        <Typography>

          <Title>Technical Skills</Title>

        </Typography>  

      </Divider>

    </Row> */}

    <Row style={{marginTop:'100px'}} gutter={16} justify="center">
        
      <Col span={4}>

        <h2 orientation="left">Front-End Dev</h2>

        <List
          size="large"
          bordered
          dataSource={frontEndSkill}
          renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
        />

      </Col>

      <Col span={4}>

        <h2 orientation="center">Back-End Dev</h2>

        <List
          size="large"
          bordered
          dataSource={backEndSkill}
          renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
        />

      </Col>

      <Col span={4}>

        <h2 orientation="right">Frameworks</h2>

        <List
          size="large"
          bordered
          dataSource={cssFramework}
          renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
        />

      </Col>

      <Col span={4}>

        <h2 orientation="right">Tools</h2>

        <List
          size="large"
          bordered
          dataSource={toolsTech}
          renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
        />

      </Col>

      <Col span={4}>

        <h2 orientation="right">Databases</h2>

        <List
          size="large"
          bordered
          dataSource={dataBaseSkill}
          renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
        />

      </Col>

      <Col span={4}>

        <h2 orientation="right">API</h2>

        <List
          size="large"
          bordered
          dataSource={apiSkill}
          renderItem={item => <List.Item><Typography.Text level={3}>{item}</Typography.Text ></List.Item>}
        />

      </Col>
     
    </Row>

  </div>
)
export default Skills