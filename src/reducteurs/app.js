import {combineReducers} from 'redux'

import donnees from './donnees'
import form from './form'

const reducteur = combineReducers({
	donnees,
	form
})

export default reducteur

export const selectSigle = state => state.form.sigle
export const selectPage = state => state.form.page
export const selectListe = state => state.donnees.liste
export const selectDef = state => state.form.def
