import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityPage} from '../reducteurs/form'

const Presentation = props => ( <button className="Retour" onClick={() =>  props.onClick()} > Annuler </button>)

  const mapDispatchToProps = (dispatch,ownProps) => ({
      	onClick: () => { dispatch(setVisibilityPage(ownProps.page))}
  }) 

const RetourFiltre = connect(null,mapDispatchToProps)(Presentation)

export default RetourFiltre