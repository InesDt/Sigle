import React from 'react'
import Def from "./Def"
import Clock from "./Clock"
import Square from "./Square"
import Autre from "./Autre"
import Retour from "./Retour"
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {
        switch (this.state.value){
          case 1: return(<Def value={this.props.value} onClick={() => this.setState({value: 0})}/>);

          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
                  return(<Autre onClick={() => this.setState({value: 0})}/>);

          default:

                  return(
                    <div className="Menudiv">
                     <h2> Voici vos options pour le sigle : {this.props.value} </h2> 
                     <button onClick={() => this.setState({value: 1})} >  Petite définition </button>
                     <br />
                     <button onClick={() => this.setState({value: 2})} >  Autre</button>
                     <br />
                     <button onClick={() => this.setState({value: 3})} >  Autre </button>
                     <br />
                      <button onClick={() => this.setState({value: 4})} >  Autre </button>
                     <br />
                      <button onClick={() => this.setState({value: 5})} >  Autre </button>
                     <br />
                      <button onClick={() => this.setState({value: 6})} >  Autre </button>
                      <br />
                      <Retour onClick={()=> this.props.onClick("Retour")}/>
                    </div>
                   );
          

            
          }

        

 			}
 }

    
  

export default Menu;