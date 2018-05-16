import React from 'react'
import { connect } from 'react-redux'
import {setVisibilityPage} from '../reducteurs/form'


const Presentation = props => ( <div className="cell auto"><button className="defanimation" onClick={() =>  props.onClick()} > + </button></div>)

const mapDispatchToProps = dispatch => ({
	onClick: () => {
    dispatch(setVisibilityPage(true))
    document.getElementById('inputsigle').classList.remove('input_sigle_entree')
    document.getElementById('inputsigle').classList.add('input_sigle_decale_s')
    document.getElementById('inputsigle').classList.remove('input_sigle_decale_r')
  }
})

const AjoutBouton = connect(null,mapDispatchToProps)(Presentation)
export default AjoutBouton