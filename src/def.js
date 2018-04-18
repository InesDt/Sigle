import React from 'react'

import ReactDOM from 'react-dom'

function fonction1 (){
	document.getElementById("p1").innerHTML = "Bonjour!";
	document.getElementById("def").innerHTML = "Signification";
	}

function def(){
	let div_1 = document.createElement('div')
	  div_1.setAttribute('id','div1')

	  if (document.body !== null) {
	    document.body.appendChild(div_1)
	  }


 ReactDOM.render(
    <div>
     <h> Bonjour </h>
		<pre>   garde le paragraphe 
			dans sa forme </pre>
		<button onclick="fonction1()"> voir sa signification </button>
		<h1 id="def"> </h1> 
		<p id ="p1" > </p>

    </div>
    ,
    div_1
  )
}

window.onload = def