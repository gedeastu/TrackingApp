import React from 'react'
import { useEffect, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"; 
export default React.memo(Map); function Map() {
    useEffect(() => {
        console.log(import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY);
    },[])
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
        // googleMapsApiKey: 'AIzaSyDKVuV1wm-hXvTUxrK7Ca8nr5cb64C9t4g',
    });
    if (!isLoaded) return <div className='text-center'>Loading...</div>;
  return (
    <>
    <GoogleMap zoom={11} center={{ lat: 40.712776,lng: -74.005974, }} mapContainerClassName="map-container">
      <Marker position={{ lat: -8.342330, lng: 115.275017 }} />
    </GoogleMap>
    </>
  )
}
