// Reusable2.js

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './client.css'
import { FaUser } from 'react-icons/fa';


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

  const ProfileBox = () => {
    // Placeholder data
    const profilePictureUrl = 'https://example.com/profile-picture.jpg'; // Replace with actual URL
    const name = 'John Doe';
    const price = '$50';
    const address = '123 Main St, City';
  
    return (
      <div className="profile-box">
        <div className="profile-picture">
          <FaUser/>
        </div>
        <div className="profile-info">
          <div className="name">{name}</div>
          <div className="address">{address}</div>
        </div>
        <div className="price">{price}</div>
      </div>
    );
  };


  export const InfoBoxKigali = () =>{
    return(
      <div className='infoBox'>
        <h3>Kigali Services Screen</h3>
        <div className='profilesBox'>
          <ProfileBox/>
          <ProfileBox/>
          <ProfileBox/>
        </div>
      </div>
    )
  }
