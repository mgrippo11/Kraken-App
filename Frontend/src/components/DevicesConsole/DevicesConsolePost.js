import React from 'react'
//import { Link } from "react-router-dom";
import GeoModal from '../Geolocalizacion/GeoModal'
//import { Modal } from 'react-bulma-components'

export const DevicesConsolePost = ({post, loading}) => {

    const [buttonPopup, setButtonPopup] = React.useState(false)
    const [idDevice, setIdDevice] = React.useState(0)

    if(loading) {
        return (<div className="spinner-border text-dark" role="status">
                    <h2 className="sr-only">Loading...</h2>
                </div>)
    }
    
   // console.log(post.sort((a,b) => a.LastSeen > b.LastSeen ))
    return (
            <ul className="list-group mb-4">
                {   
                    post.length === 0
                    ?
                    <li>No se encontrador dispositivos.</li>
                    :
                    <table id="datatable" className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>IMEI</th>
                                <th>Usuario</th>
                                <th>ID</th>
                                <th>Modelo</th>
                                <th>Grupo Organizativo</th>
                                <th>Ultima Conexion</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                    {post.map(item => (
                        <React.Fragment key={item.Udid}>
                        <tbody>                            
                            <tr>
                                <td> {/* <Link to={{pathname: `/Geolocalizacion/${item.Imei}`, id: item.Id.Value}} className="fas fa-map-marker-alt"></Link>*/}
                                    <button className="fas fa-map-marker-alt" onClick={() => (setButtonPopup(true), setIdDevice(item.Id.Value))}> {item.Imei} </button> 
                                </td>
                                
                                <td> {item.UserName} </td>
                                <td> {item.Id.Value} </td>
                                <td> {item.Model} </td>
                                <td> {item.LocationGroupName} </td>
                                <td> {item.LastSeen} </td>
                                <td> {item.EnrollmentStatus} </td>
                            </tr>
                        </tbody>
                        </React.Fragment>
                    ))
                    }
                    </table>
                }
                <div>
                    <GeoModal trigger={buttonPopup} setTrigger={setButtonPopup} id={idDevice}></GeoModal>
                </div>
            </ul>
    )
}
