// Create a react-leaflet map container
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
//import "leaflet/dist/leaflet.css";

let southWest = L.latLng(19.415580, -128.807311);
let northEast = L.latLng(62.387941, -56.355762);
let bounds = L.latLngBounds(southWest, northEast);
export default function Map() {
    return (
        <MapContainer center={[39.14710270770074, -96.1962890625]}
        zoom={50}
        minZoom={0}
        maxZoom={14}
        wheelPxPerZoomLevel={120}
        maxBounds={bounds}
        style={{  'zIndex': 0 }}
        zoomControl={false}
        scrollWheelZoom={true}
        >
        <TileLayer
        url={`https://tile.amtrakle.com/13/2105/3038.png`}
      />
      <TileLayer
        url={`https://tile.amtrakle.com/{z}/{x}/{y}.png`}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
        </MapContainer>
    )
}