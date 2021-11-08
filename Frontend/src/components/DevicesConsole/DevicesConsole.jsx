import React from 'react'
import { Paginacion } from './Paginacion'
import { DevicesConsolePost } from './DevicesConsolePost'

const DevicesConsole = () => {
    
    const [device, setDevice] = React.useState([])

    const [error, setError] = React.useState(false)
    const [msgError, setMsgError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(7);
 
    React.useEffect(() => {
        document.title = 'Kraken - Dispositivos'
        obtenerDevicesDB()
    }, [])
 
    const obtenerDevicesDB = () => {
        setError(false)
        setLoading(true)

        const url = "https://mdmt.cablevision.com.ar/api/mdm/devices/search";
        var requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "aw-tenant-code": "######",
                "Authorization": "Basic #####"
            }
        }
        
        fetch(url, requestOptions)
            .then(res => res.json())
            .then(devices => {
                if (TypeError === 'ERR_FAILED') {
                    setMsgError('Dispositivos no encontrados')
                    throw new Error('Dispositivos no encontrados')
                }
                
                setDevice(devices.Devices)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setError(true)
                setDevice([])
            })
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentDevices = device.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber)
 
    if (error) return (
        <div className="alert alert-danger" role="alert">
            {msgError}
         </div>)
    
    return (
        
        <div>
            <h1>DISPOSITIVOS CONSOLA</h1>
            <DevicesConsolePost post={currentDevices} loading={loading} />
            <Paginacion postPerPage={postsPerPage} totalPosts={device.length} paginate={paginate}/>
        </div>
    )
}
        


export default DevicesConsole
