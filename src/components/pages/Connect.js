import React from "react";
import { Tabs } from 'antd';
const { TabPane } = Tabs;

const Connect = () => 
<>
  <div class="uk-container uk-container-small uk-margin-xlarge-top uk-text-center">

            <div class="uk-position-center">
                
                

               

               
                
                
                
            
            
            
            
            
            </div>
    
        </div>
        <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Mobile" key="1">
          <a>

<span class="icon">

    <i class="fas fa-mobile-alt"></i>

</span>

<span>7197498070</span>

</a>
          </TabPane>
          <TabPane tab="Email" key="2">
          <a class="button is-outlined" href="mailto:catalinarose@yahoo.com">

<span class="icon">

    <i class="far fa-paper-plane"></i>

</span>

<span>catalinarose@yahoo.com</span>

</a>
          </TabPane>
         
          <TabPane tab="Social Media" key="3">
          <a class="button is-outlined" href='https://www.linkedin.com/in/catalinarwilliams?trk=profile-badge'>

<span class="icon">

    <i class="fab fa-linkedin"></i>

</span>

<span>CatalinaRWilliams</span>

</a>

          </TabPane>
        </Tabs>
      </div>
      </>


export default Connect;