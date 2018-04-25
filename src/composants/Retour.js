import React from 'react'
import PropTypes from 'prop-types'

const Retour = ({onClick}) => ( <button onClick={() =>  onClick()} > Retour </button>)

Retour.propTypes = {
	onClick: PropTypes.func.isRequired
}
export default Retour