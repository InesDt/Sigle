import { connect } from 'react-redux'
import { setVisibilityPage} from '../actions/app'
import Retour from '../composants/Retour'

const mapDispatchToProps = (dispatch,ownProps) => ({
	onClick: () => { dispatch(setVisibilityPage(ownProps.page))}
}) 

const RetourFiltre = connect(null,mapDispatchToProps)(Retour)
export default RetourFiltre