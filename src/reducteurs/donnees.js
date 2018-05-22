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
const donnees = (state =donnees_sigles, action) => {
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
               )
        /* on attend 30 secondes pour l'indexation*/
        client.ping({
				  requestTimeout: 60000,
				}, function (error) {
				  if (error) {
				    console.error('elasticsearch cluster is down!');
				  } else {
				    console.log('All is well');
				  }
				})
			 	//=> ajout du sigle dans elasticsearch
				return state
			}
		case 'SET_RECH':
			{
				var hits = []

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
                }, 
               function (error) { 
                 console.trace(error.message)
                }
               )
        client.ping({
				  requestTimeout: 60000,
				}, function (error) {
				  if (error) {
				    console.error('elasticsearch cluster is down!');
				  } else {
				    console.log('All is well');
				  }
				  client.close()
				});
        
        console.log(hits)
        return update({ liste: hits } ,state) 
			}
		default:
			return state
	}
 }

export default donnees

export const selectListe = state => state.donnees.liste