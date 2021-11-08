import L from 'leaflet';
import Icono from '../../img/icon.png'

export const Icon = L.icon({
  iconUrl: Icono,
  iconRetinaUrl: Icono,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [60, 60],
  className: "leaflet-venue-icon",
});