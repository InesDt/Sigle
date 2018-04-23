import React from "react";



class Retour extends React.Component {

	render(){
		return(
				<button className="Retour" onClick={()=> this.props.onClick()}> Retour </button>
			);
	}

}

export default Retour;