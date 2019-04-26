import React from "react";
import "../../styles/index.css";

export class Profile extends React.Component {
	render() {
		const pythonStyle = {
			width: "98%"
		};
		const angularStyle = {
			width: "98%"
		};

		const rubyStyle = {
			width: "85%"
		};

		const jsStyle = {
			width: "98%"
		};

		const htmlStyle = {
			width: "95%"
		};

		const skechStyle = {
			width: "60%"
		};
		return (
			<div className="container-fluid">
				<div className="parallax">
					<div id="list-example" className="list-group text-center">
						<a className="list-group-item list-group-item-action pl-3">
							<img
								src="https://frostsnow.com/uploads/biography/2016/12/19/xjason-statham.jpg.pagespeed.ic.mFhCmaxibX.jpg"
								className="image"
								alt="Avatar"
							/>
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#summary">
							<i className="fas fa-file-invoice fa-3x" />
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#language">
							<i className="fas fa-language fa-3x" />
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#interests">
							<i className="fas fa-bicycle fa-3x" />
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#experiences">
							<i className="fas fa-chart-line fa-3x" />
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#projects">
							<i className="far fa-file-code fa-3x" />
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#skills">
							<i className="far fa-star fa-3x" />
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#github">
							<i className="fab fa-github fa-3x" />
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#education">
							<i className="fas fa-graduation-cap fa-3x" />
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#contact">
							<i className="fas fa-user-alt fa-3x" />
						</a>
					</div>
				</div>
				<div className="d-flex flex-column text-center gradient">
					<div className="bd-highlight pt-4">
						<h1 className="display-4">
							JASON <strong>STATHAM</strong>
						</h1>
					</div>
					<div className="bd-highlight font-weight-light">
						<h3 className="font-weight-light">
							Full-Stack Developer
						</h3>
					</div>
				</div>
				<hr className="line" />
				<div className="container">
					<div className="row text-center pt-4">
						<div className="col">
							<div className="bubble text-center font-italic corner">
								<label className="font-weight-light">
									I like saving the world
								</label>
							</div>
							<label className="motto font-italic font-weight-light text-muted">
								Motto
							</label>
						</div>
						<div className="col">
							<div className="bubble text-center font-italic corner">
								<label className="font-weight-light">
									Killing Bad Boys
								</label>
							</div>
							<label className="motto font-italic font-weight-light text-muted">
								Focus
							</label>
						</div>
					</div>
					<br />
					<div
						data-spy="scroll"
						data-target="#list-example"
						data-offset="0"
						className="scrollspy-example pt-4">
						<div className="summary">
							<div className="d-flex flex-row bd-highlight mb-3 pt-4">
								<div className="p-2 bd-highlight">
									<i className="fas fa-file-invoice text-warning fa-3x icon" />
								</div>
								<div className="p-2 bd-highlight" id="summary">
									<label className="font-italic font-weight-light text-dark title">
										&nbsp;S&nbsp;u&nbsp;m&nbsp;m&nbsp;a&nbsp;r&nbsp;y
									</label>
								</div>
							</div>
							<p className="p text-justify text-muted">
								Mision-driven full stack developer with a
								passion for thoughtful UI design, collaboration,
								and teaching.
							</p>
							<p className="p text-justify text-muted">
								I have always sought out opportunities and
								challenges that are meaningful to me. Although
								my professional path has taken many twists and
								turns-from touring and recording artist, to
								employee of the years at a non-profit, to dean
								is scholar at UPenn, to small business owner and
								entrepeneur - I have never stopped engaging my
								passion to help others and solve problems.
							</p>
							<p className="p text-justify text-muted">
								As a web developer, I enjoy using my obsessive
								attention to detail, my unequivocal love for
								making things, and my mission-driven work ethic
								to literally change the world. That is why I am
								excited to make a big impact at a high growth
								company
							</p>
						</div>
						<hr className="border-bottom" />
						<div className="languages">
							<div className="d-flex flex-row bd-highlight mb-3 py-4">
								<div className="p-2 bd-highlight">
									<i className="fas fa-language text-warning fa-3x icon" />
								</div>
								<div className="p-2 bd-highlight" id="language">
									<label className="font-italic font-weight-light text-dark title">
										&nbsp;L&nbsp;a&nbsp;n&nbsp;g&nbsp;u&nbsp;a&nbsp;g&nbsp;e&nbsp;s
									</label>
								</div>
							</div>
							<div className="d-flex bd-highlight pl-4">
								<div className="p-2 flex-fill bd-highlight text-justify">
									<h4 className="p">
										Idiom:
										<span className="text-muted p">
											English
										</span>
									</h4>
									<h4 className="p">
										Level:
										<span className="text-muted p">
											Native
										</span>
									</h4>
								</div>
								<div className="p-2 flex-fill bd-highlight text-justify">
									<h4 className="p">
										Idiom:
										<span className="text-muted p">
											French
										</span>
									</h4>
									<h4 className="p">
										Level:
										<span className="text-muted p">
											Professional
										</span>
									</h4>
								</div>
								<div className="p-2 flex-fill bd-highlight text-justify">
									<h4 className="p">
										Idiom:
										<span className="text-muted p">
											Spanish
										</span>
									</h4>
									<h4 className="p">
										Level:
										<span className="text-muted p">
											Professional
										</span>
									</h4>
								</div>
							</div>
						</div>
						<hr className="border-bottom" />
						<div className="interests">
							<div className="d-flex flex-row bd-highlight mb-3 py-4">
								<div className="p-2 bd-highlight">
									<i className="fas fa-bicycle text-warning fa-3x icon" />
								</div>
								<div
									className="p-2 bd-highlight"
									id="interests">
									<label className="font-italic font-weight-light text-dark title">
										&nbsp;I&nbsp;n&nbsp;t&nbsp;e&nbsp;r&nbsp;e&nbsp;s&nbsp;t&nbsp;s
									</label>
								</div>
							</div>
							<div className="d-flex bd-highlight text-center">
								<div className="p-2 flex-fill bd-highlight p text-muted">
									<h4>Climbing</h4>
								</div>
								<div className="p-2 flex-fill bd-highlight p text-muted">
									<h4>Snowboarding</h4>
								</div>
								<div className="p-2 flex-fill bd-highlight p text-muted">
									<h4>Cooking</h4>
								</div>
							</div>
						</div>
						<hr className="border-bottom" />
						<div className="Experiences title py-4">
							<div className="d-flex flex-row bd-highlight mb-3">
								<div className="p-2 bd-highlight">
									<i className="fas fa-chart-line text-warning fa-3x icon" />
								</div>
								<div
									className="p-2 bd-highlight"
									id="experiences">
									<label className="font-italic font-weight-light text-dark title">
										&nbsp;E&nbsp;p&nbsp;e&nbsp;r&nbsp;i&nbsp;e&nbsp;n&nbsp;c&nbsp;e&nbsp;s
									</label>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-8 float-left pt-4">
									<h2 className="pt-2 font-weight-bold">
										LEAD DEVELOPER
									</h2>
									<h2 className="text-muted">2015-Present</h2>
									<h2 className="text-muted font-weight-light">
										Startup Hubs, San Francisco
									</h2>
								</div>
								<div className="col-sm-4 float-right divider">
									<img
										src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
										className="mx-auto float-right logo"
										alt="..."
									/>
								</div>
								<p className="p text-justify text-muted pt-4">
									Describe your role here lorem ipsum dolor
									sit amet, consetetuer adipiscing elit.
									Aenean commodo ligula eget dolor. Aenean
									massa. Cum soccis natoque penatibus el
									magnis dis paturrient montes, nascetur
									ridiculus mus. Donec quam felis, ultricies
									nec, pellentesque eu, pretium quis sem.
									Nulla consequat massa quis enim. Donec pede
									justo. Sed ut perspiciatis unde omnis iste
									natus error sit voluptamen accusantium
									doloremque laudantium, totam rem aperiam,
									eaque ipsa quae ab illo inventore veritatis
									et quasi architecto beatae vitae dicta sunt
									explicabo.
								</p>
								<div className="d-flex flex-column bd-highlight mb-3 pt-4">
									<div className="p-0 p bd-highlight text-muted">
										-Bullet point
									</div>
									<div className="p-0 p bd-highlight text-muted">
										-Bullet point
									</div>
								</div>
							</div>
							<hr className="border-bottom bg-info pt-1" />
							<div className="row">
								<div className="col-sm-8 float-left pt-4">
									<h2 className="pt-2 font-weight-bold">
										SENIOR SOFTWARE ENGINEER
									</h2>
									<h2 className="text-muted">2014-2015</h2>
									<h2 className="text-muted font-weight-light">
										Google, London
									</h2>
								</div>
								<div className="col-sm-4 float-right divider">
									<img
										src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
										className="mx-auto float-right logo"
										alt="..."
									/>
								</div>
								<p className="p text-justify text-muted pt-4">
									Describe your role here lorem ipsum dolor
									sit amet, consetetuer adipiscing elit.
									Aenean commodo ligula eget dolor. Aenean
									massa. Cum soccis natoque penatibus el
									magnis dis paturrient montes, nascetur
									ridiculus mus. Donec quam felis, ultricies
									nec, pellentesque eu, pretium quis sem.
								</p>
								<div className="d-flex flex-column bd-highlight mb-3 pt-4">
									<div className="p-0 p bd-highlight text-muted">
										-Bullet point
									</div>
									<div className="p-0 p bd-highlight text-muted">
										-Bullet point
									</div>
								</div>
							</div>
							<hr className="border-bottom bg-info pt-1" />
							<div className="row">
								<div className="col-sm-8 float-left pt-4">
									<h2 className="pt-2 font-weight-bold">
										UI DEVELOPER
									</h2>
									<h2 className="text-muted">2012-2014</h2>
									<h2 className="text-muted font-weight-light">
										Amazon, London
									</h2>
								</div>
								<div className="col-sm-4 float-right divider">
									<img
										src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
										className="mx-auto float-right logo"
										alt="..."
									/>
								</div>
								<p className="p text-justify text-muted pt-4">
									Describe your role here lorem ipsum dolor
									sit amet, consetetuer adipiscing elit.
									Aenean commodo ligula eget dolor. Aenean
									massa. Cum soccis natoque penatibus el
									magnis dis paturrient montes, nascetur
									ridiculus mus. Donec quam felis, ultricies
									nec, pellentesque eu, pretium quis sem.
								</p>
								<div className="d-flex flex-column bd-highlight mb-3 pt-4">
									<div className="p-0 p bd-highlight text-muted">
										-Bullet point
									</div>
									<div className="p-0 p bd-highlight text-muted">
										-Bullet point
									</div>
								</div>
							</div>
						</div>
						<hr className="border-bottom" />
						<div className="projects py-4">
							<div className="d-flex flex-row bd-highlight mb-3">
								<div className="p-2 bd-highlight">
									<i className="far fa-file-code text-warning fa-3x icon" />
								</div>
								<div className="p-2 bd-highlight" id="projects">
									<label className="font-italic font-weight-light text-dark title">
										&nbsp;P&nbsp;r&nbsp;o&nbsp;j&nbsp;e&nbsp;c&nbsp;t
									</label>
								</div>
							</div>
							<div className="card-deck pt-4">
								<div className="card">
									<img
										src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">
											<strong>VELOCITY</strong>
										</h5>
										<h5 className="card-text text-info">
											#Velocity
										</h5>
										<p className="card-text">
											<small className="text-muted">
												A responsive website template
												designed to help startup
												promote, market and sell their
												products.
											</small>
										</p>
									</div>
								</div>
								<div className="card">
									<img
										src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">
											<strong>DEVSTUDIO</strong>
										</h5>
										<h5 className="card-text text-info">
											#Devstudio
										</h5>
										<p className="card-text">
											<small className="text-muted">
												A responsive website template
												designed to help startup
												promote, market and sell their
												products.
											</small>
										</p>
									</div>
								</div>
								<div className="card">
									<img
										src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">
											<strong>TEMP0</strong>
										</h5>
										<h5 className="card-text text-info">
											#Tempo
										</h5>
										<p className="card-text">
											<small className="text-muted">
												A responsive website template
												designed to help startup
												promote, market and sell their
												products.
											</small>
										</p>
									</div>
								</div>
								<div className="card">
									<img
										src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">
											<strong>ATOM</strong>
										</h5>
										<h5 className="card-text text-info">
											#Atom
										</h5>
										<p className="card-text">
											<small className="text-muted">
												A responsive website template
												designed to help startup
												promote, market and sell their
												products.
											</small>
										</p>
									</div>
								</div>
								<div className="card">
									<img
										src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
										className="card-img-top"
										alt="..."
									/>
									<div className="card-body">
										<h5 className="card-title">
											<strong>DELTA</strong>
										</h5>
										<h5 className="card-text text-info">
											#Delta
										</h5>
										<p className="card-text">
											<small className="text-muted m-0">
												A responsive website template
												designed to help startup
												promote, market and sell their
												products.
											</small>
										</p>
									</div>
								</div>
							</div>
						</div>
						<hr className="border-bottom" />
						<div className="skills py-4">
							<div className="d-flex flex-row bd-highlight mb-3">
								<div className="p-2 bd-highlight">
									<i className="far fa-star text-warning fa-3x icon" />
								</div>
								<div className="p-2 bd-highlight" id="skills">
									{" "}
									<label className="font-italic font-weight-light text-dark title">
										&nbsp;S&nbsp;k&nbsp;i&nbsp;l&nbsp;l&nbsp;s
									</label>
								</div>
							</div>
							<div className="row  justify-content-around py-4">
								<div className="col-4 d-flex flex-column bd-highlight mb-6">
									<div className="p-2 bd-highlight">
										<label className="python">
											<strong>Python &amp; Django</strong>
										</label>
										<div className="progress">
											<div
												className="progress-bar"
												role="progressbar"
												aria-valuenow="25"
												aria-valuemin="0"
												aria-valuemax="100"
												style={pythonStyle}>
												98%
											</div>
										</div>
									</div>
									<div className="p-2 bd-highlight">
										<label className="python">
											<strong>Angular</strong>
										</label>
										<div className="progress">
											<div
												className="progress-bar"
												role="progressbar"
												aria-valuenow="25"
												aria-valuemin="0"
												aria-valuemax="100"
												style={angularStyle}>
												98%
											</div>
										</div>
									</div>
									<div className="p-2 bd-highlight">
										<label className="python">
											<strong>Rubyon Rails</strong>
										</label>
										<div className="progress">
											<div
												className="progress-bar"
												role="progressbar"
												aria-valuenow="25"
												aria-valuemin="0"
												aria-valuemax="100"
												style={rubyStyle}>
												85%
											</div>
										</div>
									</div>
								</div>
								<div className="col-4 d-flex flex-column bd-highlight mb-6">
									<div className="p-2 bd-highlight">
										<label className="python">
											<strong>
												Javascript &amp;jQuery
											</strong>
										</label>
										<div className="progress">
											<div
												className="progress-bar"
												role="progressbar"
												aria-valuenow="25"
												aria-valuemin="0"
												aria-valuemax="100"
												style={jsStyle}>
												98%
											</div>
										</div>
									</div>
									<div className="p-2 bd-highlight">
										<label className="python">
											<strong>HTML5 &amp; CSS</strong>
										</label>
										<div className="progress">
											<div
												className="progress-bar"
												role="progressbar"
												aria-valuenow="25"
												aria-valuemin="0"
												aria-valuemax="100"
												style={htmlStyle}>
												95%
											</div>
										</div>
									</div>
									<div className="p-2 bd-highlight">
										<label className="python">
											<strong>
												Sketch &amp; Potophop
											</strong>
										</label>
										<div className="progress">
											<div
												className="progress-bar"
												role="progressbar"
												aria-valuenow="25"
												aria-valuemin="0"
												aria-valuemax="100"
												style={skechStyle}>
												60%
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<hr className="border-bottom" />
						<div className="github pt-4">
							<div className="d-flex flex-row bd-highlight mb-3">
								<div className="p-2 bd-highlight">
									<i className="fab fa-github text-warning fa-3x icon" />
								</div>
								<div className="p-2 bd-highlight" id="github">
									<label className="font-italic font-weight-light text-dark title">
										&nbsp;G&nbsp;i&nbsp;t&nbsp;h&nbsp;u&nbsp;b
									</label>
								</div>
							</div>
							<div className="img">
								<img
									src="https://media.npr.org/assets/img/2012/09/18/breakdown3-06-17-11-01_custom-a75c8687649851cb34253472a5005ecb6a99a436-s800-c85.jpg"
									className="rounded mx-auto d-block"
									alt="..."
								/>
							</div>
							<div className="img">
								<img
									src="https://help.github.com/assets/images/help/profile/contributions_graph.png"
									className="rounded mx-auto d-block"
									alt="..."
								/>
							</div>
						</div>
						<hr className="border-bottom" />
						<div className="Education pt-4">
							<div className="d-flex flex-row bd-highlight mb-3">
								<div className="p-2 bd-highlight">
									<i className="fas fa-graduation-cap text-warning fa-3x icon" />
								</div>
								<div
									className="p-2 bd-highlight"
									id="education">
									<label className="font-italic font-weight-light text-dark title">
										&nbsp;E&nbsp;d&nbsp;u&nbsp;c&nbsp;a&nbsp;t&nbsp;i&nbsp;o&nbsp;n
									</label>
								</div>
							</div>
							<div className="row justify-content-around pt-4">
								<div className="col-6 pr-4">
									<h2 className="pt-2 font-weight-bold">
										MSC IN COMPUTER SCIENCE
									</h2>
									<h3 className="text-muted">
										University of London
									</h3>
									<div className="img">
										<img
											src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
											className="mx-auto b-block"
											alt="..."
										/>
									</div>
									<i className="far fa-clock fa-2x text-primary">
										<span className="font-weight-bold text-muted pl-2">
											2011-2012
										</span>
									</i>
									<div>
										<p className="p pt-4 text-justify text-muted">
											Describe your role here lorem ipsum
											dolor sit amet, consetetuer
											adipiscing elit. Aenean commodo
											ligula eget dolor. Aenean massa. Cum
											soccis natoque penatibus el magnis
											dis paturrient montes, nascetur
											ridiculus mus. Donec quam felis,
											ultricies nec, pellentesque eu,
											pretium quis sem.
										</p>
									</div>
									<div className="d-flex flex-column bd-highlight mb-3 pt-4">
										<div className="p-0 p bd-highlight text-muted">
											-Bullet point
										</div>
										<div className="p-0 p bd-highlight text-muted">
											-Bullet point
										</div>
									</div>
								</div>
								<div className="col-6 divider pl-4">
									<h2 className="pt-2 font-weight-bold">
										BSC IN APPLIED MATHEMATICS
									</h2>
									<h3 className="text-muted">
										Bristol University
									</h3>
									<div clasname="img">
										<img
											src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
											className="mx-auto b-block"
											alt="..."
										/>
									</div>
									<i className="far fa-clock fa-2x text-primary">
										<span className="font-weight-bold text-muted pl-2">
											2011-2012
										</span>
									</i>
									<div>
										<p className="p pt-4 text-justify text-muted">
											Describe your role here lorem ipsum
											dolor sit amet, consetetuer
											adipiscing elit. Aenean commodo
											ligula eget dolor. Aenean massa. Cum
											soccis natoque penatibus el magnis
											dis paturrient montes, nascetur
											ridiculus mus. Donec quam felis,
											ultricies nec, pellentesque eu,
											pretium quis sem.
										</p>
									</div>
									<div className="d-flex flex-column bd-highlight mb-3 pt-4">
										<div className="p-0 p bd-highlight text-muted">
											-Bullet point
										</div>
										<div className="p-0 p bd-highlight text-muted">
											-Bullet point
										</div>
									</div>
								</div>
							</div>
						</div>
						<hr className="border-bottom" />
						<div className="contact pt-4">
							<div className="d-flex flex-row bd-highlight mb-3">
								<div className="p-2 bd-highlight">
									<i className="fas fa-user-alt text-warning fa-3x icon" />
								</div>
								<div className="p-2 bd-highlight" id="contact">
									<label className="font-italic font-weight-light text-dark title">
										&nbsp;C&nbsp;o&nbsp;n&nbsp;t&nbsp;a&nbsp;c&nbsp;t
									</label>
								</div>
							</div>
							<div className="d-flex flex-column bd-highlight mb-3 pt-4 info">
								<div className="p-2 bd-highlight">
									<i className="fas fa-envelope fa-2x" />
									<label className="text-muted pl-4 cont">
										jason@jasonstatham.com
									</label>
								</div>
								<div className="p-2 bd-highlight">
									<i className="fas fa-phone fa-2x" />
									<label className="text-muted pl-4 cont">
										Phone: 234 2342 342
									</label>
								</div>
								<div className="p-2 bd-highlight">
									<i className="fas fa-globe fa-2x" />
									<label className="text-muted pl-4 cont">
										jasonstatham.com
									</label>
								</div>
								<div className="p-2 bd-highlight">
									<i className="fab fa-linkedin fa-2x" />
									<label className="text-muted pl-4 cont">
										linkein.com/in/jasonstatham
									</label>
								</div>
								<div className="p-2 bd-highlight">
									<i className="fab fa-github fa-2x" />
									<label className="text-muted pl-4 cont">
										github.com/jasonstatham
									</label>
								</div>
								<div className="p-2 bd-highlight">
									<i className="fab fa-twitter fa-2x" />
									<label className="text-muted pl-4 cont">
										twitter.com/jasonstatham
									</label>
								</div>
								<div className="p-2 bd-highlight">
									<i className="fab fa-stack-overflow fa-2x" />
									<label className="text-muted pl-4 cont">
										123456 / alandoe
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
