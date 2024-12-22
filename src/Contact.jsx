import "./Contact.css";
const Contact = () => {
	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", "5a96327b-2641-42f5-bac3-3bb72c910c5a");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		}).then((res) => res.json());
		if (res.success) {
			alert(res.message);
		}
	};
	return (
		<div className="contactbox" id="contact">
			<h1 id="touch">Get in touch</h1>
			<div className="contactinfo">
				<div className="left">
					<h1 id="talk">Let's talk</h1>
					<p>
						Feel free to reach out! Whether you have a question, an opportunity,
						or just want to connect, I’d love to hear from you. As a passionate
						student exploring web development, I’m always open to collaborating
						on exciting projects, discussing ideas, or learning from others.
						Drop me a message through the form , or connect with me on LinkedIn
						or X. Let’s make something amazing together!
					</p>
					<div className="iconbox">
						<div className="icon">
							<a href="mailto:work.raushangupta@gmail.com">
								<img src="mail.svg" alt="mail" />
							</a>
							<p>work.raushangupta@gmail.com</p>
						</div>
						<div className="icon">
							<a href="https://github.com/RaushanGupta1516" target="_blank">
								<img src="github.svg" alt="github" />
							</a>
							<p>github.com/RaushanGupta1516</p>
						</div>
						<div className="icon">
							<a href="https://x.com/RaushanGupta_16" target="_blank">
								<img src="twiter.svg" alt="x" />
							</a>
							<p>x.com/RaushanGupta_16</p>
						</div>
						<div className="icon">
							<a
								href="https://www.linkedin.com/in/raushan-gupta-464535330/"
								target="_blank"
							>
								<img src="linkedin.svg" alt="linkedin" />
							</a>
							<p>linkedin.com/in/raushan-gupta-464535330/</p>
						</div>
					</div>
				</div>
				<div className="right">
					<form onSubmit={onSubmit}>
						<label htmlFor="namee">Your Name</label>
						<input
							type="text"
							name="name"
							id="namee"
							placeholder="Enter your name"
							required
							spellCheck="false"
						/>

						<label htmlFor="email">Your Email</label>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="Enter your email"
							required
							spellCheck="false"
						/>

						<label htmlFor="message">Write your message here</label>
						<textarea
							name="message"
							id="message"
							placeholder="Enter your message"
							required
							spellCheck="false"
						></textarea>

						<button>Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
