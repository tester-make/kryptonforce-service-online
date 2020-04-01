import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

const EmployeeAcceptance = () => {
	const [ employee, setEmployee ] = useState([]);

	useEffect(() => {
		axios
			.get('/employee')
			.then((res) => {
				setEmployee(res.data);
			})
			.catch((error) => console.log(error));
	});

	const handleEmployeeAccept = (_id) => {
		axios
			.put('/employee/' + _id, { status: 'Active' })
			.then((res) => {
				window.location.assign('/employee-acceptance');
				console.log(res);
			})
			.catch((error) => console.log(error));
	};

	const handleEmployeeReject = (_id) => {
		axios.delete('/user/' + _id).then((res) => {
			window.location.assign('/employee-acceptance');
			console.log(res);
		});
	};

	return (
		<Fragment>
			<div className='card-body'>
				<div className='table-responsive'>
					<table className='table table-bordered' id='dataTable' width='100%' cellSpacing={0}>
						<tbody>
							<div className='card mb-3'>
								<div className='card-header'>
									<i className='fa fa-table' /> Employee awaiting for our confirmation
								</div>
								<div className='card-body'>
									<div className='table-responsive'>
										<table className='table table-bordered' id='dataTable' width='100%' cellSpacing={0}>
											<thead>
												<tr className='text-center'>
													<th>Name</th>
													<th>Email</th>
													<th>Age</th>
													<th>Image</th>
													<th>Phone Number</th>
													<th>Address</th>
													<th>Country</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												{employee.map((data) => {
													return (
														<tr key={data._id}>
															<td>{`${data.firstName} ${data.lastName}`}</td>
															<td>{data.email}</td>
															<td>{data.age}</td>
															<td className='text-center'>
																<img
																	style={{ width: '100px', height: '100px' }}
																	src={`${process.env.PUBLIC_URL}/uploads/users/${data.image}`}
																	alt={data._id + "'s image"}
																/>
															</td>
															<td>{data.phoneNumber}</td>
															<td>{data.address}</td>
															<td>{data.country}</td>
															<td>
																<div class='col d-flex justify-content-around'>
																	{data.status !== 'Active' && (
																		<Fragment>
																			<button
																				onClick={() => {
																					handleEmployeeAccept(data._id);
																				}}
																				className='btn btn-outline-success'
																			>
																				Accept
																			</button>
																			<button
																				onClick={() => {
																					handleEmployeeReject(data._id);
																				}}
																				className='btn btn-outline-danger'
																			>
																				Reject
																			</button>
																		</Fragment>
																	)}
																	{data.status === 'Active' && <span className='text-success'>Active</span>}
																</div>
															</td>
														</tr>
													);
												})}
											</tbody>
										</table>
									</div>
								</div>
								<div className='card-footer small text-muted'>Updated yesterday at 11:59 PM</div>
							</div>
						</tbody>
					</table>
				</div>
			</div>
		</Fragment>
	);
};

export default EmployeeAcceptance;
