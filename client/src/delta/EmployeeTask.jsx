import React, { Component } from 'react';
import axios from 'axios';

export default class EmployeeTask extends Component {
	constructor() {
		super();
		this.state = {
			issue: [],
			user: [],
			damages: []
		};
	}
	componentDidMount() {
		this.isAssigned();
	}
	isAssigned() {
		let assignedTaskId = localStorage.getItem('assignedTaskId');
		if (assignedTaskId) {
			assignedTaskId = JSON.parse(assignedTaskId);
			axios
				.get('/issue/' + assignedTaskId)
				.then((res) => {
					this.setState({ issue: res.data });
					console.log(this.state.issue);
					axios
						.get('/user/' + res.data.userId)
						.then((userResponse) => {
							this.setState({ user: userResponse.data });
							console.log(this.state.user);
						})
						.catch((err) => console.log(err));
				})
				.catch((err) => console.log(err));
		} else {
			alert('Please choose task first!');
			window.location.assign('/user-issues');
		}
	}
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<img
							src={`${process.env.PUBLIC_URL}/uploads/users/${this.state.user.image}`}
							className='img-thumbnail rounded-top'
							alt='user thumbnail'
						/>
					</div>
					<div className='col-md-8'>
						<div className='col-md-8 text-center'>
							<h4>User Details</h4>
						</div>
						<div className='row'>
							<div className='col-md-4'>Name:</div>
							<div className='col-md-4'>{`${this.state.issue.firstName} ${this.state.issue.lastName}`}</div>
						</div>
						<div className='row'>
							<div className='col-md-4'>Email:</div>
							<div className='col-md-4'>{this.state.issue.email}</div>
						</div>

						{this.state.user.phoneNumber && (
							<div className='row'>
								<div className='col-md-4'>Phone:</div>
								<div className='col-md-4'>{this.state.user.phoneNumber}</div>
							</div>
						)}

						<div className='row'>
							<div className='col-md-4'>Address:</div>
							<div className='col-md-4'>{`${this.state.issue.address}, ${this.state.issue.country}`}</div>
						</div>
						<div className='row'>
							<div className='col-md-4'>Zip Code:</div>
							<div className='col-md-4'>{this.state.issue.zip}</div>
						</div>
						<div className='row'>
							<div className='col-md-4'>Description:</div>
							<div className='col-md-4'>{this.state.issue.description}</div>
						</div>
						<div className='row'>
							<div className='col-md-4'>Payment Method:</div>
							<div className='col-md-4'>{this.state.issue.paymentMethod}</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='d-flex justify-content-center text-center'>
						<h4>Add Sparepart for the Damages</h4>
					</div>
					<button className='btn btn-outline-danger btn-block'>Clear Spareparts</button>
					<table className='table table-striped table-inverse'>
						<thead className='thead-inverse'>
							<tr>
								<th>Sparepart</th>
								<th>Image</th>
								<th>Price</th>
								<th />
							</tr>
						</thead>
						<tbody>
							<tr>
								<td scope='row'>Aluminum</td>
								<td>
									<img
										style={{ width: '50px', height: '50px' }}
										src={`${process.env.PUBLIC_URL}/uploads/spareparts/question-mark.png`}
										alt='sparepart image'
									/>
								</td>
								<td>170</td>
								<td>
									<button className='btn btn-outline-primary'>Add</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
