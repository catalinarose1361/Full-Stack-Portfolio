import React from "react";
import { List, Typography } from "antd"
import { GithubOutlined, LinkedinOutlined, YahooOutlined, PhoneOutlined } from '@ant-design/icons';

const { Text } = Typography
const Connect = () => (
  <List
  size="large"

  bordered
 
>
  <List.Item>
    <Text> <LinkedinOutlined /> Linkedin: <a href="https://www.linkedin.com/in/catalinarwilliams/"><LinkedinOutlined /></a>
    </Text>

  </List.Item>
  <Text> <GithubOutlined /> Github: <a href="Github: https://github.com/catalinarose1361"></a> </Text>
  <List.Item>


  </List.Item>
  <Text>
  <YahooOutlined />Email: <a class="button is-outlined" href="mailto:catalinarose@yahoo.com">

 <span class="icon">

    <i class="far fa-paper-plane"></i>

 </span>

<span>catalinarose@yahoo.com</span>

</a>
  </Text>
  <List.Item>
  </List.Item>
  <Text>
  <PhoneOutlined />Cell Phone: <h1> 1 (719) 749-8070</h1>
  </Text>
  <List.Item>


  </List.Item>
</List>


) 
                
           
//           <TabPane tab="Email" key="2">
//           <a class="button is-outlined" href="mailto:catalinarose@yahoo.com">

// <span class="icon">

//     <i class="far fa-paper-plane"></i>

// </span>

// <span>catalinarose@yahoo.com</span>

// </a>
//           </TabPane>
         
     


export default Connect;