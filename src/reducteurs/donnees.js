import donnees_sigles from '../constante'
import React from 'react'
import BoutonSuppr from '../composants/BoutonSuppr'

// selector
const selectList = state => state.liste
//Actions
const SET_SIGLES = 'SET_SIGLES'

var elasticsearch = require('elasticsearch')
  var client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
  });




//Action creator
export function setInfosPage(number) {
	return {
		type: 'SET_INFOS_PAGE',
		index: number
	}
}
//Action creator 
export function setSigles(sigle) {
	return {
      type: 'SET_SIGLES',
			acronym: sigle.nom,
			definition: sigle.def
		}
}

// Action creator
export function setRech(liste_sigle) {
	return {
		type: 'SET_RECH',
		liste: liste_sigle
	}
}
//
export function fetch_setRech(sigle_nom){
	console.log(sigle_nom)
	return dispatch => {

		client.search(
          {
           index: 'sigles',
           body: {
            query: {
             match_phrase_prefix: { acronym: sigle_nom}
            },
            sort: [ {acronym: 'asc'}],
            _source: [ 'acronym', 'definition' ],
            // taille maximale pour les requêtes pour permettre l'affichage de toutes les définitions correspondantes au préffixe dans la requête
            size:10000
           }
          }
        ).then(
        	res => {
        		res = res.hits.hits;
        		var hits=[]
        		var liste_infos = [] 
            res.forEach((p) => hits.push(p._source))
            console.log(hits)
            hits.forEach( function(p,index){  liste_infos.push((
                                                                              <div className=" cell small-12"  key={index} >
																											                          <div  className=" grid-x  grid-padding-x" >
																											                            <div className="cell  medium-1">
																											                            	<div id="body">
																											                                {p.acronym}
																											                               </div>
																											                            </div>
																											                            <div className="cell  medium-10">
																											                            	<div id="body">
																											                                {p.definition}
																											                              </div>
																											                            </div>
																											                            <div className="cell medium-1">
																											                            	<div id="body">
																											                            		<BoutonSuppr value={p} />
																											                            	</div>
																											                            </div>
																											                          </div>
																											                        </div>
                                                                              ))
                                        }.bind(this)
                                                )
						dispatch(setRech(liste_infos))
        	}
        )
	}
}


// 
export function fetch_setSigle(sigle){
	return dispatch => {
		client.index(
          {
           index: 'sigles',
           type: '_doc',
           body: {
            acronym: sigle.acronym,
            definition: sigle.definition
            },
            refresh: true
           }).then(
           		() => { dispatch(fetch_setRech(sigle.acronym))}
           	)
          
        
	}
}

function supprSigle(id, sigle_courant){
	return dispatch => { client.delete({
		index: 'sigles',
		type: '_doc',
		id: id,
		refresh:true
	}).then(
		() => { dispatch(fetch_setRech(sigle_courant))}
	)
}
}
export function fetch_remSigle(sigle, sigle_courant){
	return dispatch => {
		var id = 0;
		client.search(
          {
           index: 'sigles',
           body: {
            query: {
            	bool: {
            		must: [
            			{match:{ acronym: sigle.acronym}},
            			{match:{ definition: sigle.definition}}

            		]
            	}
            },
          
            sort: [ {acronym: 'asc'}],
            _source: [ 'acronym', 'definition' ]
           }
          }
        ).then(
        	res => {
        		res = res.hits.hits;
        		id= res[0]._id
        		dispatch(supprSigle(id, sigle_courant))
          }
          )
	}
}

const update = (a,state) => Object.assign({},state,a)
//Reducer
const donnees = (state =donnees_sigles, action) => {
	switch(action.type){
	
		case 'SET_RECH':
			return update({ liste: action.liste } ,state) 
		case 'SET_INFOS_PAGE':
			return update({ index: action.index } ,state)
		default:
			return state
	}
 }

export default donnees

export const selectListe = state => state.donnees.liste
export const selectIndex = state => state.donnees.index