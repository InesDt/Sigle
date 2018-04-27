import donnees_sigles from '../constante'

// selector
const selectList = state => state.liste
//Actions
const SET_SIGLES = 'SET_SIGLES'


//Action creator
export function setSigles(sigle) {
	return {type: 'SET_SIGLES',
			nom: sigle.nom,
			def: sigle.def
		}
}

//Reducer
const donnees = (state =donnees_sigles, action) => {
	switch(action.type){
		case 'SET_SIGLES':
			return ({liste :[...selectList(state), {nom: action.nom, def: action.def}]})
		default:
			return state
	}
 }

export default donnees
