import React from 'react'

import Init from "./Init"
import Menu from "./Menu"
import Def from "./Def"


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    };
  }
  renderMain(){
  	if (!(this.state.value)){
	  				return(<Init onClick={() => this.setState({value: true})}/>);
	  			
	  			}else{

	  				return(<Menu />);
	  			}

  }
  render() {
  			return(
  				<div>
  				<h1> Mon Main </h1>
	  			{this.renderMain()}
 				</div> 
 				)
 			}
 }

    
  

export default Main;