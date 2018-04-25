import React from 'react'
import RechSigle from "../conteneurs/RechSigle"
import Ajout from "./Ajout"

class Main extends React.Component {
  
  render() {
    
       
        switch (store.getState().page){
            case 'SHOW_AJOUT': 
                return(<Ajout/>);
                 
            default:
                return(<RechSigle/>);
          

            
          }

        

      }
 }

    
  

export default Main;