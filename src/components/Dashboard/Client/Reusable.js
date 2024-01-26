

import React, { useState } from 'react';
import './client.css'
import { GoogleBox, InfoBox} from './Reusable2';
import { Link } from 'react-router-dom';


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
  
