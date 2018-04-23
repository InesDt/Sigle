import React from "react";

import Retour from "./Retour"

class Def extends React.Component {

	renderDef(){
			var definitions=[['contexte1','def1'],['contexte2','def2'] ];
			return (<div>{definitions.map(([a,b]) => (<p key={[a,b].toString()} > {a} <br />
											  {b} </p>))} </div>);
	}
	render(){
		return (
				<div className="Def">
					<h2>  {this.props.value} signifie: </h2>
					{this.renderDef()}
					<Retour onClick={()=> this.props.onClick("Retour")}/>
					
				</div>
			);
	}

}

export default Def;