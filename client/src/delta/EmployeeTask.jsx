import React, { Component } from 'react';

export default class EmployeeTask extends Component {
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<img src='./public.jpg' className='img-thumbnail rounded-top' alt='user thumbnail' />
					</div>
					<div className='col-md-8'>
						<div className='col-md-8 text-center'>
							<h4>User Details</h4>
						</div>
						<div className='row'>
							<div className='col-md-4'>Name:</div>
							<div className='col-md-4'>Name</div>
						</div>
						<div className='row'>
							<div className='col-md-4'>Address:</div>
							<div className='col-md-4'>Address</div>
						</div>
						<div className='row'>
							<div className='col-md-4'>Address:</div>
							<div className='col-md-4'>Address</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
