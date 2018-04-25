import React from 'react'
import ReactDOM from 'react-dom'

import RechSigle from '../conteneurs/RechSigle'
import AjoutSigle from '../conteneurs/AjoutSigle'
import AjoutFilter from '../conteneurs/AjoutFilter'
import InfosListe from '../conteneurs/InfosFilter'
const Recherche = ({ dispatch }) => (
	<div>
	    <h2> petit outil pour Sigle </h2>
		<RechSigle />
		<AjoutSigle />
		<InfosFilter />

	</div>
	
	)


export default Recherche