import React from 'react'
import { connect } from 'react-redux'
import { setSigleRech} from '../actions'


const RechSigle = ({ dispatch }) => {
	let input

	return (
		<div>
			<form onSubmit={ e => {
						e.preventDefault() 
						if (!input.value.trim()){
							return
						}
						dispatch(setSigleRech(iput.value))
						input.value = ''
					}}>
			<input ref={ node => input = node} />
			</form>
		</div>
		)
}

export default connect()(RechSigle)