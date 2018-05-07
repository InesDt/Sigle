import { connect } from 'react-redux'
import { setSigles, selectListe } from '../reducteurs/donnees'
import { setDefAjout, selectSigle, selectDef  } from '../reducteurs/form'
import React from 'react'
import Retour from "./Retour"

const Presentation = props => 
    (
        
            <div className="grid-x grid-padding-x">
              <div className ="cell small-12">
                <div className="grid-x grid-padding-x">
                  <div className="cell auto">
                      <h4> Ajout du sigle {props.sigle} </h4>
                  </div>
                  <div className="cell small-2">
                       <Retour page={false} />
                   </div>
                </div>
              </div>
              <div className ="cell small-12">
                <div className="grid-x grid-padding-x">
                  <div className= "cell auto"> 
                  </div>
                  <div className="cell small-6">
                      <input onChange= {(e) => {console.log(e.target.value); props.onChange(e.target.value) }} type="text" placeholder="entrez la définition" value={props.def}/>
                  </div>
                  <div className="cell auto"> 
                  </div>
                </div>
              </div>
              <div className="cell small-2">
                      <button onClick= {() => props.onClick(props.sigle,props.def)} > envoyer </button>
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
    if(nom.length>0 && def.length>0){
      dispatch(setSigles({nom: nom, def: def}))
    }
    dispatch(setDefAjout(''))
  }
})

 const AjoutPage = connect(mapStateToProps, mapDispatchToProps)(Presentation)
 export default AjoutPage


