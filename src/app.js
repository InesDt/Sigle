

import React from 'react'

import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'

import {createStore} from 'redux'

import rootReducer from './reducteurs/app.js'

import Main from "./composants/Main"

import AjoutPage from "./composants/AjoutPage"

import {
  setSigleRech,
  setVisibilityPage,
  VisibilityPage,
  setSigles
} from './reducteurs/app.js'

function app() {
    let root_div = document.createElement('div')
    root_div.setAttribute('id','root')

    if (document.body !== null) {
      document.body.appendChild(root_div)
  }
  
  const store = createStore(rootReducer)

  ReactDOM.render(
      <Provider store={store}>
        <div className="grid-container full">
          <Main/>
        </div>
      </Provider>
      ,
      root_div
  )
}

window.onload = app

/*
// test des actions


console.log(store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState()))
// Dispatch some actions
store.dispatch(setSigles({nom: 'autre ', def: 'autre aussi'}))
store.dispatch(setSigleRech('bonjour'))
store.dispatch(setSigleRech('JPP'))
store.dispatch(setVisibilityPage(VisibilityPage.SHOW_AJOUT))
// Stop listening to state updates
unsubscribe()*/