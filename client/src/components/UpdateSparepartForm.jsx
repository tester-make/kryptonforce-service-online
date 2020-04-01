import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
export default class SparepartForm extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handlePreviousData = this.handlePreviousData.bind(this);
		this.state = {
			_id: '',
			title: '',
			brand: '',
			price: 0,
			description: '',
			quantity: 0,
			image: null
		};
	}

	componentDidMount() {
		this.handlePreviousData();
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleFileChange(e) {
		this.setState({ image: e.target.files[0] });
	}

	handlePreviousData() {
		axios.get('/sparepart/' + this.props._id).then((res) => {
			console.log(res.data[0]);
			this.setState({
				_id: res.data[0]._id,
				title: res.data[0].title,
				brand: res.data[0].brand,
				price: res.data[0].price,
				description: res.data[0].description,
				quantity: res.data[0].quantity
			});
			console.log(this.state);
		});
	}

	handleFormSubmit(e) {
		e.preventDefault();
		let formData = new FormData();
		formData.append('title', this.state.title);
		formData.append('price', this.state.price);
		formData.append('brand', this.state.brand);
		formData.append('description', this.state.description);
		formData.append('quantity', this.state.quantity);
		formData.append('image', this.state.image);
		const config = { headers: { 'content-type': 'multipart/form-data' } };

		axios
			.put('/sparepart/' + this.state._id, formData, config)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<Fragment>
				<Modal
					ariaHideApp={false}
					isOpen={this.props.updateModalStatus}
					onRequestClose={this.props.handleUpdateModalStatus}
				>
					<div className='container-fluid'>
						<form onSubmit={this.handleFormSubmit}>
							<div className='row d-block'>
								<div className='form-group'>
									<label htmlFor='title'>Title</label>
									<input
										value={this.state.title}
										onChange={this.handleChange}
										type='text'
										className='form-control'
										name='title'
										id='title'
										required
									/>
								</div>
							</div>
							<div className='row d-block'>
								<div className='form-group'>
									<label htmlFor='brand'>Brand</label>
									<input
										value={this.state.brand}
										onChange={this.handleChange}
										type='text'
										className='form-control'
										name='brand'
										id='brand'
										required
									/>
								</div>
							</div>
							<div className='row d-block'>
								<div className='form-group'>
									<label htmlFor='price'>Price</label>
									<input
										value={this.state.price}
										onChange={this.handleChange}
										type='number'
										className='form-control'
										name='price'
										id='price'
										required
									/>
								</div>
							</div>
							<div className='row d-block'>
								<div className='form-group'>
									<label htmlFor='description'>Description</label>
									<textarea
										value={this.state.description}
										onChange={this.handleChange}
										type='text'
										className='form-control'
										name='description'
										id='description'
										required
									/>
								</div>
							</div>
							<div className='row d-block'>
								<div className='form-group'>
									<label htmlFor='quantity'>Quantity</label>
									<input
										value={this.state.quantity}
										onChange={this.handleChange}
										type='number'
										className='form-control'
										name='quantity'
										id='quantity'
										required
									/>
								</div>
							</div>
							<div className='row d-block'>
								<div className='form-group'>
									<label htmlFor='image'>Image</label>
									<input onChange={this.handleFileChange} type='file' className='form-control-file' name='image' id='image' />
								</div>
							</div>
							<button type='submit' className='btn btn-success btn-block' required>
								Submit
							</button>
						</form>
					</div>
				</Modal>
			</Fragment>
		);
	}
}
