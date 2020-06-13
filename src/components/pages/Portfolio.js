import React, { Component } from "react";
import Projects from "../Projects"
// import Search from "./Search";
import { List, Collapse } from 'antd';
import passwordPic from "../../images/Screenshot (26).png"
import weatherPic from "../../images/Screenshot (27).png"
import notePic from "../../images/Screenshot (28).png"
import streamerPic from "../../images/Screenshot (32).png"
import budgetPic from "../../images/Screenshot (50).png"
import fitPic from "../../images/Screenshot (51).png"
import corgiPic from "../../images/Screenshot (52).png"



const ProjectData = [
  {
    id: 1,
    name: "Password Generator",
    image: passwordPic,
    github: "https://github.com/catalinarose1361/Password-Generator",
    deployed: "https://catalinarose1361.github.io/Password-Generator/",
    description: 
    "Generate a random password based on user specifications. Front End: Vanilla JavaScript, UI Kit, HTML, CSS"
      
  },
  {
    id: 2,
    name: "Weather Application",
    image: weatherPic,
    github: "https://github.com/catalinarose1361/Weather-App",
    deployed: "https://catalinarose1361.github.io/Weather-App/",
    description: "Search any city in the world for daily and 5-day weather forecasts Front End: jQuery, Bootstrap, Open Weather API, HTML, CSS"
    

  },
  {
    id: 3,
    name: "Note Taker",
    image: notePic,
    github: "https://github.com/catalinarose1361/Notes-Application",
    deployed: "https://hidden-earth-80309.herokuapp.com/",
    description: "A virtual To-Do list. Front-End: jQuery, Bootstrap, HTML, CSS. Backend: Sequelize, MySQL, Node.js, Express"
  },
  {
    id: 4,
    name: "Streamer",
    image: streamerPic,
    github: "https://github.com/catalinarose1361/Streamer",
    deployed: "https://infinite-cliffs-65236.herokuapp.com/",
    description: "Track the movies and TV shows you watch, Create watchlists, and create a user profile. Front End: Handlebars, Materialize, MovieDB API,  Owl Carousel, Granim.js, CSS, Chart.js. Backend: Node.js, Sequelize, MySQL, Express, Passport"
  },
  {
    id: 5,
    name: "Budget Track",
    image: budgetPic,
    github: "https://github.com/catalinarose1361/Budget-Track",
    deployed: "https://catalinas-budget-tracker.herokuapp.com/",
    description: "Track your expenses and enter data online and offline. Front-End: jQuery, HTML, CSS . Back-End: IndexedDB, MongoDB, Mongoose"
  },
  {
    id: 6,
    name: "Fit Track",
    image: fitPic,
    github: "https://github.com/catalinarose1361/Fit-Track",
    deployed: "https://coding-corgis.herokuapp.com/",
    description: "Keep track of your workouts and analyze data over time. Front-End: jQuery, Chart.js, HMTL, CSS, Bootstrap. Back-End: MongoDB, Mongoose, Node.js"
  },
  {
    id: 7,
    name: "Coding Corgii",
    image: corgiPic,
    github: "https://github.com/catalinarose1361/Coding-Corgi-E-Commerce",
    deployed: "https://coding-corgis.herokuapp.com/",
    description: "Keep track of your workouts and analyze data over time. Front-End: jQuery, Chart.js, HMTL, CSS, Bootstrap. Back-End: MongoDB, Mongoose, Node.js"
  }
];

class Portfolio extends Component {
	

	render() {
		return (
			<div className="container">
				
					
			<div className="jumbotron text-center">
							<h1 className="display-4">Catalina's Portfolio</h1>
							
							
							
						</div>
						<List
                        grid={{ gutter: 16, column: 3 }}
                        dataSource={ProjectData}
                        renderItem={item => (

                            <List.Item>
                               
                                           <Projects
                                                key={item.id}
                                                name={item.name}
                                                github={item.github}
                                                src={item.image}
                                                deployed={item.deployed}
                                                description={item.description}
                                                
                                            />
                               
                            </List.Item>
                        )}
						
						/>
					

			</div>
		);
	}
}

export default Portfolio;