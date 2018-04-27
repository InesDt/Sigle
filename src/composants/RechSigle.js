import React from 'react'
import { connect } from 'react-redux'
import { setSigleRech} from '../reducteurs/form'

const Presentation = props => 
    {
    	let input
        return (<div>
					<form onSubmit={ e => {e.preventDefault(); console.log(input.value); props.onSubmit(input.value)} } >
					<input ref={ node => input = node } type="text" placeholder="entrez un sigle" />
					</form>
				</div>
      	)
}

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (e) => {dispatch(setSigleRech(e))}
})

const RechSigle = connect(null,mapDispatchToProps)(Presentation)

export default RechSigle
