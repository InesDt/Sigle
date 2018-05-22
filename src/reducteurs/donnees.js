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

//Reducer
const donnees = (state =donnees_sigles, action) => {
	switch(action.type){
		case 'SET_SIGLES':
			{client.search({ index: 'sigles', body: { query: { match_all: {}} }}).then(function (resp){ var hits = resp.hits.hits; console.log(hits)}, function (err) { console.trace(err.message)})
			//return state //=> ici ajout du sigle dans elasticsearch
			return ({liste :[...selectList(state), {nom: action.nom, def: action.def}]})
		}
		case 'SET_RECH':
			return state  /*requete pour obtenir le resultat de la recherche */
		default:
			return state
	}
 }

export default donnees

export const selectListe = state => state.donnees.liste