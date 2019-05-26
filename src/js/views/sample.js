import React from "react";
import "../../styles/index.css";

export class Sample extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						{/*parallax section*/}
						{/*<div className="row">
							<div className="col-12 parallaxSample" />
						</div>*/}
						<div className="parallaxSample">
							<div className="row ">
								<div className="col-12 col-sm-2">
									<nav className="list-group text-center vertical-menu">
										<ul className="rounded">
											<li className="border-bottom">
												<a
													href="#section-top"
													className="section-top">
													<img
														src="https://frostsnow.com/uploads/biography/2016/12/19/xjason-statham.jpg.pagespeed.ic.mFhCmaxibX.jpg"
														className="img-menu"
														alt="Avatar"
													/>
												</a>
											</li>
											<li className="border-bottom">
												<a href="#section-1">
													<i className="fas fa-file-invoice fa-3x" />
												</a>
											</li>
											<li className="border-bottom">
												<a href="#section-2">
													<i className="fas fa-language fa-3x" />
												</a>
											</li>
											<li className="border-bottom">
												<a href="#section-3">
													<i className="fas fa-bicycle fa-3x" />
												</a>
											</li>
											<li className="border-bottom">
												<a href="#section-4">
													<i className="fas fa-chart-line fa-3x" />
												</a>
											</li>
											<li className="border-bottom">
												<a href="#section-5">
													<i className="far fa-file-code fa-3x" />
												</a>
											</li>
											<li className="border-bottom">
												<a href="#section-6">
													<i className="far fa-star fa-3x" />
												</a>
											</li>
											<li className="border-bottom">
												<a href="#section-8">
													<i className="fas fa-graduation-cap fa-3x" />
												</a>
											</li>
											<li>
												<a href="#section-9">
													<i className="fas fa-user-alt fa-3x" />
												</a>
											</li>
										</ul>
									</nav>
								</div>
								<div className="col-12 col-sm-10">
									<div className="row d-flex justify-content-end">
										<div className="col text-right col-img">
											<img
												src="https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/4geeks-icon-black.png"
												className="geeks-img"
												alt="..."
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*the main name*/}
						<div className="row gradient">
							<div className="col-12 text-center">
								<h1 className="display-4">
									JASON <strong>STATHAM</strong>
								</h1>
								<br />
								<h3 className="bd-highlight font-weight-light">
									Full-Stack Developer
								</h3>
							</div>
						</div>
						<hr />
						{/*body*/}
						<div className="row">
							<div className="col-12">
								<div className="container">
									<div className="row">
										<div className="col-12 col-md-6 text-center">
											<div className="bubble text-center font-italic corner-bubble">
												<label className="font-weight-light">
													I like saving the world
												</label>
											</div>

											<label className="motto font-italic font-weight-light text-muted">
												Motto
											</label>
										</div>
										<div className="col-12 col-md-6 text-center">
											<div className=" bubble text-center font-italic corner-bubble">
												<label className="font-weight-light">
													Killing Bad Boys
												</label>
											</div>

											<label className="motto font-italic font-weight-light text-muted">
												Focus
											</label>
										</div>
									</div>
									{/*summary*/}
									<div className="row mb-3 pt-4">
										<div className="col-12 col-md-1 pr-0">
											<i className="fas fa-file-invoice text-warning icon" />
										</div>
										<div className="col-12 col-md-11 pl-0">
											<label className="font-italic font-weight-light text-dark title">
												&nbsp;S&nbsp;u&nbsp;m&nbsp;m&nbsp;a&nbsp;r&nbsp;y
											</label>
										</div>
									</div>
									<div className="row">
										<div className="col-12">
											<p className="p text-justify text-muted">
												Mision-driven full stack
												developer with a passion for
												thoughtful UI design,
												collaboration, and teaching.
											</p>
											<p className="p text-justify text-muted">
												I have always sought out
												opportunities and challenges
												that are meaningful to me.
												Although my professional path
												has taken many twists and
												turns-from touring and recording
												artist, to employee of the years
												at a non-profit, to dean is
												scholar at UPenn, to small
												business owner and entrepeneur -
												I have never stopped engaging my
												passion to help others and solve
												problems.
											</p>
											<p className="p text-justify text-muted">
												As a web developer, I enjoy
												using my obsessive attention to
												detail, my unequivocal love for
												making things, and my
												mission-driven work ethic to
												literally change the world. That
												is why I am excited to make a
												big impact at a high growth
												company
											</p>
										</div>
									</div>
									<hr className="border-bottom" />
									{/*language*/}
									<div className="row">
										<div className="col-12">
											<div className="row mb-3 py-4">
												<div className="col-md-1 pr-0">
													<i className="fas fa-language text-warning icon" />
												</div>
												<div className="col-md-11 pl-0">
													<label className="font-italic font-weight-light text-dark title">
														&nbsp;L&nbsp;a&nbsp;n&nbsp;g&nbsp;u&nbsp;a&nbsp;g&nbsp;e&nbsp;s
													</label>
												</div>
											</div>
											<div className="row">
												<div className="col-12 col-md-4">
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
												<div className="col-12 col-md-4">
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
												<div className="col-12 col-md-4">
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
									</div>
									<hr className="border-bottom" />
									{/*interests*/}
									<div className="row">
										<div className="col-12">
											<div className="row mb-3 py-4">
												<div className="col-md-1 pr-0">
													<i className="fas fa-bicycle text-warning icon" />
												</div>
												<div className="col-md-11 pl-0">
													<label className="font-italic font-weight-light text-dark title">
														&nbsp;I&nbsp;n&nbsp;t&nbsp;e&nbsp;r&nbsp;e&nbsp;s&nbsp;t&nbsp;s
													</label>
												</div>
											</div>
											<div className="row text-center">
												<div className="col-12 col-md-4 p text-muted">
													<h4>Climbing</h4>
												</div>
												<div className="col-12 col-md-4 p text-muted">
													<h4>Snowboarding</h4>
												</div>
												<div className="col-12 col-md-4 p text-muted">
													<h4>Cooking</h4>
												</div>
											</div>
										</div>
									</div>
									<hr className="border-bottom" />
									{/*experiences*/}
									<div className="row">
										<div className="col-12">
											<div className="row mb-3">
												<div className="col-md-1 pr-0">
													<i className="fas fa-chart-line text-warning icon" />
												</div>
												<div className="col-md-11 pl-0">
													<label className="font-italic font-weight-light text-dark title">
														&nbsp;E&nbsp;x&nbsp;p&nbsp;e&nbsp;r&nbsp;i&nbsp;e&nbsp;n&nbsp;c&nbsp;e&nbsp;s
													</label>
												</div>
											</div>

											<div className="row">
												<div className="col-12 col-sm-9 float-left pt-4">
													<h2 className="pt-2 font-weight-bold">
														LEAD DEVELOPER
													</h2>
													<h2 className="text-muted">
														2015-Present
													</h2>
													<h2 className="text-muted font-weight-light">
														Startup Hubs, San
														Francisco
													</h2>
												</div>
												<div className="col-12 col-sm-3 left-border">
													<img
														src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5024/s300/4g-logo-negro-01.png"
														className="img-fluid w-100"
														alt="..."
													/>
												</div>
											</div>
											<div className="row">
												<div className="col-12">
													<p className="p text-justify text-muted pt-4">
														Describe your role here
														lorem ipsum dolor sit
														amet, consetetuer
														adipiscing elit. Aenean
														commodo ligula eget
														dolor. Aenean massa. Cum
														soccis natoque penatibus
														el magnis dis paturrient
														montes, nascetur
														ridiculus mus. Donec
														quam felis, ultricies
														nec, pellentesque eu,
														pretium quis sem. Nulla
														consequat massa quis
														enim. Donec pede justo.
														Sed ut perspiciatis unde
														omnis iste natus error
														sit voluptamen
														accusantium doloremque
														laudantium, totam rem
														aperiam, eaque ipsa quae
														ab illo inventore
														veritatis et quasi
														architecto beatae vitae
														dicta sunt explicabo.
													</p>
												</div>
											</div>
											<div className="row">
												<div className="col">
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
