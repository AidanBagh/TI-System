//Reusable.js

import React, { useState } from 'react';
import './client.css'
import { GoogleBox,  InfoBoxKigali} from './Reusable2';
import { Link } from 'react-router-dom';


export const KigaliPage = () => {
  return (
    <div className='kigaliBox'>
      <div className='infoBox'>
      <InfoBoxKigali />
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
        
      </div>
    </div>
    );
  };
  
