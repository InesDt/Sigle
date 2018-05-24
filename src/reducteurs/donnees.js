import donnees_sigles from '../constante'
import React from 'react'

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
            _source: [ 'acronym', 'definition' ]
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
            }
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

		default:
			return state
	}
 }

export default donnees

export const selectListe = state => state.donnees.liste