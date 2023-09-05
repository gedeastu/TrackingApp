import React from 'react'
import { useEffect, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
export default function Map() {
    useEffect(() => {
        console.log(import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY);
      },[])
      const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
        // googleMapsApiKey: 'AIzaSyDKVuV1wm-hXvTUxrK7Ca8nr5cb64C9t4g',
      });
      if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
    <GoogleMap zoom={2} center={{ lat: 40.712776,lng: -74.005974, }} mapContainerClassName="map-container">
      <Marker position={{ lat: 40, lng: 0 }} />
    </GoogleMap>
    </>
  )
}
