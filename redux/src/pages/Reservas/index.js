import React from 'react';
import { MdDelete, MdAddCircle,  MdRemoveCircle } from 'react-icons/md';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve, updateAmountReserve} from '../../store/modules/reserve/action';


export default function Reservas() {

	const reserves = useSelector(state => state.reserve);
	const dispatch = useDispatch();

	function handleRemove(id){
		dispatch(removeReserve(id))
	}

	function decrementAmount(trip){
		dispatch(updateAmountReserve(trip.id, trip.amount - 1));
	}

	function incrementAmount(trip){
		dispatch(updateAmountReserve(trip.id, trip.amount + 1));
	}

	return (
		<div>
			<h1 className="title">Você solicitou {reserves.length} reserva</h1>

			{reserves.map(reserve => (

				<div key={reserve.id} className="reservas">
					<img src={reserve.image} alt={reserve.title} />
					<strong>{reserve.title}</strong>

					<div id="amount">
						<button type="button" onClick={()=> incrementAmount(reserve)}>
							<MdAddCircle size={20} color="#000" />
						</button>
				
							<span>Quantidade: {reserve.amount}</span>

						<button type="button" onClick={()=> decrementAmount(reserve)}>
							<MdRemoveCircle size={20} color="#000" />
						</button>
					</div>

					<button type="button" onClick={()=> handleRemove(reserve.id)}>
						<MdDelete size={20} color="#000" />
					</button>
				</div>
			))}

			<footer>
				<button type="button">Solicitar Reservas</button>
			</footer>

		</div>
	);
}