import React from "react";


import ReactDOM from 'react-dom'

class Def extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value: null
		}
	}
   
	renderDef(){

			return (<p> une petite Définition</p>);
	}
	render(){
		return (
				<div id="Def" className="def">
					<h1> Bonjour </h1>
					<p> Voici la petite définition </p>
					
				</div>
			);
	}

}

export default Def;