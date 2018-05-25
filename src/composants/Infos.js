import { connect } from 'react-redux'
import { selectListe } from '../reducteurs/donnees'
import { selectSigle } from '../reducteurs/form'
import React from 'react'

const Presentation = props => 
  { 
      var id = 0
      var test = [{acronym:'APB', definition:'Admission Post Bac'}, {acronym:'APB', definition:'Admission Post Bac'},{acronym:'APB', definition:'Admission Post Bac'},{acronym:'APB', definition:'Admission Post Bac'}]
      /*
      var liste_infos = []
      
      props.liste.forEach( function(p,index){  liste_infos.push((
                                                                              <tr key ={index}>
                                                                                <td >
                                                                                  {p.acronym} 
                                                                                </td>
                                                                                <td>
                                                                                  {p.definition}
                                                                                </td>
                                                                              </tr>
                                                                              ))
                                        }.bind(this)
                                                )
                                   
                             
         */                 
                            
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
                              <th>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {props.liste}
                          </tbody>
                        </table>
                        {(props.liste.length==0) && <p> Aucune donnée correspondante </p>}
                      </div>
                    )
      
     // console.log(props.sigle.length)
      return(affichage)
      
              
  }
  
 
const mapStateToProps = (state) => ({
	sigle: selectSigle(state),
	liste: selectListe(state)
})


 const Infos = connect(mapStateToProps)(Presentation)
 export default Infos