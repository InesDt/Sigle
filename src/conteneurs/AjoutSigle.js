//import React from 'react'
import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityPage} from '../actions/app'
import {VisibilityPage} from '../actions/app'
import ButtonAjout from '../composants/ButtonAjout'

const mapDispatchToProps = dispatch => ({
	onClick: () => {dispatch(setVisibilityPage(VisibilityPage.SHOW_AJOUT))}
})
 const AjoutSigle = connect(null,mapDispatchToProps)(ButtonAjout)
export default AjoutSigle