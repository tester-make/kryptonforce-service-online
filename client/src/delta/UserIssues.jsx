import React, { Component, Fragment } from 'react';
import axios from 'axios';

export default class UserIssues extends Component {
	constructor() {
		super();
		this.handleInitialUsers = this.handleInitialUsers.bind(this);
		this.state = {
			users: []
		};
	}

	componentDidMount() {
		this.handleInitialUsers();
	}

	handleIssueAccept(issue_id) {
		let employee_id = localStorage.getItem('_id');
		if (employee_id) {
			employee_id = JSON.parse(employee_id);
			axios
				.put('/issue/accept/' + issue_id, { assignedEmployeeId: employee_id })
				.then((res) => {
					localStorage.setItem('assignedTaskId', JSON.stringify(issue_id));
					window.location.assign('/employee-task');
				})
				.catch((err) => console.log(err));
		} else {
			alert('please login as employee');
			window.location.assign('/');
		}
	}

	handleInitialUsers() {
		axios.get('/issue').then((res) => this.setState({ users: res.data })).catch((err) => console.log(err));
	}
	render() {
		return (
			<Fragment>
				<table className='table table-striped table-inverse text-center'>
					<thead className='thead-inverse'>
						<tr>
							<th>#</th>
							<th>User Name</th>
							<th>Description</th>
							<th>Email</th>
							<th>Address</th>
							<th>Country</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						{this.state.users.map((data) => {
							return (
								<tr key={data._id}>
									<td>{data._id.substring(0, 5)}</td>
									<td>{`${data.firstName} ${data.lastName}`}</td>
									<td>{data.description}</td>
									<td>{data.email}</td>
									<td>{data.address}</td>
									<td>{data.country}</td>
									<td>
										{data.assignedEmployeeId ? (
											<span className='text-success'>Accepted</span>
										) : (
											<button className='btn btn-outline-primary' onClick={() => this.handleIssueAccept(data._id)}>
												Accept
											</button>
										)}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</Fragment>
		);
	}
}
