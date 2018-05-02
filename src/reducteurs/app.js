import {combineReducers} from 'redux'

import donnees from './donnees'
import form from './form'

const reducteur = combineReducers({
	donnees,
	form
})

export default reducteur

export const selectDonnees = state => state.donnees
export const selectForm = state => state.form