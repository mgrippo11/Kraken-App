import React from 'react'

export const DevicesPost = ({post, loading}) => {
    
    if(loading) {
        return <h2>Loading...</h2>;
    }
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
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Línea</th>
                            </tr>
                        </thead>

                    {post.map(item => (
                        <React.Fragment key={item._id}>
                        <tbody>                            
                            <tr>
                                <td> {item.Imei} </td>
                                <td> {item.UserName} </td>
                                <td> {item.Marca} </td>
                                <td> {item.ModelIdName} </td>
                                <td> {item.PhoneNumber} </td>
                            </tr>
                        </tbody>
                        </React.Fragment>
                    ))
                    }
                    </table>
                }
            </ul>
    )
}
