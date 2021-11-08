//import AllDevice from '../model/AllDevice'
//import { validationResult } from 'express-validator';

const obtenerAllDevice =  (req,res) => {

fetch("https://mdmapp.cablevision.com.ar/api/mdm/devices/search?pagesize=12000", {
  method: 'GET',
  headers: {
  'Content-Type': 'application/json',
  'aw-tenant-code': 'FR1+oZEeKSKIHkRi3DdlWSSX18YD6n/lh1fZCR2wunY=',
  'Authorization': 'Basic QVBJX1Jlc3Q6QEFwaTIwMjAh'
  },
  redirect: 'follow'
})

return res.json
}

module.exports = {
  obtenerAllDevice
}