import React from 'react'
import RechSigle from './RechSigle'
import AjoutBouton from './AjoutBouton'
import AjoutPage from './AjoutPage'
import Infos from './Infos'
const Recherche = () => (
	<div className="grid-container full">
      <div className="grid-x grid-padding-x">
    	    <h2> 
              petit outil pour Sigle 
          </h2>
          <div className ="cell small-12">
              <div className="grid-x grid-padding-x">
                  <div className="cell auto"></div>
      		        <RechSigle />
      		        <AjoutBouton />
                  <div className="cell auto"></div>
              </div>
          </div>
    		  <Infos />
      </div>
	</div>
	
	)


export default Recherche