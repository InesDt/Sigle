//import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityPage} from '../actions'
import {VisibilityPage} from '../actions'

const mapDispatchToProps = dispatch => ({
	onClick: () => dispatch(setVisibilityPage(VisibilityPage.SHOW_AJOUT))
})

export default connect(mapDispatchToProps)(<button> ajout </button>)