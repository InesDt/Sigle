import React from 'react'
import { connect } from 'react-redux'
import {setVisibilityPage} from '../reducteurs/form'


const Presentation = props => ( <button onClick={() =>  props.onClick()} > Ajout </button>)

const mapDispatchToProps = dispatch => ({
	onClick: () => {dispatch(setVisibilityPage(true))}
})

const AjoutBouton = connect(null,mapDispatchToProps)(Presentation)
export default AjoutBouton