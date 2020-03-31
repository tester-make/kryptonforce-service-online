import React, { Component, Fragment } from 'react';
import axios from 'axios';
export default class Dashboard extends Component {
	constructor() {
		super();
		this.handleUserData = this.handleUserData.bind(this);
		this.state = {
			users: []
		};
	}
	componentDidMount() {
		this.handleUserData();
	}
	handleUserData() {
		axios
			.get('/user')
			.then((response) => {
				this.setState({ users: response.data });
				console.log(this.state);
			})
			.catch((error) => console.log(error));
	}
	render() {
		return (
			<Fragment>
				<div>
					<div className='content-wrapper'>
						<div className='container-fluid'>
							{/* Icon Cards*/}
							<div className='row'>
								<div className='col-xl-3 col-sm-6 mb-3'>
									<div className='card text-white bg-primary o-hidden h-100'>
										<div className='card-body'>
											<div className='card-body-icon'>
												<i className='fa fa-fw fa-comments' />
											</div>
											<div className='mr-5'>26 New Messages!</div>
										</div>
										<a className='card-footer text-white clearfix small z-1' href='/dashboard'>
											<span className='float-left'>View Details</span>
											<span className='float-right'>
												<i className='fa fa-angle-right' />
											</span>
										</a>
									</div>
								</div>
								<div className='col-xl-3 col-sm-6 mb-3'>
									<div className='card text-white bg-warning o-hidden h-100'>
										<div className='card-body'>
											<div className='card-body-icon'>
												<i className='fa fa-fw fa-list' />
											</div>
											<div className='mr-5'>11 New Tasks!</div>
										</div>
										<a className='card-footer text-white clearfix small z-1' href='/dashboard'>
											<span className='float-left'>View Details</span>
											<span className='float-right'>
												<i className='fa fa-angle-right' />
											</span>
										</a>
									</div>
								</div>
								<div className='col-xl-3 col-sm-6 mb-3'>
									<div className='card text-white bg-success o-hidden h-100'>
										<div className='card-body'>
											<div className='card-body-icon'>
												<i className='fa fa-fw fa-shopping-cart' />
											</div>
											<div className='mr-5'>123 New Orders!</div>
										</div>
										<a className='card-footer text-white clearfix small z-1' href='/dashboard'>
											<span className='float-left'>View Details</span>
											<span className='float-right'>
												<i className='fa fa-angle-right' />
											</span>
										</a>
									</div>
								</div>
								<div className='col-xl-3 col-sm-6 mb-3'>
									<div className='card text-white bg-danger o-hidden h-100'>
										<div className='card-body'>
											<div className='card-body-icon'>
												<i className='fa fa-fw fa-support' />
											</div>
											<div className='mr-5'>13 New Tickets!</div>
										</div>
										<a className='card-footer text-white clearfix small z-1' href='/dashboard'>
											<span className='float-left'>View Details</span>
											<span className='float-right'>
												<i className='fa fa-angle-right' />
											</span>
										</a>
									</div>
								</div>
							</div>
							{/* Area Chart Example*/}
							<div className='card mb-3'>
								<div className='card-header'>
									<i className='fa fa-area-chart' /> Area Chart Example
								</div>
								<div className='card-body'>
									<canvas id='myAreaChart' width='100%' height={30} />
								</div>
								<div className='card-footer small text-muted'>Updated yesterday at 11:59 PM</div>
							</div>
							<div className='row'>
								<div className='col-lg-8'>
									{/* Example Bar Chart Card*/}
									<div className='card mb-3'>
										<div className='card-header'>
											<i className='fa fa-bar-chart' /> Bar Chart Example
										</div>
										<div className='card-body'>
											<div className='row'>
												<div className='col-sm-8 my-auto'>
													<canvas id='myBarChart' width={100} height={50} />
												</div>
												<div className='col-sm-4 text-center my-auto'>
													<div className='h4 mb-0 text-primary'>$34,693</div>
													<div className='small text-muted'>YTD Revenue</div>
													<hr />
													<div className='h4 mb-0 text-warning'>$18,474</div>
													<div className='small text-muted'>YTD Expenses</div>
													<hr />
													<div className='h4 mb-0 text-success'>$16,219</div>
													<div className='small text-muted'>YTD Margin</div>
												</div>
											</div>
										</div>
										<div className='card-footer small text-muted'>Updated yesterday at 11:59 PM</div>
									</div>
									{/* Card Columns Example Social Feed*/}
									<div className='mb-0 mt-4'>
										<i className='fa fa-newspaper-o' /> News Feed
									</div>
									<hr className='mt-2' />
									<div className='card-columns'>
										{/* Example Social Card*/}
										<div className='card mb-3'>
											<a href='/dashboard'>
												<img className='card-img-top img-fluid w-100' src='https://unsplash.it/700/450?image=610' alt='hehe' />
											</a>
											<div className='card-body'>
												<h6 className='card-title mb-1'>
													<a href='/dashboard'>David Miller</a>
												</h6>
												<p className='card-text small'>
													These waves are looking pretty good today!
													<a href='/dashboard'>#surfsup</a>
												</p>
											</div>
											<hr className='my-0' />
											<div className='card-body py-2 small'>
												<a className='mr-3 d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-thumbs-up' />
													Like
												</a>
												<a className='mr-3 d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-comment' />
													Comment
												</a>
												<a className='d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-share' />
													Share
												</a>
											</div>
											<hr className='my-0' />
											<div className='card-body small bg-faded'>
												<div className='media'>
													<img className='d-flex mr-3' src='http://placehold.it/45x45' alt='hehe' />
													<div className='media-body'>
														<h6 className='mt-0 mb-1'>
															<a href='/dashboard'>John Smith</a>
														</h6>
														Very nice! I wish I was there! That looks amazing!
														<ul className='list-inline mb-0'>
															<li className='list-inline-item'>
																<a href='/dashboard'>Like</a>
															</li>
															<li className='list-inline-item'>·</li>
															<li className='list-inline-item'>
																<a href='/dashboard'>Reply</a>
															</li>
														</ul>
														<div className='media mt-3'>
															<a className='d-flex pr-3' href='/dashboard'>
																<img src='http://placehold.it/45x45' alt='hehe' />
															</a>
															<div className='media-body'>
																<h6 className='mt-0 mb-1'>
																	<a href='/dashboard'>David Miller</a>
																</h6>
																Next time for sure!
																<ul className='list-inline mb-0'>
																	<li className='list-inline-item'>
																		<a href='/dashboard'>Like</a>
																	</li>
																	<li className='list-inline-item'>·</li>
																	<li className='list-inline-item'>
																		<a href='/dashboard'>Reply</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className='card-footer small text-muted'>Posted 32 mins ago</div>
										</div>
										{/* Example Social Card*/}
										<div className='card mb-3'>
											<a href='/dashboard'>
												<img className='card-img-top img-fluid w-100' src='https://unsplash.it/700/450?image=180' alt='hehe' />
											</a>
											<div className='card-body'>
												<h6 className='card-title mb-1'>
													<a href='/dashboard'>John Smith</a>
												</h6>
												<p className='card-text small'>
													Another day at the office...
													<a href='/dashboard'>#workinghardorhardlyworking</a>
												</p>
											</div>
											<hr className='my-0' />
											<div className='card-body py-2 small'>
												<a className='mr-3 d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-thumbs-up' />
													Like
												</a>
												<a className='mr-3 d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-comment' />
													Comment
												</a>
												<a className='d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-share' />
													Share
												</a>
											</div>
											<hr className='my-0' />
											<div className='card-body small bg-faded'>
												<div className='media'>
													<img className='d-flex mr-3' src='http://placehold.it/45x45' alt='hehe' />
													<div className='media-body'>
														<h6 className='mt-0 mb-1'>
															<a href='/dashboard'>Jessy Lucas</a>
														</h6>
														Where did you get that camera?! I want one!
														<ul className='list-inline mb-0'>
															<li className='list-inline-item'>
																<a href='/dashboard'>Like</a>
															</li>
															<li className='list-inline-item'>·</li>
															<li className='list-inline-item'>
																<a href='/dashboard'>Reply</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className='card-footer small text-muted'>Posted 46 mins ago</div>
										</div>
										{/* Example Social Card*/}
										<div className='card mb-3'>
											<a href='/dashboard'>
												<img className='card-img-top img-fluid w-100' src='https://unsplash.it/700/450?image=281' alt='hehe' />
											</a>
											<div className='card-body'>
												<h6 className='card-title mb-1'>
													<a href='/dashboard'>Jeffery Wellings</a>
												</h6>
												<p className='card-text small'>
													Nice shot from the skate park!
													<a href='/dashboard'>#kickflip</a>
													<a href='/dashboard'>#holdmybeer</a>
													<a href='/dashboard'>#igotthis</a>
												</p>
											</div>
											<hr className='my-0' />
											<div className='card-body py-2 small'>
												<a className='mr-3 d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-thumbs-up' />
													Like
												</a>
												<a className='mr-3 d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-comment' />
													Comment
												</a>
												<a className='d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-share' />
													Share
												</a>
											</div>
											<div className='card-footer small text-muted'>Posted 1 hr ago</div>
										</div>
										{/* Example Social Card*/}
										<div className='card mb-3'>
											<a href='/dashboard'>
												<img className='card-img-top img-fluid w-100' src='https://unsplash.it/700/450?image=185' alt='hehe' />
											</a>
											<div className='card-body'>
												<h6 className='card-title mb-1'>
													<a href='/dashboard'>David Miller</a>
												</h6>
												<p className='card-text small'>
													It's hot, and I might be lost...
													<a href='/dashboard'>#desert</a>
													<a href='/dashboard'>#water</a>
													<a href='/dashboard'>#anyonehavesomewater</a>
													<a href='/dashboard'>#noreally</a>
													<a href='/dashboard'>#thirsty</a>
													<a href='/dashboard'>#dehydration</a>
												</p>
											</div>
											<hr className='my-0' />
											<div className='card-body py-2 small'>
												<a className='mr-3 d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-thumbs-up' />
													Like
												</a>
												<a className='mr-3 d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-comment' />
													Comment
												</a>
												<a className='d-inline-block' href='/dashboard'>
													<i className='fa fa-fw fa-share' />
													Share
												</a>
											</div>
											<hr className='my-0' />
											<div className='card-body small bg-faded'>
												<div className='media'>
													<img className='d-flex mr-3' src='http://placehold.it/45x45' alt='hehe' />
													<div className='media-body'>
														<h6 className='mt-0 mb-1'>
															<a href='/dashboard'>John Smith</a>
														</h6>
														The oasis is a mile that way, or is that just a mirage?
														<ul className='list-inline mb-0'>
															<li className='list-inline-item'>
																<a href='/dashboard'>Like</a>
															</li>
															<li className='list-inline-item'>·</li>
															<li className='list-inline-item'>
																<a href='/dashboard'>Reply</a>
															</li>
														</ul>
														<div className='media mt-3'>
															<a className='d-flex pr-3' href='/dashboard'>
																<img src='http://placehold.it/45x45' alt='hehe' />
															</a>
															<div className='media-body'>
																<h6 className='mt-0 mb-1'>
																	<a href='/dashboard'>David Miller</a>
																</h6>
																<img className='img-fluid w-100 mb-1' src='https://unsplash.it/700/450?image=789' alt='hehe' />
																I'm saved, I found a cactus. How do I open this thing?
																<ul className='list-inline mb-0'>
																	<li className='list-inline-item'>
																		<a href='/dashboard'>Like</a>
																	</li>
																	<li className='list-inline-item'>·</li>
																	<li className='list-inline-item'>
																		<a href='/dashboard'>Reply</a>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className='card-footer small text-muted'>Posted yesterday</div>
										</div>
									</div>
									{/* /Card Columns*/}
								</div>
								<div className='col-lg-4'>
									{/* Example Pie Chart Card*/}
									<div className='card mb-3'>
										<div className='card-header'>
											<i className='fa fa-pie-chart' /> Pie Chart Example
										</div>
										<div className='card-body'>
											<canvas id='myPieChart' width='100%' height={100} />
										</div>
										<div className='card-footer small text-muted'>Updated yesterday at 11:59 PM</div>
									</div>
									{/* Example Notifications Card*/}
									<div className='card mb-3'>
										<div className='card-header'>
											<i className='fa fa-bell-o' /> Feed Example
										</div>
										<div className='list-group list-group-flush small'>
											<a className='list-group-item list-group-item-action' href='/dashboard'>
												<div className='media'>
													<img className='d-flex mr-3 rounded-circle' src='http://placehold.it/45x45' alt='hehe' />
													<div className='media-body'>
														<strong>David Miller</strong>posted a new article to
														<strong>David Miller Website</strong>.
														<div className='text-muted smaller'>Today at 5:43 PM - 5m ago</div>
													</div>
												</div>
											</a>
											<a className='list-group-item list-group-item-action' href='/dashboard'>
												<div className='media'>
													<img className='d-flex mr-3 rounded-circle' src='http://placehold.it/45x45' alt='hehe' />
													<div className='media-body'>
														<strong>Samantha King</strong>sent you a new message!
														<div className='text-muted smaller'>Today at 4:37 PM - 1hr ago</div>
													</div>
												</div>
											</a>
											<a className='list-group-item list-group-item-action' href='/dashboard'>
												<div className='media'>
													<img className='d-flex mr-3 rounded-circle' src='http://placehold.it/45x45' alt='hehe' />
													<div className='media-body'>
														<strong>Jeffery Wellings</strong>added a new photo to the album
														<strong>Beach</strong>.
														<div className='text-muted smaller'>Today at 4:31 PM - 1hr ago</div>
													</div>
												</div>
											</a>
											<a className='list-group-item list-group-item-action' href='/dashboard'>
												<div className='media'>
													<img className='d-flex mr-3 rounded-circle' src='http://placehold.it/45x45' alt='hehe' />
													<div className='media-body'>
														<i className='fa fa-code-fork' />
														<strong>Monica Dennis</strong>forked the
														<strong>startbootstrap-sb-admin</strong>repository on
														<strong>GitHub</strong>.
														<div className='text-muted smaller'>Today at 3:54 PM - 2hrs ago</div>
													</div>
												</div>
											</a>
											<a className='list-group-item list-group-item-action' href='/dashboard'>
												View all activity...
											</a>
										</div>
										<div className='card-footer small text-muted'>Updated yesterday at 11:59 PM</div>
									</div>
								</div>
							</div>
							{/* Example DataTables Card*/}
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
												{this.state.users.map((data) => {
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
						</div>
						{/* /.container-fluid*/}
						{/* /.content-wrapper*/}
						<footer className='sticky-footer'>
							<div className='container'>
								<div className='text-center'>
									<small>Copyright © Your Website 2018</small>
								</div>
							</div>
						</footer>
						{/* Scroll to Top Button*/}
						<a className='scroll-to-top rounded' href='#page-top'>
							<i className='fa fa-angle-up' />
						</a>
						{/* Logout Modal*/}
						<div
							className='modal fade'
							id='exampleModal'
							tabIndex={-1}
							role='dialog'
							aria-labelledby='exampleModalLabel'
							aria-hidden='true'
						>
							<div className='modal-dialog' role='document'>
								<div className='modal-content'>
									<div className='modal-header'>
										<h5 className='modal-title' id='exampleModalLabel'>
											Ready to Leave?
										</h5>
										<button className='close' type='button' data-dismiss='modal' aria-label='Close'>
											<span aria-hidden='true'>×</span>
										</button>
									</div>
									<div className='modal-body'>Select "Logout" below if you are ready to end your current session.</div>
									<div className='modal-footer'>
										<button className='btn btn-secondary' type='button' data-dismiss='modal'>
											Cancel
										</button>
										<a className='btn btn-primary' href='login.html'>
											Logout
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
