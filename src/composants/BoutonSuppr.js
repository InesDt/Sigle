import React from 'react'
import { connect } from 'react-redux'
import {fetch_remSigle} from '../reducteurs/donnees'
import { selectSigle, selectDef } from '../reducteurs/form'

const Presentation = props => ( <button onClick={() =>  props.onClick(props.value, props.sigle_rech)} > -_- </button>)

const mapStateToProps = state => ({
  sigle_rech: selectSigle(state)
})
const mapDispatchToProps = dispatch => ({
  onClick: (e,s) => {
    dispatch(fetch_remSigle(e,s))
  }
})

const BoutonSuppr = connect(mapStateToProps,mapDispatchToProps)(Presentation)
export default BoutonSuppr