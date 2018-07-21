import React, { Component } from "react";
import AppActions from '../Action/AppActions.js';

class UploadWindow extends React.Component {

	constructor(props) {
		super(props);
	}

	_closeUploadWindow = () => {
		AppActions.closeUploadWindow();
	}

	render() {
		if (!this.props.show) {
			return null;
		}
		// The gray background
		const backdropStyle = {
			position: 'fixed',
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			backgroundColor: 'rgba(0,0,0,0.3)',
			padding: 50
		};

		// The modal "window"
		const modalStyle = {
			backgroundColor: '#fff',
			borderRadius: 5,
			maxWidth: 500,
			minHeight: 300,
			margin: '0 auto',
			padding: 30
		};


		return (
			<div style = { backdropStyle } >
				<div style = { modalStyle } >
					<h1>Share Your Photos</h1>
					<form action="fileupload" method="post" enctype="multipart/form-data">
						<input type="file" name="filetoupload" /><br/>
						<input type="submit" />
					</form>					
					<div>
						<button onClick = { this._closeUploadWindow }>Close </button>
					</div >
				</div>
			</div >
			);
	}
}

export default UploadWindow;