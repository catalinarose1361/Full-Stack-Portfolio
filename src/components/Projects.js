import React from "react";
import { List, Avatar, Collapse, Card, Carousel } from 'antd'
import { UserOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
function Projects(props) {
  console.log(props)
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <>
   
    <Card title={props.name}>
    <Carousel afterChange={onChange}>
    <div>
    <img width={272} src={props.src}></img>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
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