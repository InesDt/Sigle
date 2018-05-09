import React from 'react'
import { connect } from 'react-redux'
import { setSigleRech, selectSigle, selectPage, selectDef, setDefAjout, setVisibilityPage} from '../reducteurs/form'
import { setSigles } from '../reducteurs/donnees'
import  AjoutBouton from './AjoutBouton'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
const Presentation = props => 
    {	
        return (
        	<div className="cell small-10">
						<div className="grid-x grid-padding-x">
              {
                (props.page==false) && <div className="cell auto">
                                       </div>
              }
              <div className="cell small-5">
							 <input onChange= {(e) => {console.log(e.target.value); props.onChange(e.target.value) }} type="text" placeholder="entrez un sigle" value={props.sigle} />
              </div>
              
              {
                (props.page==true)? <ReactCSSTransitionGroup transitionName="AjoutDef" transitionAppear={ true } transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={ false } >
                                    <div className="cell small-5">
                                       <input onChange= {(e) => {console.log(e.target.value); props.onChange_def(e.target.value) }} type="text" placeholder="entrez la définition" value={props.def}/>
                                    </div>
                                    </ReactCSSTransitionGroup> :
                                    <div className="cell auto">
                                    </div>
              }
                
              {
                (props.page==true) && <ReactCSSTransitionGroup transitionName="AjoutDef" transitionAppear={ true } transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={ false } >
                                      <div className="cell small-2">
                                        <button onClick= {() => props.onClick(props.sigle,props.def)}  onSubmit={ e => {e.preventDefault()} } > envoyer </button>
                                      </div>
                                      </ReactCSSTransitionGroup>
              }
                  
              {((props.sigle.length>0) && (props.page==false)) && <AjoutBouton />}
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
    dispatch(setSigleRech(e.toUpperCase()))
    if(e==''){
      dispatch(setVisibilityPage(false))
    }
	},
  onChange_def: (e) => {
    dispatch(setDefAjout(e))
  },
  onClick: (nom, def) => {
    if(nom.length>0 && def.length>0){
      dispatch(setSigles({nom: nom, def: def}))
    }
    dispatch(setDefAjout(''))
    dispatch(setVisibilityPage(false))
  }
})

const RechSigle = connect(mapStateToProps,mapDispatchToProps)(Presentation)

export default RechSigle
