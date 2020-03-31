import React, { Component } from 'react';
import Logo from '../res/icon.png';
import axios from 'axios';
export default class UserRegister extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			username: '',
			password: ''
		};
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		axios
			.post('/login', {
				username: this.state.username,
				password: this.state.password
			})
			.then((res) => {
				//
				// SHOULD USE SWITCH RATHER THAN IF STATEMENT
				//
				console.log(res.data);
				let role = '';
				let status = '';
				let _id = '';
				if (res.data.role === 'User') {
					role += JSON.stringify(res.data.role);
					status += JSON.stringify(res.data.status);
					_id += JSON.stringify(res.data._id);
					localStorage.setItem('role', role);
					localStorage.setItem('status', status);
					localStorage.setItem('_id', _id);
					alert('Welcome User: ' + res.data.username);
					window.location.assign('/');
				} else if (res.data.role === 'Employee' && res.data.status === 'Active') {
					role += JSON.stringify(res.data.role);
					status += JSON.stringify(res.data.status);
					_id += JSON.stringify(res.data._id);
					localStorage.setItem('role', role);
					localStorage.setItem('status', status);
					localStorage.setItem('_id', _id);
					alert('Welcome Employee: ' + res.data.username);
					window.location.assign('/');
				} else if (res.data.role === 'Employee' && res.data.status !== 'Active') {
					alert('Please wait until confirmation from admin!');
					window.location.assign('/login');
				} else {
					alert('Invalid credentials');
					window.location.assign('/login');
				}
			});
	}
	render() {
		return (
			<div className='d-flex align-content-center'>
				<div className='container pagination-centered'>
					<div className='row  justify-content-center '>
						<div className='col col-md-6'>
							<div className='card'>
								<div className='row justify-content-center'>
									<div className='col-md-2 '>
										<img src={Logo} className='card-img-top' alt='...' />
									</div>
								</div>
								<div className='card-body'>
									<form onSubmit={this.handleSubmit}>
										<div className='form-group'>
											<label htmlFor='username'>Username</label>
											<input
												onChange={this.handleChange}
												type='text'
												name='username'
												id='username'
												className='form-control'
												required
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='password'>Password</label>
											<input
												onChange={this.handleChange}
												type='password'
												name='password'
												id='password'
												className='form-control'
												required
											/>
										</div>
										<button type='submit' className='btn btn-primary btn-block'>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
