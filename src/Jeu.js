import React from "react";
import Retour from "./Retour"


class Jeu extends React.Component {

	render(){
		return(
				<div className="Jeu">
					<h2>  Peut-être un petit jeu à venir </h2>
					<Retour onClick={()=> this.props.onClick("Retour")}/>
				</div>
			);
	}

}

export default Jeu;