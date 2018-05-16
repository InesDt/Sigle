import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityPage} from '../reducteurs/form'

const Presentation = props => ( <div className="cell small-2" > <button className="defanimation" onClick={() =>  props.onClick()} > Annuler </button> </div>)

  const mapDispatchToProps = (dispatch,ownProps) => ({
      	onClick: () => {
          dispatch(setVisibilityPage(ownProps.page))
          document.getElementById('inputsigle').classList.remove('input_sigle_decale_s')
          document.getElementById('inputsigle').classList.add('input_sigle_decale_r')

        }
  }) 

const RetourFiltre = connect(null,mapDispatchToProps)(Presentation)

export default RetourFiltre