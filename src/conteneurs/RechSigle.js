import React from 'react'
import { connect } from 'react-redux'
import { setSigleRech} from '../actions/app'
import ReactDOM from 'react-dom'


let RechSigle = ({ dispatch }) => {
	let input

	return (
		<div>
			<form onSubmit={ e => {
						e.preventDefault() 
						if (!input.value.trim()){
							return
						}
						dispatch(setSigleRech(input.value))
					}}>
			<input ref={ node => input = node } />
			</form>
		</div>
		)
}

RechSigle = connect()(RechSigle)

export default RechSigle
