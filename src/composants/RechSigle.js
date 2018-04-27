import React from 'react'
import { connect } from 'react-redux'
import { setSigleRech} from '../reducteurs/form'
import {selectSigle} from '../reducteurs/app'
const Presentation = props => 
    {	
        return (<div className="cell auto">
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
	onChange: (e) => {dispatch(setSigleRech(e))}
})

const RechSigle = connect(mapStateToProps,mapDispatchToProps)(Presentation)

export default RechSigle
