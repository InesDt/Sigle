import { connect } from 'react-redux'
import { selectListe, selectSigle, selectDef} from '../reducteurs/app'
import { setSigles } from '../reducteurs/donnees'
import { setDefAjout } from '../reducteurs/form'
import React from 'react'
import Retour from "./Retour"

const Presentation = props => 
    (
        <div >
          <h2> Ajout du sigle {props.sigle} </h2>
          <form >
          <input onChange= {(e) => {console.log(e.target.value); props.onChange(e.target.value) }} type="text" placeholder="entrez la définition" />
          <br/>
          
          </form>
          <button onClick= {() => props.onClick(props.sigle,props.def)} > envoyer </button>
          <Retour page={false} />
          </div>
      )
  
 

const mapStateToProps = (state) => ({
	sigle: selectSigle(state),
	liste: selectListe(state),
	def: selectDef(state)
})


const mapDispatchToProps = (dispatch) => ({
	onChange: (e) => {dispatch(setDefAjout(e))},
	onClick: (nom, def) => {dispatch(setSigles({nom: nom, def: def}))}
})

 const AjoutPage = connect(mapStateToProps, mapDispatchToProps)(Presentation)
 export default AjoutPage


