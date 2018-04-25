import React from 'react'
//import Retour from "../conteneurs/Retour"
import { VisibilityPage } from '../actions'
class  Ajout extends React.Component {
 render(){
    return (
        <div>
          <h2> Ajout du sigle {store.sigle}</h2>
          <form >
          <input type="text" placeholder="entrez la définition" name="sigle" />
          <br/>
          
          </form>
          <button> envoyer </button>
          {/*<Retour Page={VisibilityPage.SHOW_INIT} />*/}
          </div>
      );
  }
 }

    
  

export default Ajout;