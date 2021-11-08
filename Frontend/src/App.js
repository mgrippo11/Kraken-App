import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Devices from './components/Devices/Devices';
import DevicesConsole from './components/DevicesConsole/DevicesConsole';
import Geolocalizacion from './components/Geolocalizacion/Geolocalizacion';
import Home from './components/Home';
import Signin from './components/Signin';
import './App.css'
import GeoModal from './components/Geolocalizacion/GeoModal';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/signin" className="btn btn-dark">
            Iniciar Sesion
          </Link>
          <Link to="/devices" className="btn btn-dark">
            Dispositivos
          </Link>
          <Link to="/devicesConsole" className="btn btn-dark">
            Dispositivos Consola
          </Link>
        </div>
        <hr />
        
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signin" exact>
            <Signin />
          </Route>
          <Route path="/devices">
            <Devices />  
          </Route> 
          <Route path="/devicesConsole">
            <DevicesConsole />  
          </Route>
          <Route path="/Geolocalizacion">
            <Geolocalizacion />  
          </Route>
          <Route path="/GeoModal">
            <GeoModal />  
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
