import React, { Fragment } from 'react';

const UserTable = (props) => {
	return (
		<Fragment>
			<div className='card-body'>
				<div className='table-responsive'>
					<table className='table table-bordered' id='dataTable' width='100%' cellSpacing={0}>
						<tbody>
							<div className='card mb-3'>
								<div className='card-header'>
									<i className='fa fa-table' /> User Data Table
								</div>
								<div className='card-body'>
									<div className='table-responsive'>
										<table className='table table-bordered' id='dataTable' width='100%' cellSpacing={0}>
											<thead>
												<tr>
													<th>Name</th>
													<th>Email</th>
													<th>Role</th>
													<th>Age</th>
													<th>Phone Number</th>
													<th>Status</th>
												</tr>
											</thead>
											<tbody>
												{props.users.map((data) => {
													return (
														<tr key={data._id}>
															<td>{data.username}</td>
															<td>{data.email}</td>
															<td>{data.role}</td>
															<td>{data.age ? <span>{data.age}</span> : <span className='text-danger'>Unknown</span>}</td>
															<td>
																{data.phoneNumber ? <span>{data.phoneNumber}</span> : <span className='text-danger'>Unknown</span>}
															</td>
															{data.status === 'Inactive' && (
																<td>
																	<span className='text-warning'>Inactive</span>
																</td>
															)}
															{data.status === 'Active' && (
																<td>
																	<span className='text-success'>Active</span>
																</td>
															)}
															{(data.status === 'User' || data.status === 'Admin') && (
																<td>
																	<span>{data.status}</span>
																</td>
															)}
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

export default UserTable;
