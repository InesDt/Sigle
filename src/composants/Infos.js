import { connect } from 'react-redux'
import {selectSigle, selectListe} from '../reducteurs/app'
import React from 'react'

const Presentation = props => 
    { 
      var id = 0
      const defs = (<div className = "cell small-12"> <div> Définitions </div> {props.liste.map( p => ( (p.nom == props.sigle)? (<div key ={id++}>{p.def} </div>) : null ) )} </div>)
      console.log(props.liste)
       return (defs)
      }
  
 
const mapStateToProps = (state) => ({
	sigle: selectSigle(state),
	liste: selectListe(state)
})


 const Infos = connect(mapStateToProps)(Presentation)
 export default Infos