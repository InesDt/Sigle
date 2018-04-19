import React from 'react'

import Init from "./Init"
import Menu from "./Menu"
import Def from "./Def"


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      text:''
    };
  }
  renderMain(){
  	if (!(this.state.value)){
	  				return(<Init onChange={(e)=> this.setState({text:e})}onClick={() => this.setState({value: true})}/>);
	  			
	  			}else{

	  				return(<Menu value={this.state.text} />);
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