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
						<div className="row parallaxSample">
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
						<div className="row">
							<div className="col-12 text-center">
								the name of the developer
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
