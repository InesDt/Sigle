import React from 'react'
import RetourFiltre from "../conteneurs/RetourFiltre"
import { VisibilityPage } from '../actions/app'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Ajout = ({sigle}) => 
    (
        <div >
          <h2> Ajout du sigle {sigle} </h2>
          <form >
          <input type="text" placeholder="entrez la définition" />
          <br/>
          
          </form>
          <button> envoyer </button>
          <RetourFiltre page={VisibilityPage.SHOW_INIT} />
          </div>
      )
  
 

Ajout.propTyoes = {
  sigle : PropTypes.string.isRequired
}
 


export default Ajout;