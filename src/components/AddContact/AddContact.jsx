import React, { useContext, useState, useReducer } from 'react'
import { usersContext } from '../../contactContext'

const INIT_STATE = {
	name: '',
	lastName: '',
	number: '',
}
function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.payload,
			}
		case 'CHANGE_LAST_NAME':
			return {
				...state,
				lastName: action.payload,
			}
		case 'CHANGE_NUMBER':
			return {
				...state,
				number: action.payload,
			}
		default:
			return state
	}
}

const AddContact = () => {
	const { createUser } = useContext(usersContext)
	const [state, dispatch] = useReducer(reducer, INIT_STATE)
	const { name, lastName, number } = state
	const handleSubmit = (e) => {
		createUser(state)
		dispatch({ type: 'CHANGE_NAME', payload: '' })
		dispatch({ type: 'CHANGE_LAST_NAME', payload: '' })
		dispatch({ type: 'CHANGE_NUMBER', payload: '' })
	}
	return (
		<div>
				Name:
				<input
					type="text"
					value={name}
					onChange={(e) => dispatch({
						type: 'CHANGE_NAME',
						payload: e.target.value
					})}
			/>
			<br />
				Last Name:
				<input
					type="text"
					value={lastName}
					onChange={(e) => dispatch({
						type: 'CHANGE_LAST_NAME',
						payload: e.target.value
					})}
			/>
			<br />
				Number:
				<input
					type="text"
					name="number"
					value={number}
					onChange={(e) => dispatch({
						type: 'CHANGE_NUMBER',
						payload: e.target.value
					})}
				/>
				<br />
				<button onClick={handleSubmit}>Add Contacts</button>
		</div>
	)
}
export default AddContact


