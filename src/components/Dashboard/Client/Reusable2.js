// OpenStreetMap.js

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './client.css'


const OpenStreetMap = ({ latitude, longitude, zoom }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      style={{ width: '100%', height: '100%'}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};


export const GoogleBox = () => {
    // Replace with your actual latitude, longitude, and zoom values
    const latitude = -1.9706;
    const longitude = 30.1044;
    const zoom = 12;
  
    return (
      <div className='googleBox'>
        <OpenStreetMap latitude={latitude} longitude={longitude} zoom={zoom} />
      </div>
    );
  };


  export const InfoBox = () =>{
    return(
      <div className='infoBox'>
        <h3>Services Screen</h3>
      </div>
    )
  }
