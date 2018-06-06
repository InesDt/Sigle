import React from 'react'
import { connect } from 'react-redux'
import { setInfosPage } from '../reducteurs/donnees'

const Presentation = props => ( <a href="#" onClick={() => { console.log(props); props.onClick()}} > {props.value} </a>)

const mapDispatchToProps = (dispatch,ownProps) => ({

  onClick: () => {
    dispatch(setInfosPage((ownProps.value-1)*14))
  }
})

const Indice = connect(null,mapDispatchToProps)(Presentation)
export default Indice