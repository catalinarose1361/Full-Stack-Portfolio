import React from "react";
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const About = () => (
  

    <>

    <h3>Catalina Williams</h3>
   
    <div class="uk-width-auto">

        <img class="uk-border-rounded" width="150" height="150" src="Images/catalina3.jpg" />

    </div>

    <div class="uk-width-expand">

        

        <p class="uk-text-meta uk-margin-remove-top">27 Years Old, CO USA</p>

        

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

    </div> 
    <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Tab Title 1" key="1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="Tab Title 2" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="Tab Title 3" key="3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  </div>
  </>
);

export default About;