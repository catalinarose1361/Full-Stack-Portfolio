import React from "react";
import { Tabs } from 'antd';
import { Avatar } from 'antd';
import profilePic from "../../images/IMG_3001.png"

const { TabPane } = Tabs;
const About = () => (
  

    <>

    <h3>Catalina Williams</h3>
   
    <div class="uk-width-auto">

    <Avatar src={profilePic} />

    </div>

    <div class="uk-width-expand">

        

        <p class="uk-text-meta uk-margin-remove-top">27 Years Old, CO USA</p>

        

        

    </div> 
    <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Introduction" key="1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="General Information" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
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
      <TabPane tab="Hobbies and Interests" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div>
  </>
);

export default About;