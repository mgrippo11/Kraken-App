import React from 'react'
import logo from '../img/Kraken_LogoV2.png'

const Signin = () => {

    const [ user, setUser ] = React.useState('')
    const [ pass, setPass ] = React.useState('')
    
    const logIn = (e) => {
        e.preventDefault()
        if(!user.trim()){
            console.log('usuario vacio...')
            return
        }
        if(!pass.trim()){
            console.log('contraseña vacia...')
            return
        }
        //console.log('procesando...' + user + pass)

        var data = {
            "name": user,
            "password": pass
        };

        var requestOptions = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        };
        console.log(data)
        fetch('http://localhost:3001/users/signin', requestOptions)


    }
//<img src="" className="rounded-circle mx-auto d-block m-4 logoS" alt="Logo" />
    return (
        <div>
            <div className="row">
                <div className="col-md-4 mx-auto">
                    <div className="card mt-4 text-center">
                        <div className="card-header text-dark">
                            <h1>Login</h1>
                        </div>
                        <img src={logo} className="App-logo m-4" alt="logoS" />
                        <div className="card-body">
                            <form onSubmit={ logIn }>
                                <input type="text" placeholder="Usuario" className="form-control" onChange={ (e) => setUser(e.target.value) }/> <br/><br/>
                                <input type="password" placeholder="Contraseña" className="form-control" onChange={ (e) => setPass(e.target.value) }/> <br/><br/>
                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
