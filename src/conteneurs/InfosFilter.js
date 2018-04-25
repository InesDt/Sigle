import { connect } from 'react-redux'
//import {VisibilityPage} from '../actions'
import InfosListe from '../composants/InfosListe'

const mapStateToProps = (state) => ({
	sigle: state.sigle
})


 const InfosFilter = connect(mapStateToProps)(InfosListe)
 export default InfosFilter