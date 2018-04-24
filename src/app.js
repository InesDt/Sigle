

import React from 'react'

import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'

import {createStore} from 'redux'

import reducteurs from './reducteurs'

import Main from "./composants/Main"

function app() {
    let root_div = document.createElement('div')
    root_div.setAttribute('id','root')

    if (document.body !== null) {
      document.body.appendChild(root_div)
  }
  
  const store = createStore(reducteurs)

  ReactDOM.render(
      <Provider store={store}>
      <Main />
      </Provider>
      ,
      root_div
  )
}

window.onload = app


