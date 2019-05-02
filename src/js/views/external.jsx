import React from "react";

export class External extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="parallax">
					<div id="list-example" className="list-group">
						<a
							className="list-group-item list-group-item-action"
							href="#list-item-1">
							Summary
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#list-item-2">
							Item 2
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#list-item-3">
							Item 3
						</a>
						<a
							className="list-group-item list-group-item-action"
							href="#list-item-4">
							Item 4
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
				<div className="container">
					<div className="row text-center">
						<div
							data-spy="scroll"
							data-target="#list-example"
							data-offset="0"
							className="scrollspy-example">
							<div id="list-item-1">Summary</div>
							<p>...</p>
							<h4 id="list-item-2">Item 2</h4>
							<p>...</p>
							<h4 id="list-item-3">Item 3</h4>
							<p>...</p>
							<h4 id="list-item-4">Item 4</h4>
							<p>...</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
