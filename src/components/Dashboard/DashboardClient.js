// Dashboard.js
import './DashClient.css'
import React, { useState } from 'react';
import { KigaliPage, OutsideKigaliPage, RentMyCarPage } from './Client/Reusable';
import { Link } from 'react-router-dom';

const DashboardClient = () => {
  const [selectedOption, setSelectedOption] = useState('Kigali');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div className='ver-navbar'>
          <p className={selectedOption === 'Kigali' ? 'selected' : ''} onClick={() => handleOptionClick('Kigali')}>Kigali</p>
          <p className={selectedOption === 'OutsideKigali' ? 'selected' : ''} onClick={() => handleOptionClick('OutsideKigali')}>Outside Kigali</p>
          <p className={selectedOption === 'RentMyCar' ? 'selected' : ''} onClick={() => handleOptionClick('RentMyCar')}>Rent My Car</p>
          <p><Link to="/login">Log Out</Link></p>
        </div>
        <div style={{ flex: 1, padding: '10px' }}>
          {selectedOption === 'Kigali' && <KigaliPage />}
          {selectedOption === 'OutsideKigali' && <OutsideKigaliPage />}
          {selectedOption === 'RentMyCar' && <RentMyCarPage />}
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
