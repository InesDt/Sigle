import React from "react";
import Retour from "./Retour"


class Autre extends React.Component {

	render(){
		return (
				<div className="Autre">
					<h2>  Fonctionnalité à venir </h2>
					<Retour onClick={()=> this.props.onClick("Retour")}/>

				</div>
			);
	}

}

export default Autre;