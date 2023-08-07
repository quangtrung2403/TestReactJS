import React from 'react'
import { useSelector } from 'react-redux'
import './map.scss';
import DeleteQuankhu from './DeleteQuankhu';
import UpdateQuankhu from './UpdateQuankhu';

export default function RenderTable() {

	const { data } = useSelector((state) => state.user);
	return (
		<table className="table">
			<thead>
				<tr>
					<th className='text-start w-25 pb-3'>Tên</th>
					<th className='text-start w-25 pb-3'>Mã</th>
					<th className='text-start w-25 pb-3'>Miêu Tả</th>
					<th className='text-start w-25 pb-3'>Hành Động</th>
				</tr>
			</thead>
			<tbody>
				{data && data.map((item) => (
					<tr key={item.id} id={item.id}>
						<td className='text-start'>{item.name}</td>
						<td className='text-start'>{item.code}</td>
						<td className='text-start'>{item.description}</td>
						<td>
							<UpdateQuankhu item={item} />
							<DeleteQuankhu item={item} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
