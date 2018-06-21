import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { updateProp } from '../../ducks/reducer'

class WizardThree extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">
                   <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">
                        <Link to="/wFour"><button value="primaryHome" onClick={ () => updateProp('Primary Home') }>Primary Home</button></Link>
                        <Link to="/wFour"><button value="rentalProperty" onClick={ () => updateProp('Rental Property') }>Rental Property</button></Link>
                        <Link to="/wFour"><button value="secondaryHome" onClick={ () => updateProp('Secondary Home') }>Secondary Home</button></Link>
                    </div>
                </div>           
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { propToBeUsedOn } = state

    return {
        propToBeUsedOn
    }
}

export default connect( mapStateToProps, {updateProp})(WizardThree) 
