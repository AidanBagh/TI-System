

import React, { useState } from 'react';
import './client.css'
import { GoogleBox, InfoBox} from './Reusable2';

export const LocationSelect = ({ onSelect }) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div className="location-select-container">
      <label htmlFor="location" className="location-label">
        Select your location:
      </label>
      <select id="location" value={selectedLocation} onChange={handleLocationChange} className="location-dropdown">
        <option value="">Select an option</option>
        <option value="kigali">Kigali</option>
        <option value="outside">Outside Kigali</option>
        <option value="rentCar">Rent My Car</option>
      </select>
    </div>
  );
};

export const KigaliPage = () => {
  return (
    <div className='kigaliBox'>
      <div className='infoBox'>
        <InfoBox />
      </div>
      <div className='googleBox'>
        <GoogleBox />
      </div>
    </div>
  );
};


 export const OutsideKigaliPage = () => {
    return (
      <div className='kigaliBox'>
      <div className='infoBox'>
        <InfoBox />
      </div>
      <div className='googleBox'>
        <GoogleBox />
      </div>
    </div>
    );
  };


  export const RentMyCarPage = () => {
    return (
      <div className='kigaliBox'>
      <div className='infoBox'>
        <InfoBox />
      </div>
    </div>
    );
  };
  
