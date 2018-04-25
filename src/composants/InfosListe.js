import React from 'react'
import RetourFiltre from "../conteneurs/RetourFiltre"
import { VisibilityPage } from '../actions/app'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const InfosListe = ({sigle}) => 
    { const base = [{sigle: 'CAP', def: 'certificate d aptitude professionnelle' }, {sigle: 'CAP', def:'centre anti-poison'} , {sigle: 'AT', def:'accident du travail'}, {sigle: 'AT', def:'autorisation de travail'}  ]
      const defs = base.map( ({sigle,def}) => (<tr> <td> {def} </td> </tr> ))
       <table>
          <tr>
            <th> définition </th>
          </tr>
          {defs}

       </table>
      }
  
 

InfosListe.propTyoes = {
  sigle : PropTypes.string
}
 


export default InfosListe;