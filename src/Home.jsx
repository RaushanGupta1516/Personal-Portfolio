import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Home.css";
const Home = () => {
	return (
		<div className="homebox" id="home">
			<img  id="profiledp" src="profilepic.jpg" alt="dp" height="180px" />
			<h1 id="homeh1">
				<span id="name">I'm Raushan Gupta</span>, frontend developer and web
				designer.
			</h1>
			<p id="homeintro">
				I am a frontend developer with a passion for building responsive,
				user-friendly websites, focused on solving complex problems through
				innovative design.
			</p>
			<div className="homebtn">
         <AnchorLink href="#contact"><button id="homeconnect">Connect With Me</button></AnchorLink>
		 <a href="Resume.pdf" download="Raushan_Gupta_Resume.pdf">
					<button id="resume">My Resume</button>
				</a>
			</div>
		</div>
	);
};

export default Home;
