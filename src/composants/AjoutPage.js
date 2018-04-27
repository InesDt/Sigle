import { connect } from 'react-redux'
import { selectListe, selectSigle, selectDef} from '../reducteurs/app'
import { setSigles } from '../reducteurs/donnees'
import { setDefAjout } from '../reducteurs/form'
import React from 'react'
import Retour from "./Retour"

const Presentation = props => 
    (
        <div className="grid-container full">
            <div className="grid-x grid-padding-x">
                <div className="cell small-12">
                    <h2> Ajout du sigle {props.sigle} </h2>
                </div>
                <div className= "cell small-3"> </div>
                <div className="cell small-6">
                    <input onChange= {(e) => {console.log(e.target.value); props.onChange(e.target.value) }} type="text" placeholder="entrez la définition" value={props.def}/>
                </div>
                <div className="cell small-3"> </div>
                <div className="cell auto">
                     <button onClick= {() => props.onClick(props.sigle,props.def)} > envoyer </button>
                </div>
                <div className="cell auto">
                     <Retour page={false} />
                </div>
            </div>
        </div>
      )
  
 

const mapStateToProps = (state) => ({
	sigle: selectSigle(state),
	liste: selectListe(state),
	def: selectDef(state)
})


const mapDispatchToProps = (dispatch) => ({
	onChange: (e) => {
    dispatch(setDefAjout(e))
  },
	onClick: (nom, def) => {
    dispatch(setSigles({nom: nom, def: def}))
    dispatch(setDefAjout(''))
  }
})

 const AjoutPage = connect(mapStateToProps, mapDispatchToProps)(Presentation)
 export default AjoutPage


