import React from 'react'
import { Paginacion } from './Paginacion'
import { DevicesPost } from './DevicesPost'

const Devices = () => {
    
    const [device, setDevice] = React.useState([])

    const [error, setError] = React.useState(false)
    const [msgError, setMsgError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(5);
 
    React.useEffect(() => {
        document.title = 'Kraken - Dispositivos'
        obtenerDevicesDB()
    }, [])
 
    const obtenerDevicesDB = () => {
        setError(false)
        setLoading(true)
        
        fetch('http://localhost:8000/api/Dispositivo')
            .then(res => res.json())
            .then(devices => {
                if (devices.status >= 400) {
                    setMsgError(devices.mensaje)
                    throw new Error(devices.mensaje)
                }
                
                setDevice(devices.data)
            })
            .catch(err => {
                console.error(err)
                setError(true)
                setDevice([])
            })
            
        setLoading(false)
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentDevices = device.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber)
 
    if (error) return (<h2 className="text-danger">{msgError}</h2>)
 
    return (
        <div>
            <h1>DISPOSITIVOS</h1>
            <DevicesPost post={currentDevices} loading={loading} />
            <Paginacion postPerPage={postsPerPage} totalPosts={device.length} paginate={paginate}/>
        </div>
    )
}



export default Devices
