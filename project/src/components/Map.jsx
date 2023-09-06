import React from 'react'
import './Map.css'
import MapStyle from './MapStyle';
import { useEffect} from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"; 
function Map() {

  // Get API keys include Loading and Error Action Description
  const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
      libraries: ['places']
  });

  // Action of isLoaded and loadError
  if (!isLoaded) return <div className='w-screen h-[55vh] flex justify-center items-center text-center'>
    <h1 className='font-bold'>Loading...</h1>
  </div>;
  if (loadError) return <div className='w-screen h-[55vh] flex justify-center items-center text-center'>
  <h1 className='font-bold'>I'am Sorry, Something Went Wrong!</h1>
  </div>

  // Utilities Variable of Google Map API
  const center = { lat: -8.342330, lng: 115.275017 };
  const position = { lat: -8.342330, lng: 115.275017 };
  const mapContainerStyle = {
    width: '100vw',
    height: '55vh',
  }
  const optionsMap = {
    styles: MapStyle,
    // disableDefaultUI: true
  }
  const markerStyle = {
    position: 'absolute',
    top: '10px',  
    right: '10px',
  };
  
  return (
    <>
      <GoogleMap 
      // onClick={(event)=>{
      //   console.log(event);
      // }} 
      zoom={18} 
      center={position} 
      mapContainerStyle={mapContainerStyle} 
      options={optionsMap} 
      mapContainerClassName="map-container"
      className="flex items-center relative justify-center">
        {/* <Marker position={position} style={markerStyle} icon={{
          url: '/marker.png',
          scaledSize: new window.google.maps.Size(60,80),
          origin: new window.google.maps.Point(0,0),
          anchor: new window.google.maps.Point(15,15)
        }}/> */}
        <div className='relative flex justify-center items-center h-full'>
        <img 
        src="marker.png" 
        alt="" 
        style={{
          background: 'url("/marker.png") center center / cover no-repeat',
        }}
        className='absolute w-[40px] h-[60px]'
        />
        </div>
      </GoogleMap>
      <h1 className='font-semibold text-2xl'>Location : </h1>
    </>
  )
}
export default React.memo(Map)
