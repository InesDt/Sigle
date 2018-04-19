import React from 'react'
import Def from "./Def"

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {
        switch (this.state.value){
          case 1: return(<Def />);

          case 2: return(<Clock />)
          default:

                  return(
                    <div className="Menudiv">
                    
                     <button onClick={() => this.setState({value: 1})} >  Petite définition </button>
                     <br />
                     <button onClick={() => this.setState({value: 2})}>  Voir l'heure </button>
                     <br />
                     <button>  Autre </button>
                     <br />
                     <button>  Autre </button>
                      <br />
                     <button>  Autre </button>
                     <br />
                     <button>  Autre </button>
                     
                    </div>
                   );
          

            
          }

        

 			}
 }

    
  

export default Menu;