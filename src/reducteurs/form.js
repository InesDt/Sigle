
//Actions
const SET_DEF_AJOUT = 'SET_DEF_AJOUT'
const SET_SIGLE_RECH = 'SET_SIGLE_RECH'
const SET_VISIBILITY_PAGE = 'SET_VISIBILITY_PAGE'

// Action creator
export function setDefAjout(text){
	return {
			type: SET_DEF_AJOUT,
			text
	}
}

export function setSigleRech(text){
	
	return {
			type: SET_SIGLE_RECH,
			text
	}
}

export function setVisibilityPage(page){
	return{
			type : SET_VISIBILITY_PAGE,
			page
	}
}


// Reducer
const init_state = {
	page:false,
	sigle: '',
	def:''
}
const update = (a,state) => Object.assign({},state,a)
const form = (state = init_state, action) => {
	switch(action.type){
		case SET_DEF_AJOUT:
			return update({ def: action.text },state)
		case SET_SIGLE_RECH:
			return update({ sigle: action.text },state)
		case SET_VISIBILITY_PAGE:
			return update({ page: action.page },state)
		default:
			return state
	}
 }


export default form


/* si autre page pour plus tard 
export const VisibilityPage = {
	SHOW_INIT : 'SHOW_INIT',
	SHOW_AJOUT: 'SHOW_AJOUT'
}
*/