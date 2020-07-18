import React from "react";
import {  Button, Collapse, Card, Carousel } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons';
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
      style={{ width: 250 }}
      cover={
        <Carousel afterChange={onChange}>
    <div>
    <img alt={'project screenshots'} width={250} src={props.src.image1}></img>
    </div>
    <div>
    <img alt={'project screenshots'} width={250} src={props.src.image2}></img>
    </div>
    <div>
    <img alt={'project screenshots'} width={250} src={props.src.image3}></img>
    </div>
    
  </Carousel>
      }
      >
  <Meta title={props.name}  />
  {props.description}
  
    
          
    
           
    <Collapse
     bordered={false} 
     defaultActiveKey={['1']}
     expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
     className="site-collapse-custom-collapse"
     >
      <Panel header="View Details" key={props.key}>
        
  <Button href={props.deployed} type="primary" shape="round"  size='small'>
          Deployed App
        </Button>
  <Button href={props.github} type="primary" shape="round"  size='small'>
          Github Repo
        </Button>
      {props.description}
    </Panel>
    </Collapse>
    
        
    </Card>      
      
    

    
  );
}

export default Projects;