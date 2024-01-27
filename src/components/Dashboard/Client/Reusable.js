//Reusable.js

import React, { useState } from 'react';
import './client.css'
import { BusSchedule,  DriverListComponent,  InfoBoxKigali, SchedulesComponent, SearchBar, GoogleBox, UserProfileUI, CarRental} from './Reusable2';
import { Link } from 'react-router-dom';

const availableDrivers = [
  { name: 'John Doe', destination: 'City Center', price: 25 },
  { name: 'Jane Smith', destination: 'Suburb Station', price: 30 },
  // Add more driver objects as needed
];


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
      <div className='outSideKigaliBox'>
        <div>
          <SearchBar />
          <SchedulesComponent/>
        </div>
        
    </div>
    );
  };

  const cars = [
    {
      model: 'Rolls Royce',
      color: 'Blue',
      year: 2022,
      pricePerDay: '50 000',
      image: 'cars/car1.jpeg',
    },
    {
      model: 'Aston Martin',
      color: 'White',
      year: 2021,
      pricePerDay: '60 000',
      image: 'cars/car2.jpg',
    },
    // Add more cars as needed
  ];


  export const RentMyCarPage = () => {
    return (
      <div>
      {cars.map((car, index) => (
        <CarRental key={index} car={car} />
      ))}
    </div>
      
    );
  };

export const UserProfile = () =>{
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'City, Country',
    avatar: 'cars/man.jpg', // Replace with the actual URL of the user's avatar
  };

  return (
    <div className='userProfileBox'>
      <UserProfileUI user={user}/>
    </div>
  )
}
  
