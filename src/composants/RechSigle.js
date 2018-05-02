import React from 'react'
import { connect } from 'react-redux'
import { setSigleRech, selectSigle} from '../reducteurs/form'

const Presentation = props => 
    {	
        return (
        	<div className="cell small-4">
						<form onSubmit={ e => {e.preventDefault()} } >
							<input onChange= {(e) => {console.log(e.target.value); props.onChange(e.target.value) }} type="text" placeholder="entrez un sigle" value={props.sigle} />
						</form>
					</div>
      	)
}

const mapStateToProps = (state) => ({
	sigle: selectSigle(state)
})

const mapDispatchToProps = (dispatch) => ({
	onChange: (e) => {
		dispatch(setSigleRech(e.toUpperCase()))
	}
})

const RechSigle = connect(mapStateToProps,mapDispatchToProps)(Presentation)

export default RechSigle
