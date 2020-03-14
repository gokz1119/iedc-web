import React from 'react'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Achievements from './Achievements';
import Gallery from './Gallery';
import Team from './Team';
import Contact from './Contact';
import "../css/fixed.css";

const Landing = () => {
	return (
		<div className="landing" >

			<Navbar />
			<Home />
			<About/>
			<Achievements/>
			<Gallery/>
			<Team/> 
			<Contact/>
		</div>
		
	)
}


export default Landing
