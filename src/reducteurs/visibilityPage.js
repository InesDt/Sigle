

const visibilityPage = (state = 'SHOW_INIT', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_PAGE': 
			return action.page
		default:
			return state
	}
}

export default visibilityPage