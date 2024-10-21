import React from 'react'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
const containerStyle ={
    width: '100%',
    height: '400px',
};
const center ={
    lat: 40.73061, 
    lng: -73.935242, 
};
const GoogleMapSheet = () => {
  return (
    <LoadScript googleMapsApiKey= "AIzaSyC7iPmHV_h-I3PUKo3nXvXsU8lP4ezM9W0">
        <GoogleMap mapContainerStyle={containerStyle}
        center={center}
        zoom={10}>
            <Marker position={center}/>
        </GoogleMap>
        </LoadScript>
  );
};

export default GoogleMapSheet
