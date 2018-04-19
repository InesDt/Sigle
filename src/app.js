

import React from 'react'

import ReactDOM from 'react-dom'

//import Init from "./Init"

import Clock from "./Clock"

import Def from "./Def"

import Main from "./Main"

function app() {
  let root_div = document.createElement('div')
  root_div.setAttribute('id','root')

  if (document.body !== null) {
    document.body.appendChild(root_div)
  }
  


  ReactDOM.render(
    <Main />
    ,
    root_div
  )
}

window.onload = app


