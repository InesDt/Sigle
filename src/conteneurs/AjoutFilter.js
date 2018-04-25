import { connect } from 'react-redux'
//import {VisibilityPage} from '../actions'
import Ajout from '../composants/Ajout'

const mapStateToProps = (state) => ({
	sigle: state.sigle
})


 const AjoutFilter = connect(mapStateToProps)(Ajout)
 export default AjoutFilter