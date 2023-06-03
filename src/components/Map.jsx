'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

function Map({ address }) {
  const position = [address.lat, address.lng];

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
      iconUrl: markerIcon.src,
      iconRetinaUrl: markerIcon2x.src,
      shadowUrl: markerShadow.src,
  })

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={position}
      >
        <Popup>{address.name}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
