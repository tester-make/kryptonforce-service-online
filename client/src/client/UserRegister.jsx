import React, { Component } from 'react';
import Logo from '../res/icon.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class UserRegister extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			email: '',
			username: '',
			password: '',
			confirmPassword: ''
		};
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		if (this.state.password === this.state.confirmPassword) {
			axios
				.post('http://localhost:2020/register', {
					email: this.state.email,
					username: this.state.username,
					password: this.state.password,
					role: 'User',
					status: 'User'
				})
				.then(window.location.assign('/login'));
		} else {
			console.log('Password must be same!');
		}
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
											<label htmlFor='email'>Email</label>
											<input onChange={this.handleChange} type='text' name='email' id='email' className='form-control' required />
										</div>
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
										<div className='form-group'>
											<label htmlFor='confirmPassword'>Confirm Password</label>
											<input
												onChange={this.handleChange}
												type='password'
												name='confirmPassword'
												id='confirmPassword'
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
							<div className='col text-center '>
								<Link className='text-danger text-decoration-none' to='/register-employee'>
									Register as Employee
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
