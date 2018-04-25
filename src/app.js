

import React from 'react'

import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'

import {createStore} from 'redux'

import rootReducer from './reducteurs/app.js'

import MainFilter from "./conteneurs/MainFilter"

import AjoutFilter from './conteneurs/AjoutFilter'
import RechSigle from './conteneurs/RechSigle'
import Recherche from './composants/Recherche'

import {
  setSigleRech,
  setVisibilityPage,
  VisibilityPage
} from './actions/app.js'

function app() {
    let root_div = document.createElement('div')
    root_div.setAttribute('id','root')

    if (document.body !== null) {
      document.body.appendChild(root_div)
  }
  
  const store = createStore(rootReducer)

  ReactDOM.render(
      <Provider store={store}>
      <MainFilter/>
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
store.dispatch(setSigleRech('Learn about actions'))
store.dispatch(setSigleRech('bonjour'))
store.dispatch(setSigleRech('JPP'))
store.dispatch(setVisibilityPage(VisibilityPage.SHOW_AJOUT))
// Stop listening to state updates
unsubscribe()*/