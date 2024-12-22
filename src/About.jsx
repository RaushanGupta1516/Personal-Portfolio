import "./About.css";
const About = () => {
	return (
	<>
		<div className="aboutbox" id="about">
			<h1 id="abouth1">About me</h1>
			<div className="aboutinfo">
				<img src="aboutphoto.jpg" alt="aboutpic" />
				<div className="details">
					<p>
						I’m Raushan Gupta, a passionate front-end developer and problem
						solver with two years of hands-on experience in creating responsive,
						user-centered websites and applications. Currently a college
						student, I’ve spent the past two years sharpening my skills in HTML,
						CSS, JavaScript, and popular frameworks like React. My projects
						showcase my commitment to writing clean, efficient code and building
						seamless user experiences.
					</p>
					<p>
						Beyond the code, I enjoy tackling challenges that push my
						problem-solving abilities, whether it’s debugging complex issues or
						optimizing performance. This portfolio highlights my journey, my
						work, and my ongoing growth as a developer ready to take on the next
						big challenge.
					</p>
					{/* <div className="skills">
						<div className="skill">
							<h4>HTML & CSS</h4>
							<div className="line" style={{ width: "400px" }}></div>
						</div>
						<div className="skill">
							<h4>Javascript</h4>
							<div className="line" style={{ width: "340px" }}></div>
						</div>
						<div className="skill">
							<h4>React JS</h4>
							<div className="line" style={{ width: "500px" }}></div>
						</div>
						<div className="skill">
							<h4>Bootstrap</h4>
							<div className="line" style={{ width: "450px" }}></div>
						</div>
						<div className="skill">
							<h4>Java & Python</h4>
							<div className="line" style={{ width: "340px" }}></div>
						</div>
						<div className="skill">
							<h4>Git & GitHub</h4>
							<div className="line" style={{ width: "280px" }}></div>
						</div>
					</div> */}
				</div>
			</div>
			
		</div>
		<div className="achievements">
		<div className="achieved">
			<h1>8.9</h1>
			<h3>CGPA</h3>
		</div>
		<div className="partition"></div>
		<div className="achieved">
			<h1>10+</h1>
			<h3>PROJECTS COMPLETED</h3>
		</div>
		<div className="partition"></div>
		<div className="achieved">
			<h1>7+</h1>
			<h3>GITHUB REPOSITORIES</h3>
		</div>
			</div>
			</>
	);
};
export default About;
