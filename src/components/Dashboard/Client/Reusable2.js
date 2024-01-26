// OpenStreetMap.js

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OpenStreetMap = ({ latitude, longitude, zoom }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      style={{ width: '100%', height: '400px' }}
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
      <div>
        <h1>TI System</h1>
        <OpenStreetMap latitude={latitude} longitude={longitude} zoom={zoom} />
      </div>
    );
  };


