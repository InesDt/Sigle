import React from 'react'

import Init from "./Init"
import Ajout from "./Ajout"
import Jeu from "./Jeu"
import Retour from "./Retour"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {
    
        console.log("coucou",this.state.value);
        switch (this.state.value){
          case 1: return(<Init onClick={() => this.setState({value: 0})}/>);

          case 2: return(<Ajout onClick={() => this.setState({value: 0})}/>);

          case 3:
                  return(<Jeu onClick={() => this.setState({value: 0})}/>);

          default:

                  return(
                    <div className="Maindiv">
                     <h1> Désigleur </h1>
           
                     <h2> Bienvenue <br/> Que souhaitez vous faire ? </h2> 
                     <button onClick={() => this.setState({value: 1})} >  Rechercher un sigle </button>
                     <br />
                     <button onClick={() => this.setState({value: 2})} >  Ajout d'un sigle </button>
                     <br />
                     <button onClick={() => this.setState({value: 3})} >  Petit jeu d'intuition </button>
                    </div>
                    );
          

            
          }

        

      }
 }

    
  

export default Main;