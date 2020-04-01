import React, { Component, Fragment } from 'react';
import AddSparepartForm from '../components/AddSparepartForm';
import UpdateSparepartForm from '../components/UpdateSparepartForm';
import axios from 'axios';
export default class Sparepart extends Component {
	constructor() {
		super();
		this.handleModalStatus = this.handleModalStatus.bind(this);
		this.handleSpareparts = this.handleSpareparts.bind(this);
		this.handleUpdateModalStatus = this.handleUpdateModalStatus.bind(this);
		this.state = {
			modalStatus: false,
			updateModalStatus: false,
			spareparts: [],
			updateDataId: ''
		};
	}

	componentDidMount() {
		this.handleSpareparts();
	}

	handleModalStatus() {
		this.setState({ modalStatus: !this.state.modalStatus });
	}

	handleUpdateModalStatus(_id) {
		this.setState({ updateModalStatus: !this.state.updateModalStatus, updateDataId: _id });
	}

	handleSpareparts() {
		axios
			.get('/sparepart')
			.then((res) => {
				this.setState({ spareparts: res.data });
			})
			.catch((err) => console.log(err));
	}

	handleDeleteSparepart(_id) {
		axios
			.delete('/sparepart/' + _id)
			.then((res) => {
				window.location.assign('/sparepart');
			})
			.catch((err) => console.error(err));
	}

	render() {
		return (
			<Fragment>
				<button className='btn btn-outline-info btn-block' onClick={this.handleModalStatus}>
					Add New Sparepart
				</button>
				<table className='table table-striped table-inverse'>
					<thead className='thead-inverse'>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Brand</th>
							<th>Price</th>
							<th>Description</th>
							<th>Quantity</th>
							<th>Image</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.spareparts.map((sparepart) => {
							return (
								<tr key={sparepart._id}>
									<td>{sparepart._id.substring(0, 7)}</td>
									<td>{sparepart.title}</td>
									<td>{sparepart.brand}</td>
									<td>{sparepart.price}</td>
									<td>{sparepart.description}</td>
									<td>{sparepart.quantity}</td>
									<td>
										<img
											style={{ width: '50px', height: '50px' }}
											src={`${process.env.PUBLIC_URL}/uploads/spareparts/${sparepart.image}`}
											alt={`${sparepart._id} preview`}
										/>
									</td>
									<td>
										<button className='btn btn-outline-primary' onClick={() => this.handleUpdateModalStatus(sparepart._id)}>
											Edit
										</button>
										<button className='btn btn-outline-danger' onClick={() => this.handleDeleteSparepart(sparepart._id)}>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<AddSparepartForm modalStatus={this.state.modalStatus} handleModalStatus={this.handleModalStatus} />
				<UpdateSparepartForm
					_id={this.state.updateDataId}
					updateModalStatus={this.state.updateModalStatus}
					handleUpdateModalStatus={this.handleUpdateModalStatus}
				/>
			</Fragment>
		);
	}
}
