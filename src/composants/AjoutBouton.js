import React from 'react'
import { connect } from 'react-redux'
import {setVisibilityPage} from '../reducteurs/form'


const Presentation = props => ( <div className="cell small-2"><button onClick={() =>  props.onClick()} > + </button></div>)

const mapDispatchToProps = dispatch => ({
	onClick: () => {dispatch(setVisibilityPage(true))}
})

const AjoutBouton = connect(null,mapDispatchToProps)(Presentation)
export default AjoutBouton