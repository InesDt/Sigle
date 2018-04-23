
import React from 'react'

import Found from "./Found"
import Menu from "./Menu"

class  Init extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      text:''
    };
  }
  renderInit(){
  	if (!(this.state.value)){
	  				return(<Found onChange={(e)=> this.setState({text:e.target.value})} onClick={(e) => {(e=="Retour")? (this.props.onClick()) : (this.setState({value: true})) } }/>);
	  			
	  			}else{

	  				return(<Menu onClick={() => this.setState({value: false})} value={this.state.text} />);
	  			}

  }
  render() {
  			return(
  				<div>
	  			{this.renderInit()}
 				</div> 
 				)
 			}
 }

    
  

export default Init;