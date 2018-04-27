import { connect } from 'react-redux'
import {selectSigle, selectListe} from '../reducteurs/app'
import React from 'react'

const Presentation = props => 
    { 
      const defs = (<div> <div> Définitions </div> {props.liste.map( p => ( (p.nom == props.sigle)? (<div key ={p.def.toString()}>{p.def} </div>) : null ) )} </div>)
       
       return (defs)
      }
  
 
const mapStateToProps = (state) => ({
	sigle: selectSigle(state),
	liste: selectListe(state)
})


 const Infos = connect(mapStateToProps)(Presentation)
 export default Infos