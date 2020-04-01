import React, { Component } from 'react';
import Appointment from '../components/Appointment';
export default class Index extends Component {
	constructor() {
		super();
		this.handleModalStatus = this.handleModalStatus.bind(this);
		this.state = {
			modalStatus: false,
			_id: ''
		};
	}

	handleModalStatus() {
		this.setState(() => ({ modalStatus: !this.state.modalStatus }));
	}
	render() {
		return (
			<div className='jumbotron animated bounce infinite'>
				<h1 className='display-3'>We are here to assist you</h1>
				<p className='lead'>This site created by Evan Henderson</p>
				<hr className='my-2' />
				<button
					disabled={!localStorage.getItem('_id')}
					onClick={this.handleModalStatus}
					className='btn btn-outline-primary'
				>
					Make an appointment
				</button>
				<Appointment modalStatus={this.state.modalStatus} handleModalStatus={this.handleModalStatus} />
			</div>
		);
	}
}
