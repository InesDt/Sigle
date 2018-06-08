import { connect } from 'react-redux'
import { selectListe, selectIndex } from '../reducteurs/donnees'
import { selectSigle } from '../reducteurs/form'
import React from 'react'
import Indice from "./Indice"
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
        console.log(props.footer)
      function indexes_footer(n){
        var liste_page = []
        for (var i = 1 ; i < n+1 ; i++) {
                              
                              liste_page.push(<Indice key={i} value={i}/>)

                            }
        return(liste_page)
      }                     
      const affichage = (
                      <div className="grid-x grid-padding-x" id="table">
                        <div className=" cell small-12" >
                          <div  className=" grid-x  grid-padding-x">
                            <div className="cell small-3 medium-1" id="thead">
                                Sigle
                            </div>
                            <div className="cell small-6 medium-10" id="thead">
                                Définition
                            </div>
                            <div className="cell small-3 medium-1" id="thead">
                            </div>
                          </div>
                        </div>
                        {props.liste}
                        <div className="cell small-12" id="footer">
                          <div className="links">
                            {
                              indexes_footer(props.footer)
                            }
                          </div>
                        </div>
                        {(props.liste.length==0) && <div className="cell small-12"><p> Aucune donnée correspondante </p></div>}
                        
                      </div>
                    )
      
     // console.log(props.sigle.length)
      return(affichage)
      
              
  }
  
 
const mapStateToProps = (state) => ({
	sigle: selectSigle(state),
	liste: selectListe(state).slice(selectIndex(state), selectIndex(state)+14),
  footer: Math.ceil(selectListe(state).length/14)
})


 const Infos = connect(mapStateToProps)(Presentation)
 export default Infos



