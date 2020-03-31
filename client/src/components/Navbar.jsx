import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../res/eagle.png';
const Navbar = () => {
	const isLogged = () => {
		let role = localStorage.getItem('role');
		let status = localStorage.getItem('status');
		role = JSON.parse(role);
		if (role && status) {
			if (role === 'Admin') {
				return (
					<Fragment>
						<li className='nav-item'>
							<Link to='/dashboard' className='nav-link text-danger'>
								Dashboard
							</Link>
						</li>
						<li>
							<Link
								onClick={() => {
									window.location.assign('/login');
									localStorage.clear();
								}}
								to='/login'
								className='nav-link'
							>
								Logout
							</Link>
						</li>
					</Fragment>
				);
			} else if (role === 'User') {
				return (
					<li className='nav-item'>
						<Link
							onClick={() => {
								window.location.assign('/login');
								localStorage.clear();
							}}
							to='/login'
							className='nav-link'
						>
							Logout
						</Link>
					</li>
				);
			}
		} else {
			return (
				<Fragment>
					<li className='nav-item'>
						<Link to='/login' className='nav-link'>
							Login
						</Link>
					</li>

					<li>
						<Link to='/register' className='nav-link'>
							Register
						</Link>
					</li>
				</Fragment>
			);
		}
	};
	return (
		<nav className='navbar navbar-expand-sm navbar-light bg-light'>
			<Link to='/' className='navbar-brand'>
				<div className='d-flex'>
					<img style={{ height: '30px', width: 'auto' }} src={Logo} alt='corp logo' />
					<h5>
						Krypto<span className='text-danger'>Force</span>
					</h5>
				</div>
			</Link>
			<button
				className='navbar-toggler d-lg-none'
				type='button'
				data-toggle='collapse'
				data-target='#collapsibleNavId'
				aria-controls='collapsibleNavId'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon' />
			</button>
			<div className='collapse navbar-collapse' id='collapsibleNavId'>
				<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>{isLogged()}</ul>
				<form className='form-inline my-2 my-lg-0'>
					<input className='form-control mr-sm-2' type='text' placeholder='Search' />
					<button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
