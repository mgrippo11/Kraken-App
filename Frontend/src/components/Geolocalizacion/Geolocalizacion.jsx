import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {Icon} from './Icon'
//import { useLocation, Link } from "react-router-dom";

const Geolocalizacion = (props) => {
    
    const [device, setDevice] = React.useState([])

    const [error, setError] = React.useState(false)
    const [msgError, setMsgError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    //const location = useLocation()
    //const idDevice = location.id

    console.log(props.id)

    React.useEffect(() => {
        document.title = 'Kraken - Geolocalizacion'
        obtenerGeo()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
 
    const obtenerGeo = () => {
        setError(false)
        setLoading(true)

        const url = `https://mdmt.cablevision.com.ar/api/mdm/devices/${props.id}/gps`;
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "aw-tenant-code": "#####",
                "Authorization": "Basic #####"
            }
        }
        //console.log(url)
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(devices => {
                if (devices.status <= 400) {
                    setMsgError("Dispositivo no encontrado")
                    throw new Error('Dispositivo no encontrado')
                }
                
                setDevice(devices)
                setLoading(false)
            })
            .catch(err => {
                setMsgError("No se selecciono ningun dispositivo")
                console.error(err)
                setError(true)
                setDevice([])
            })
    }
    
 
    if (error) return (
        <div>
            {/*<Link to="/devicesConsole" className="fas fa-undo btn btn-info">
                Vovler
            </Link> */}
        <div className="alert alert-danger" role="alert">
            {msgError}
        </div></div>)
    if(loading) {
        return (<div className="spinner-border text-dark" role="status">
                    <h2 className="sr-only">Loading...</h2>
                </div>)
    }
    
    return (
        <div>
           {/* <Link to="/devicesConsole" className="fas fa-undo btn btn-info">
                Vovler
            </Link> */}
            <h1>GEOLOCALIZACION DISPOSITIVO</h1>
                    {device.length === 0
                    ?
                    <li>No se encontro el dispositivo.</li>
                    :
                    <div>{device.map(item => (
                        <React.Fragment key={item.DeviceId.Value}>
                            <Map center={{lat: item.Latitude, lng: item.Longitude}} zoom={12}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={{lat: item.Latitude, lng: item.Longitude}} icon={Icon}>
                                <Popup>
                                    Dispositivo: {item.DeviceId.Value} |
                                    Latitud: {item.Latitude} |
                                    Longitud: {item.Longitude} |
                                    Fecha y Hora: {item.SampleTime}
                                </Popup>
                            </Marker>
                            </Map>
                        </React.Fragment>
                    ))
                    }</div>
                    }
        </div>
        
    )
}
        
export default Geolocalizacion
