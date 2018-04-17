

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
      <h4>Sigle</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque necessitatibus, sapiente fugiat quaerat inventore aliquam est, incidunt, minus in veniam vitae tempora facere iste molestias velit dolor voluptates dignissimos voluptatibus.
      </p>
    </div>
    ,
    root_div
  )
}

window.onload = app


