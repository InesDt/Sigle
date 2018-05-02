import { connect } from 'react-redux'

import {selectPage} from '../reducteurs/form'

import React from 'react'
import Recherche from "./Recherche"
import AjoutPage from "./AjoutPage"

const Presentation = props => {
   switch(props.page){
              case true: 
                  return(<AjoutPage />)
                   
              default:
                {
                  return(<Recherche/>)
                }
              
            }
}


const mapStateToProps = state => ({
	page: selectPage(state)
})

 const Main = connect(mapStateToProps)(Presentation)
 export default Main