import React from 'react'
import Geolocalizacion from './Geolocalizacion';
import './GeoModal.css'

const GeoModal = (props) => {

        return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}> X </button>
                <Geolocalizacion id={props.id}/>
                { props.children }
            </div>
        </div>
    ) : "" ;
}

export default GeoModal