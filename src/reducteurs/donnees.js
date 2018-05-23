import donnees_sigles from '../constante'

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
			nom: sigle.nom,
			def: sigle.def
		}
}

export function setRech(sigle_nom) {
	return {
		type: 'SET_RECH',
		nom: sigle_nom
	}
}

const update = (a,state) => Object.assign({},state,a)
//Reducer
const donnees = async (state =donnees_sigles, action) => {
	switch(action.type){
		case 'SET_SIGLES':
			{
				client.index(
          {
           index: 'sigles',
           type: '_doc',
           body: {
            acronym: action.nom,
            definition: action.def
            }
           }
          
        ).then(function (resp){

                }, 
               function (error) { 
                 console.trace(error.message)
                }
               ).then(function(){ return new Promise(function(resolve){ setTimeout(4000)}) }).then(
        client.search(
          {
           index: 'sigles',
           body: {
            query: {
             match_phrase_prefix: { acronym: action.nom}
            },
            sort: [ {acronym: 'asc'}],
            _source: [ 'acronym', 'definition' ]
           }
          }
        ).then(function (resp){
                 hits = resp.hits.hits; 
                 hits= update(hits.map((p) => (p._source)), hits)
                 console.log(hits)
                }, 
               function (error) { 
                 console.trace(error.message)
                }
               ))
			 	//=> ajout du sigle dans elasticsearch
				return state
			}
		case 'SET_RECH':
			{
				var hits = [];

				var hits = await client.search(
          {
           index: 'sigles',
           body: {
            query: {
             match_phrase_prefix: { acronym: action.nom}
            },
            sort: [ {acronym: 'asc'}],
            _source: [ 'acronym', 'definition' ]
           }
          }
        )
        hits= hits.hits.hits
        hits= update(hits.map((p) => (p._source)), hits)
        return update({ liste: hits } ,state) 
			}
		default:
			return state
	}
 }

export default donnees

export const selectListe = state => state.donnees.liste