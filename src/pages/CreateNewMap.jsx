import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './map.scss';
import MapControl from './MapControl';

export default function CreateNewMap({ show, handleClose }) {
	return (
		<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
			<Modal.Header closeButton className="bg-success text-light">
				<Modal.Title> Thêm mới</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<form className="createForm">
					<div className="form-user">
						<input
							type="text"
							name="name"
							id="name"
							required
						/>
						<label className="labelCreate" htmlFor="name">
							Tên
						</label>
						<span className="error"></span>
					</div>
					<div className="form-user">
						<input type="text" name="code" id="code" required />
						<label className="labelCreate" htmlFor="code">
							Mã
						</label>
						<span className="error"></span>
					</div>
					<div className="form-user mb-3">
						<input type="text" name="description" id="description" required />
						<label className="labelCreate" htmlFor="description">
							Miêu Tả
						</label>
						<span className="error"></span>
					</div>
					<div className="form-user mt-1" id="form-user-special">
						<p className='mt-0 position-absolute'>Vẽ</p>
						<MapControl />
					</div>
				</form>
			</Modal.Body>
			<Modal.Footer>
				<Button className="bg-light text-dark" onClick={handleClose}>
					Hủy
				</Button>
				<Button className="bg-success text-light"> + Thêm mới</Button>
			</Modal.Footer>
		</Modal>
	);
}
