import React from "react";

import Retour from "./Retour"
class Found extends React.Component {

	render(){
		return (
				<div>
			  	<h2> Bienvenue </h2>
			    <h3> taper le sigle s'il vous plaît </h3>
			    <form >
			    <input type="text" placeholder="entrez votre sigle" name="sigle" onChange={(e)=> this.props.onChange(e)}/>
			    <br/>
			    <button type="submit" onClick={() => this.props.onClick("rech")}> envoyer </button>
			    </form>
			    <Retour onClick={()=> this.props.onClick("Retour")}/>
			    </div>
			);
	}

}

export default Found;