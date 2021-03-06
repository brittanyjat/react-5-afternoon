import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCity } from '../../ducks/reducer';

class WizardTwo extends Component {
    render(){
        // console.log(this.props)
        const {updateCity} = this.props;
        return(
            <div className="parent-div">
                <div className="vert-align">
            
                <p>In what city will the property be located?</p><br />
                    
                        <input placeholder="city name" type="text" onChange={(event) => updateCity(event.target.value)}/>
                
                    <Link to="/wThree"><button className="wTwo-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) => {
    return {
        city: state.city
    }
}

export default connect(mapStateToProps, {updateCity})(WizardTwo);