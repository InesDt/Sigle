import React from 'react'
import PropTypes from 'prop-types'

const ButtonAjout = ({onClick}) => ( <button onClick={() =>  onClick()} > Ajout </button>)

ButtonAjout.propTypes = {
	onClick: PropTypes.func.isRequired
}
export default ButtonAjout