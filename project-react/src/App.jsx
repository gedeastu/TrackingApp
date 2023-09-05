import './App.css'
import React from 'react';
import Map from './components/Map';
import {useLoadScript, GoogleMap, Marker} from "@react-google-maps/api";
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'
// import "leaflet/dist/leaflet.css"
function App() {
  return (
    <>
    <div>Map</div>
    <Map />
    </>
  )
}

export default App
