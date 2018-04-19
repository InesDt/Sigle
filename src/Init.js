import React from "react";

import Def from "./Def"

class Init extends React.Component {

	render(){
		return (
				<div>
			  	<h1> Bonjour </h1>
			    <h2> taper le sigle <br/> s'il vous plaît </h2>
			    <form >
			    <input type="text" placeholder="entrez votre sigle" name="sigle" onChange={(e)=> this.props.onChange(e)}/>
			    <br/>
			    <button className="button" type="submit" value="envoyer" onClick={() => this.props.onClick()}> </button>
			    </form>
			    </div>
			);
	}

}

export default Init;