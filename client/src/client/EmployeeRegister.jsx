import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class UserRegister extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
			firstName: '',
			lastName: '',
			description: '',
			email: '',
			age: 0,
			address: '',
			country: '',
			phoneNumber: 0,
			role: 'Employee',
			status: 'Inactive',
			image: null
		};
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}
	handleFileChange(e) {
		this.setState({ image: e.target.files[0] });
	}
	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append('username', this.state.username);
		formData.append('password', this.state.password);
		formData.append('firstName', this.state.firstName);
		formData.append('lastName', this.state.lastName);
		formData.append('description', this.state.description);
		formData.append('email', this.state.email);
		formData.append('age', this.state.age);
		formData.append('address', this.state.address);
		formData.append('country', this.state.country);
		formData.append('phoneNumber', this.state.phoneNumber);
		formData.append('role', this.state.role);
		formData.append('status', this.state.status);
		formData.append('image', this.state.image);
		const config = { headers: { 'content-type': 'multipart/form-data' } };
		if (this.state.password === this.state.confirmPassword) {
			axios.post('/register-employee', formData, config).then(() => {
				alert('You must wait until accepted! please check your email');
				window.location.assign('/login');
			});
		} else {
			console.log('Password must be same!');
		}
	}
	render() {
		return (
			<div className='d-flex align-content-center'>
				<button onClick={() => console.log(this.state)}>Get</button>
				<div className='container'>
					<div className='row justify-content-center '>
						<div className='col col-md-12'>
							<div className='card'>
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
										<hr />
										<div className='form-group'>
											<label htmlFor='firstName'>First Name</label>
											<input
												onChange={this.handleChange}
												value={this.state.firstName}
												type='text'
												name='firstName'
												id='firstName'
												className='form-control'
												required
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='lastName'>Last Name</label>
											<input
												onChange={this.handleChange}
												value={this.state.lastName}
												type='text'
												name='lastName'
												id='lastName'
												className='form-control'
												required
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='description'>Description</label>
											<textarea
												onChange={this.handleChange}
												value={this.state.description}
												name='description'
												id='description'
												className='form-control'
												required
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='email'>Email</label>
											<input
												onChange={this.handleChange}
												value={this.state.email}
												type='email'
												name='email'
												id='email'
												className='form-control'
												required
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='age'>Age</label>
											<input
												onChange={this.handleChange}
												value={this.state.age}
												type='number'
												name='age'
												id='age'
												className='form-control'
												required
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='address'>Address</label>
											<input
												onChange={this.handleChange}
												value={this.state.address}
												type='text'
												name='address'
												id='address'
												className='form-control'
												required
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='country'>Country</label>
											<input
												onChange={this.handleChange}
												value={this.state.country}
												type='text'
												name='country'
												id='country'
												className='form-control'
												required
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='phoneNumber'>Phone Number</label>
											<input
												onChange={this.handleChange}
												value={this.state.phoneNumber}
												type='number'
												name='phoneNumber'
												id='phoneNumber'
												className='form-control'
												required
											/>
										</div>
										<div className='form-group'>
											<label htmlFor='image'>Please include your profile picture</label>
											<input
												onChange={this.handleFileChange}
												type='file'
												className='form-control-file'
												name='image'
												id='image'
												placeholder='Choose File'
											/>
										</div>
										<button type='submit' className='btn btn-primary btn-block'>
											Submit
										</button>
									</form>
								</div>
							</div>
							<div className='col text-center'>
								<Link className='text-decoration-none' to='register'>
									Register as User
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
