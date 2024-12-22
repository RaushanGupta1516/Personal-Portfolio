import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Footer.css";
const Footer = () => {
	return (
		<div className="footerbox">
			
			<p>Designed and Developed by <span> Raushan Gupta.</span></p>
			<p> Copyright ©2024 | All Rights Reserved.</p>
			<AnchorLink href="#navbar"><img src="up.svg" alt="up" /> </AnchorLink>
		</div>
	);
};

export default Footer;
