import { connect } from 'react-redux'
//import {VisibilityPage} from '../actions'
import Main from '../composants/Main'

const mapStateToProps = state => ({
	page: state.visibilityPage
})

 const MainFilter = connect(mapStateToProps)(Main)
 export default MainFilter