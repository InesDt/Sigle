
const sigle = (state = '', action) =>
	switch(action.type){
		case 'SET_SIGLE_RECH':
			return action.text
		default:
			return state
	}

export default sigle