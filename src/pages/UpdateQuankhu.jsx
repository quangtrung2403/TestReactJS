import React, { useState } from 'react'
import './map.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MapControl from './MapControl';

export default function UpdateQuankhu({ item }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<React.Fragment>
			<i className="fa-solid fa-pencil me-4 text-success" onClick={handleShow}></i>
			<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
				<Modal.Header closeButton className='bg-success'>
					<Modal.Title className='text-light ms-4'>Cập Nhật </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form className="createForm">
						<div className="form-user">
							<input
								type="text"
								name="name" defaultValue={item.name}
								id="name"
								required
							/>
							<label className="labelCreate" htmlFor="name">
								Tên
							</label>
							<span className="error"></span>
						</div>
						<div className="form-user">
							<input type="text" defaultValue={item.code}
								name="code" id="code" required />
							<label className="labelCreate" htmlFor="code">
								Mã
							</label>
							<span className="error"></span>
						</div>
						<div className="form-user mb-3">
							<input type="text" defaultValue={item.description}
								name="description" id="description" required />
							<label className="labelCreate" htmlFor="description">
								Miêu Tả
							</label>
							<span className="error"></span>
						</div>
						<div className="form-user mt-1" id="form-user-special">
							<p className='mt-0 position-absolute' style={{
								top: "155px",
							}}>Vẽ</p>
							<MapControl />
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button className="bg-light text-dark" onClick={handleClose}>
						Hủy
					</Button>
					<Button className="bg-success text-light"> + Cạp Nhật</Button>
				</Modal.Footer>
			</Modal>
		</React.Fragment>
	)
}
