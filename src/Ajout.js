import React from 'react'
import Retour from "./Retour"
class  Ajout extends React.Component {
 render(){
    return (
        <div>
          <h2> Ajout d'un sigle </h2>
          <form >
          <input type="text" placeholder="entrez votre sigle" name="sigle" />
          <br/>
          <input type="text" placeholder="entrez votre nom" name="nom" />
          <br/>
          <input type="text" placeholder="entrez votre prenom" name="prenom" />
          <br/>
          <input type="text" placeholder="entrez la catégorie du sigle" name="sigle" />
          <br/>
          </form>
          <button> envoyer </button>
          <Retour onClick={()=> this.props.onClick("Retour")}/>
          </div>
      );
  }
 }

    
  

export default Ajout;