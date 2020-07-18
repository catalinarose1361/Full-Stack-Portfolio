import React from "react";
import { Tabs } from 'antd';
import { Avatar } from 'antd';
import profilePic from "../../images/profile-pictures/IMG_3001.png"
import { Typography } from 'antd';

const { Text } = Typography;

const { TabPane } = Tabs;
const About = () => (
  

    <>

    <h3>Catalina Williams</h3>
   
    <div>

    <Avatar src={profilePic} />

    </div>

    <div>

        

        <p>27 Years Old, CO USA</p>

        

        

    </div> 
    <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Introduction" key="1">
      <Text strong>Full Stack developer with an eye for style and design; leveraging my skills to develop visually beautiful, user-friendly applications.

Earned a certificate in full stack development from Denver University. Developed skills in JavaScript, CSS, React.js, Node.js, MongoDB, and MySQL. 

My ability to focus on the big picture without neglecting stylistic details enables me to combine front-end design with back-end functionality. 

My background in Anthropology helps me create user-friendly applications with enriching content relatable to diverse populations and cultures.

I worked as part of a team of students to develop an E-Commerce, full stack React application that connects coders to hourly, contract work.   

I am excited to demonstrate my new skills to build a successful career and presence in the Technology Industry.</Text>
      </TabPane>
      <TabPane tab="General Information" key="2">
        <p>Education</p>
        <p>Technologies</p>
        <p>Skills</p>
      </TabPane>
      <TabPane tab="Download Credentials" key="3">
      <a class="button is-inverted" href="https://github.com/catalinarose1361">

<span class="icon">

<i class="fab fa-github"></i>

</span>

<span>GITHUB PROFILE</span>

</a>

<a class="button is-inverted" href="resume2.pdf" download>

  <span class="icon">

      <i class="fas fa-file-download"></i>

      </span>

  <span>DOWNLOAD RESUME</span>

</a>
      </TabPane>
      <TabPane tab="Hobbies and Interests" key="4">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div>
  </>
);

export default About;