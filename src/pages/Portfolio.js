import React, { Component } from "react";
import Projects from "../components/Projects";
import { Typography, Divider, Row, Col, List } from 'antd';

// Password Generator Screenshots Import
import passGenPic1 from "../images/Password Generator/Screenshot1.png"
import passGenPic2 from "../images//Password Generator/Screenshot2.png"
import passGenPic3 from "../images//Password Generator/Screenshot3.png"

// Weather Application Screenshots Import
import worldWeatherPic1 from "../images/World Weather/Screenshot1.png"
import worldWeatherPic2 from "../images/World Weather/Screenshot2.png"
import worldWeatherPic3 from "../images/World Weather/Screenshot3.png"

// Note Taker Screenshot Import
import noteTakerPic1 from "../images/Note-Taker/Screenshot1.png"
import noteTakerPic2 from "../images/Note-Taker/Screenshot2.png"
import noteTakerPic3 from "../images/Note-Taker/Screenshot3.png"

// Budget Track Screenshot Import
import budgetTrackPic1 from "../images/Budget Track/Screenshot1.png"
import budgetTrackPic2 from "../images/Budget Track/Screenshot2.png"
import budgetTrackPic3 from "../images/Budget Track/Screenshot3.png"

// Streamer Screenshot Import
import streamerPic1 from "../images/Streamer/Screenshot1.png"
import streamerPic2 from "../images/Streamer/Screenshot2.png"
import streamerPic3 from "../images/Streamer/Screenshot3.png"

// Fit Track Screenshot Import
import fitTrackPic1 from "../images/Fitness Tracker/Screenshot1.png"
import fitTrackPic2 from "../images/Fitness Tracker/Screenshot2.png"
import fitTrackPic3 from "../images/Fitness Tracker/Screenshot3.png"

// Coding Corgi Screenshot Import
import codingCorgiPic1 from "../images/coding-corgis/Screenshot1.png"
import codingCorgiPic2 from "../images/coding-corgis/Screenshot2.png"
import codingCorgiPic3 from "../images/coding-corgis/Screenshot3.png"

// HTML Portfolio Screenshot Import
import htmlPic1 from "../images/HTML Portfolio/Screenshot1.png"
import htmlPic2 from "../images/HTML Portfolio/Screenshot2.png"
import htmlPic3 from "../images/HTML Portfolio/Screenshot3.png"

// Daily Puulse Screenshot Import
// import htmlPic1 from "../images/HTML Portfolio/Screenshot1.png"
// import htmlPic2 from "../images/HTML Portfolio/Screenshot2.png"
// import htmlPic3 from "../images/HTML Portfolio/Screenshot3.png"

const { Title } = Typography;
const ProjectData = [
  {
    id: 1,
    name: "Coding Corgii",
    image: {
      'image1': codingCorgiPic1, 
      'image2': codingCorgiPic2, 
      'image3': codingCorgiPic3
      
    },
    github: "https://github.com/catalinarose1361/Coding-Corgi-E-Commerce",
    deployed: "https://coding-corgis.herokuapp.com/",
    description: "MERN Stack application. Connects coders to hourly work using a standard E-Commerce Model",
    technologies: ["React", "Node.js", "Mongoose", "Nodemailer", "Ant.Design", "Passport.js", "Express", "React Toastify"]
    
  },
  {
    id: 2,
    name: "Streamer",
    image: {
      'image1': streamerPic1, 
      'image2': streamerPic2, 
      'image3': streamerPic3
       
    },
    github: "https://github.com/catalinarose1361/Streamer",
    deployed: "https://infinite-cliffs-65236.herokuapp.com/",
    description: "Track the movies and TV shows you watch, Create watchlists, and a user profile.",
    technologies: ["Handlebars", "Materialize", "MovieDB API",  "Owl Carousel", "Granim.js", "CSS", "Chart.js", "Node.js", "Sequelize", "MySQL", "Express", "Passport"]
  },
  {
    id: 3,
    name: "Fit Track",
    image: {
      'image1': fitTrackPic1, 
      'image2': fitTrackPic2, 
      'image3': fitTrackPic3 
       
    },
    github: "https://github.com/catalinarose1361/Fit-Track",
    deployed: "https://coding-corgis.herokuapp.com/",
    description: "Keep track of your workouts and analyze data over time",
    technologies: ["jQuery", "Chart.js", "HTML5",  "CSS3", "Bootstrap", "Mongoose",  "Node.js"]
    
  },
  {
    id: 4,
    name: "Password Generator",
    image: {
      'image1': passGenPic1, 
      'image2': passGenPic2, 
      'image3': passGenPic3 
       
    },
    github: "https://github.com/catalinarose1361/Password-Generator",
    deployed: "https://catalinarose1361.github.io/Password-Generator/",
    description: "Generate a random password based on user specifications",
    technologies: ["JavaScript", "UI Kit", "HTML5", "CSS3"]
      
  },
  {
    id: 5,
    name: "Note Taker",
    image: {
      'image1': noteTakerPic1, 
      'image2': noteTakerPic2, 
      'image3': noteTakerPic3
       
    },
    github: "https://github.com/catalinarose1361/Notes-Application",
    deployed: "https://hidden-earth-80309.herokuapp.com/",
    description: "A virtual To-Do list",
    technologies: ["jQuery", "Bootstrap", "HTML", "CSS", "Sequelize", "MySQL", "Node.js", "Express"]
  },
  {
    id: 6,
    name: "Weather Application",
    image: {
      'image1': worldWeatherPic1, 
      'image2': worldWeatherPic2, 
      'image3': worldWeatherPic3 
      
    },
    github: "https://github.com/catalinarose1361/Weather-App",
    deployed: "https://catalinarose1361.github.io/Weather-App/",
    description: "Search any city in the world for daily and 5-day weather forecasts Front End: jQuery, Bootstrap, Open Weather API, HTML, CSS",
    technologies: ["jQuery", "Bootstrap", "Open Weather API", "HTML5", "CSS3"]
    

  },
  {
    id: 7,
    name: "Budget Track",
    image: {
      'image1': budgetTrackPic1, 
      'image2': budgetTrackPic2, 
      'image3': budgetTrackPic3 
       
    },
    github: "https://github.com/catalinarose1361/Budget-Track",
    deployed: "https://catalinas-budget-tracker.herokuapp.com/",
    description: "Track your expenses and enter data online and offline. Front-End: jQuery, HTML, CSS . Back-End: IndexedDB, MongoDB, Mongoose",
    technologies: ["jQuery", "HTML5", "CSS3", "IndexedDB", "Mongoose"]
  },
  {
    id: 8,
    name: "HTML Portfolio",
    image: {
      'image1': htmlPic1, 
      'image2': htmlPic2, 
      'image3': htmlPic3 
       
    },
    github: "https://github.com/catalinarose1361/Official-Portfolio-",
    deployed: "https://catalinarose1361.github.io/Official-Portfolio-/",
    description: "This Portfolio site showcases my ability to design websites using HTML/CSS",
    technologies: ["HTML", "CSS3", "UiKit", "Granim.js"]
  }
  // {
  //   id: 9,
  //   name: "Daily Puulse",
  //   image: {
  //     'image1': dailyPic1, 
  //     'image2': dailyPic2, 
  //     'image3': dailyPic3 
       
  //   },
  //   github: "https://github.com/catalinarose1361/Official-Portfolio-",
  //   deployed: "https://catalinarose1361.github.io/Official-Portfolio-/",
  //   description: "This Portfolio site showcases my ability to design websites using HTML/CSS",
  //   technologies: ["WordPress", "Google Analytics", "HostGator"]
  // },
];

class Portfolio extends Component {
	
	render() {

	  return (

		  <div >

        <Row style={{marginTop:'50px'}} justify="center">

          <Divider>

            <Typography>

              <Title>Portfolio Projects</Title>

            </Typography>  

          </Divider>

        </Row>
    
        <List 

          style={{marginTop:'100px'}}                 
          grid={{ gutter: 20,  column: 3 }}
          dataSource={ProjectData}
          renderItem={item => (
                  
            <List.Item justify="center">

              <Col>

                <Projects
                  key={item.id}
                  name={item.name}
                  github={item.github}
                  src={item.image}
                  deployed={item.deployed}
                  description={item.description}
                  technology={item.technologies}                                  
                />

              </Col>

            </List.Item>
                     
          )}
						
		    />

      </div>	

    );
    
  }
  
}

export default Portfolio;