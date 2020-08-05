import React from "react";
import { List, Typography } from "antd"
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
const { Text } = Typography
const Connect = () => (
  <List
  size="large"

  bordered
 
>
  <List.Item>
<Text>Linkedin:
</Text>

  </List.Item>
  <Text>Github: </Text>
  <List.Item>


  </List.Item>
  <Text>
    Email:
  </Text>
  <List.Item>
  </List.Item>
  <Text>
    Cell Phone:
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