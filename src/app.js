

import React from 'react'

import ReactDOM from 'react-dom'


function app() {
  let root_div = document.createElement('div')
  root_div.setAttribute('id','root')

  if (document.body !== null) {
    document.body.appendChild(root_div)
  }
  


  ReactDOM.render(
    <div>
      <h1> Bonjour </h1>
      <pre> taper le sigle 
            s'il vous plaît </pre>
      <form>
      <label>
      entrez le sigle recherché:
      <input type="text" name="sigle"/>
      </label>
      <br/>
      <input class="button" type="submit" value="envoyer"/>
      {/*<br/>
      <input type="file" value="entrez votre fichier"/>*/}
      </form>

    </div>
    ,
    root_div
  )
}

window.onload = app


