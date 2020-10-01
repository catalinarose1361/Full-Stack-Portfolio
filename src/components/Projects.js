import React from "react";
import {  Button, Collapse, Card, Carousel, List, Typography, Col, Row } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons';
import { GithubOutlined, DesktopOutlined, YahooOutlined, PhoneOutlined } from '@ant-design/icons';
const { Meta } = Card;
const { Panel } = Collapse;
function Projects(props) {
  console.log(props.src)
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    
  
    <Card 
      hoverable
      style={{textAlign: "center"}}
      cover={
        <Carousel dotPosition={'left'} afterChange={onChange}>
    <div>
    <img alt={'project screenshots'} width={500} src={props.src.image1}></img>
    </div>
    <div>
    <img alt={'project screenshots'} width={500} src={props.src.image2}></img>
    </div>
    <div>
    <img alt={'project screenshots'} width={500} src={props.src.image3}></img>
    </div>
    
  </Carousel>
      }
      >
        <Row >
          <Col span={24}>

  <Meta style={{textColor: 'white'}} title={props.name}  />
          </Col>
          
         

        </Row>
   <Row>
     <Col span={12}>
     <Button href={props.github} icon={<GithubOutlined style={{ fontSize: '32px' }} />}  shape="square"  size='large'>
         
        </Button>
     </Col>
    
     <Col span={12}>
     <Button href={props.deployed} icon={<DesktopOutlined style={{ fontSize: '32px' }} />}  shape="square"  size='large'>
          
        </Button>
     </Col>
     </Row>     
  
  
    
          
    
           
    <Collapse style={{textAlign: "left"}}
     bordered={true} 
    
     expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
     className="site-collapse-custom-collapse"
     >
       <Panel header="Description" key={props.key}>
       {props.description} 
       </Panel>
      {/* <Panel header="Links" key={props.key}>
        
  <Button href={props.deployed} type="primary" shape="round"  size='small'>
          Deployed App
        </Button>
  <Button href={props.github} type="primary" shape="round"  size='small'>
          Github Repo
        </Button>
      
    </Panel> */}
    <Panel header="Technologies Used" key={props.key}>
    <List
    
      bordered
      dataSource={props.technology}
      renderItem={item => (
        <List.Item>
          <Typography.Text mark></Typography.Text> {item}
        </List.Item>
      )}
    />
      
    </Panel>
    </Collapse>
    
        
    </Card> 
      
      
    

    
  );
}

export default Projects;