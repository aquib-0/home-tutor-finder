import React from 'react'
import {useState, useCallback} from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    width: "100%",
    height: "900px",
};

const defaultCenter = {
    lat: 20.5937, // Default: India
    lng: 78.9629,
};

const LocationMap = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    });
    const [userLocation, setUserLocation] = useState(null);

    const getLocation = useCallback(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position)=>{
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            }, (err)=>{
                console.log("Geolocation error:", err);
            });
        } else{
            alert("Geolocation not supported by this browser.");
        }
    }, []);
    if(!isLoaded) return <div>Loading maps...</div>;
  return (
    <div className='w-full h-auto flex flex-col items-center gap-y-3'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={userLocation || defaultCenter}
        zoom={userLocation ? 15 : 4}
      >
        {userLocation && <Marker position={userLocation} />}
      </GoogleMap>
      <div className='w-full h-auto flex justify-center gap-x-8'>
        <button onClick={getLocation} className="px-4 py-2 text-lg rounded border border-black hover:cursor-pointer">
          Locate Me
        </button>
        <button className='px-4 py-2 text-sm rounded border border-black hover:cursor-pointer'>
          Set as default location
        </button>
      </div>
    </div>
  )
}

export default LocationMap
