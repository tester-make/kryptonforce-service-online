import React, { Component } from 'react';
import axios from 'axios';

export default class EmployeeTask extends Component {
	constructor() {
		super();
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.state = {
			issue: [],
			user: [],
			spareparts: [],
			quantity: 1,
			damageSparepart: [],
			total: 0
		};
	}

	handleSparepartState() {
		let sparepart = localStorage.getItem('spareparts');
		if (sparepart) {
			sparepart = JSON.parse(localStorage.getItem('spareparts'));
			let total = 0;
			sparepart.forEach((value) => {
				total += value.subTotal;
			});
			this.setState({ damageSparepart: sparepart, total });
		}
	}
	componentDidMount() {
		this.isAssigned();
		this.handlePreviousData();
	}
	handlePreviousData() {
		axios
			.get('/sparepart')
			.then((res) => {
				this.setState({ spareparts: res.data });
			})
			.catch((err) => console.log(err));
	}
	handleAddSparepart(sparepart) {
		let lastSpareparts = JSON.parse(localStorage.getItem('spareparts')) || [];
		let currentId = sparepart._id;
		let isMatch = lastSpareparts.find(({ _id }) => _id === currentId);
		if (isMatch) {
			isMatch['quantity'] += parseInt(this.state.quantity);
			isMatch['subTotal'] += sparepart.price * parseInt(this.state.quantity);
		} else {
			let newSparepart = {
				image: sparepart.image,
				_id: sparepart._id,
				title: sparepart.title,
				price: sparepart.price,
				description: sparepart.description,
				quantity: parseInt(this.state.quantity),
				subTotal: sparepart.price * parseInt(this.state.quantity)
			};
			lastSpareparts.push(newSparepart);
		}
		localStorage.setItem('spareparts', JSON.stringify(lastSpareparts));
	}
	handleFormSubmit(e) {
		e.preventDefault();
		let issueId = JSON.parse(localStorage.getItem('assignedTaskId'));
		console.log(this.state.total);
		axios
			.put('/issue/sparepart/' + issueId, {
				status: 'Resolved',
				damages: this.state.damageSparepart,
				total: this.state.total
			})
			.then((res) => {
				alert('Congratulation you have completed the task!');
				window.location.assign('/user-issues');
			})
			.catch((err) => console.log(err));
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
					<div className='col-md-2'>
						<br />
						<img
							src={`${process.env.PUBLIC_URL}/uploads/users/${this.state.user.image}`}
							className='img-thumbnail rounded-top'
							alt='user thumbnail'
						/>
					</div>
					<div className='col-md-4'>
						<div className='col-md-12 text-center'>
							<h5>Issue Details</h5>
						</div>
						<div className='row'>
							<div className='col-md-6'>Name:</div>
							<div className='col-md-6'>{`${this.state.issue.firstName} ${this.state.issue.lastName}`}</div>
						</div>
						<div className='row'>
							<div className='col-md-6'>Email:</div>
							<div className='col-md-6'>{this.state.issue.email}</div>
						</div>

						{this.state.user.phoneNumber && (
							<div className='row'>
								<div className='col-md-6'>Phone:</div>
								<div className='col-md-6'>{this.state.user.phoneNumber}</div>
							</div>
						)}

						<div className='row'>
							<div className='col-md-6'>Address:</div>
							<div className='col-md-6'>{`${this.state.issue.address}, ${this.state.issue.country}`}</div>
						</div>
						<div className='row'>
							<div className='col-md-6'>Zip Code:</div>
							<div className='col-md-6'>{this.state.issue.zip}</div>
						</div>
						<div className='row'>
							<div className='col-md-6'>Description:</div>
							<div className='col-md-6'>{this.state.issue.description}</div>
						</div>
						<div className='row'>
							<div className='col-md-6'>Payment Method:</div>
							<div className='col-md-6'>{this.state.issue.paymentMethod}</div>
						</div>
					</div>
					<div className='col-md-6'>
						<h5 className='text-center'>Added Spareparts</h5>
						<div className='row'>
							<div className='col-md-3'>Title</div>
							<div className='col-md-3'>Quantity</div>
							<div className='col-md-3'>Price</div>
							<div className='col-md-3'>Sub Total</div>
						</div>
						{this.state.damageSparepart.map((sparepart) => {
							return (
								<div className='row' key={sparepart._id}>
									<div className='col-md-3'>{sparepart.title}</div>
									<div className='col-md-3'>{sparepart.quantity}</div>
									<div className='col-md-3'>{sparepart.price}</div>
									<div className='col-md-3'>{sparepart.subTotal}</div>
								</div>
							);
						})}
						<hr className='bg-info' />
						<div className='row text-center'>
							<div className='col-md-6'>Total:</div>
							<div className='col-md-6'>{this.state.total}</div>
						</div>

						<form onSubmit={this.handleFormSubmit} className='d-inline'>
							<button className='btn btn-outline-primary btn-block'>Confirm Changes</button>
						</form>
					</div>
				</div>
				<div className='row'>
					<div className='col col-md-12 text-center'>
						<h4>Add Sparepart for the Damages</h4>
					</div>
					<button
						className='btn btn-outline-danger btn-block'
						onClick={() => {
							window.location.assign('/employee-task');
							localStorage.removeItem('spareparts');
						}}
					>
						Clear Selected Spareparts
					</button>
					<table className='table table-striped table-inverse'>
						<thead className='thead-inverse text-center'>
							<tr>
								<th>Sparepart</th>
								<th>Brand</th>
								<th>Description</th>
								<th>Image</th>
								<th>Price</th>
								<th>Available quantity</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{this.state.spareparts.map((sparepart) => {
								return (
									<tr key={sparepart._id}>
										<td>{sparepart.title}</td>
										<td>{sparepart.brand}</td>
										<td>{sparepart.description}</td>
										<td className='text-center'>
											<img
												style={{ width: '100px', height: '100px' }}
												src={`${process.env.PUBLIC_URL}/uploads/spareparts/${sparepart.image}`}
												alt='sparepart hehe'
											/>
										</td>
										<td className='text-center'>{sparepart.price}</td>
										<td className='text-center'>{sparepart.quantity}</td>
										<td>
											<button
												className='btn btn-outline-primary'
												onClick={() => {
													this.handleAddSparepart(sparepart);
													this.handleSparepartState();
												}}
											>
												Add
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
