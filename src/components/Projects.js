import React from "react";
import { List, Avatar, Collapse, Card, Carousel } from 'antd'
import { UserOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
function Projects(props) {
  console.log(props.src)
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <>
   
    <Card title={props.name}>
    <Carousel afterChange={onChange}>
    <div>
    <img alt={'project screenshots'} width={272} src={props.src.image1}></img>
    </div>
    <div>
    <img alt={'project screenshots'} width={272} src={props.src.image2}></img>
    </div>
    <div>
    <img alt={'project screenshots'} width={272} src={props.src.image3}></img>
    </div>
    <div>
    <img alt={'project screenshots'} width={272} src={props.src.image4}></img>
    </div>
  </Carousel>

    label="Expandable"
    
          
          description={<div>
            <li>"GitHub:"{props.github}</li>
            <li>"Deployed:"{props.deployed}</li>
           
    <li><Collapse bordered={false} defaultActiveKey={['1']}>
      <Panel header="View Details" key={props.key}>
      {props.description}
    </Panel>
    </Collapse>
    </li>
          </div>}
          
          </Card>
    
  </>
    
  );
}

export default Projects;