import React from 'react'
import { connect } from 'react-redux'
import { setSigleRech, selectSigle, selectPage, selectDef, setDefAjout, setVisibilityPage} from '../reducteurs/form'
import { fetch_setSigle, fetch_setRech, setInfosPage } from '../reducteurs/donnees'
import  AjoutBouton from './AjoutBouton'
import Retour from './Retour'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
const Presentation = props => 
    {	
          return (
          	<div className="cell small-12">
  						<div className="grid-x grid-padding-x">
                {((props.sigle.length>0) && (props.page==true)) && <Retour page={false} />}
                {
                  (props.page==true) && 
                                        <div className="cell small-2">
                                          <button id="Button" onClick= {() => props.onClick(props.sigle,props.def)}  onSubmit={ e => {e.preventDefault()} } className="defanimation"> envoyer </button>
                                        </div>
                }
                {
                  (props.page== false) &&
                    <div className="cell auto">
                    </div>
                }
                <div className="cell small-3" >
  							 <input onChange= {(e) => {console.log(e.target.value); props.onChange(e.target.value) }} type="text" placeholder="entrez un sigle" value={props.sigle} id ="inputsigle"/>
                </div>
                {
                  (props.page== true) &&
                    <div className="cell auto">
                    </div>
                }
                  {
                    (props.page==true) &&
                                          <div className="cell small-4">
                                           <input onChange= {(e) => {console.log(e.target.value); props.onChange_def(e.target.value) }} type="text" placeholder="entrez la définition" value={props.def} id="inputdef" className="defanimation"/>
                                          </div>                 
                  }
                {((props.sigle.length>0) && (props.page==false)) && <AjoutBouton />}
                { (props.sigle.length==0) && <div className="cell auto"> </div>}
  						</div>
  					</div>
        	)
}

const mapStateToProps = (state) => ({
	sigle: selectSigle(state),
  page: selectPage(state),
  def: selectDef(state)
})

const mapDispatchToProps = (dispatch) => ({
	onChange: (e) => {
    dispatch(setInfosPage(0))
    dispatch(setSigleRech(e.toUpperCase()))
    dispatch(fetch_setRech(e.toUpperCase()))
    if(e==''){
      dispatch(setVisibilityPage(false))
      document.getElementById('inputsigle').classList.remove('input_sigle_entree')
      document.getElementById('inputsigle').classList.remove('input_sigle_decale_r')
      document.getElementById('inputsigle').classList.remove('input_sigle_decale_s')
      document.getElementById('inputsigle').classList.add('input_sigle_vide')
    }else{
      document.getElementById('inputsigle').classList.add('input_sigle_entree')
      document.getElementById('inputsigle').classList.remove('input_sigle_vide')
    }
	},
  onChange_def: (e) => {
    dispatch(setDefAjout(e))
  },
  onClick: (nom, def) => {
    if(nom.length>0 && def.length>0){
      dispatch(fetch_setSigle({acronym: nom, definition: def}))
      
    }
    dispatch(setDefAjout(''))
    dispatch(setVisibilityPage(false))
    document.getElementById('inputsigle').classList.remove('input_sigle_decale_s')
    document.getElementById('inputsigle').classList.add('input_sigle_decale_r')
  }
})

const RechSigle = connect(mapStateToProps,mapDispatchToProps)(Presentation)

export default RechSigle
