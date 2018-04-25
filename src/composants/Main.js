import React from 'react'
import Recherche from "./Recherche"
import AjoutFilter from "../conteneurs/AjoutFilter"
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

const Main = ({page}) => {
   switch(page){
              case 'SHOW_AJOUT': 
                  return(<AjoutFilter/>)
                   
              default:
                  return(<Recherche/>)
            
              
            }
}
  
Main.propTypes = {
  page : PropTypes.string.isRequired
}

export default Main;