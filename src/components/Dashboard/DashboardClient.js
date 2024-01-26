// Dashboard.js

import React, { useState } from 'react';
import { LocationSelect, KigaliPage, OutsideKigaliPage, RentMyCarPage } from './Client/Reusable';

const DashboardClient = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleGoBack = () => {
    setSelectedLocation('');
  };

  return (
    <div>
      {/* Display the location select option only if a location is not selected */}
      {selectedLocation === '' ? (
        <LocationSelect onSelect={handleLocationSelect} />
      ) : (
        // Render the selected page along with a button to go back to location select
        <>
          {selectedLocation === 'kigali' ? (
            <>
              <KigaliPage />
              <button onClick={handleGoBack}>Go Back</button>
            </>
          ) : selectedLocation === 'outside' ? (
            <>
              <OutsideKigaliPage />
              <button onClick={handleGoBack}>Go Back</button>
            </>
          ) : selectedLocation === 'rentCar' ? (
            <>
              <RentMyCarPage />
              <button onClick={handleGoBack}>Go Back</button>
            </>
          ) : null}
        </>
      )}
    </div>
  );
};

export default DashboardClient;
