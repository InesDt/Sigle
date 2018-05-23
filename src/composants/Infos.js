import { connect } from 'react-redux'
import { selectListe } from '../reducteurs/donnees'
import { selectSigle } from '../reducteurs/form'
import React from 'react'

const Presentation = props => 
  { 
      var id = 0
      var liste_infos = props.liste
      props.liste.forEach( function(p){  if(((p.nom).substring(0,props.sigle.length) == props.sigle)&&(props.sigle.length>0)) {liste_infos.push((
                                                                              <tr key ={id++}>
                                                                                <td >
                                                                                  {p.nom} 
                                                                                </td>
                                                                                <td>
                                                                                  {p.def}
                                                                                </td>
                                                                              </tr>
                                                                              ))} 
                                        }.bind(this)
                                                )
                                   
                             
                          
                            
      const affichage = (
                      <div className="defanimation">
                        <table border="4">
                          <thead>
                            <tr> 
                              <th> 
                                  Sigle
                              </th>
                              <th>
                                  Définition
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {liste_infos}
                          </tbody>
                        </table>
                        {(liste_infos.length==0) && <p> Aucune donnée correspondante </p>}
                      </div>
                    )
      console.log(props.liste)
     // console.log(props.sigle.length)
      return(affichage)
      
              
  }
  
 
const mapStateToProps = (state) => ({
	sigle: selectSigle(state),
	liste: selectListe(state)
})


 const Infos = connect(mapStateToProps)(Presentation)
 export default Infos