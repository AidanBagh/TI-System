// DashboardClient.js
import './DashClient.css'
import React, { useState } from 'react';
import { KigaliPage, OutsideKigaliPage, RentMyCarPage, UserProfile } from './Client/Reusable';
import { Link } from 'react-router-dom';
import { FaSignOutAlt, FaUserAlt , FaCarAlt, FaBusAlt, FaBuilding} from 'react-icons/fa';

const DashboardClient = () => {
  const [selectedOption, setSelectedOption] = useState('Kigali');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div style={{ display: 'flex', height: '100vh' }} className='dashclient'>
        <div className='ver-navbar'>
          <p className={selectedOption === 'UserProfile' ? 'selected' : ''} onClick={() => handleOptionClick('UserProfile')}><FaUserAlt/></p>
          <p className={selectedOption === 'Kigali' ? 'selected' : ''} onClick={() => handleOptionClick('Kigali')}><FaBuilding/></p>
          <p className={selectedOption === 'OutsideKigali' ? 'selected' : ''} onClick={() => handleOptionClick('OutsideKigali')}><FaBusAlt/></p>
          <p className={selectedOption === 'RentMyCar' ? 'selected' : ''} onClick={() => handleOptionClick('RentMyCar')}><FaCarAlt/></p>
          <p><Link to="/login"><FaSignOutAlt/></Link></p>
        </div>
        <div style={{ flex: 1, padding: '10px' }}>
          {selectedOption === 'UserProfile' && <UserProfile />}
          {selectedOption === 'Kigali' && <KigaliPage />}
          {selectedOption === 'OutsideKigali' && <OutsideKigaliPage />}
          {selectedOption === 'RentMyCar' && <RentMyCarPage />}
        </div>
      </div>
    </div>
  );
};

export default DashboardClient;
