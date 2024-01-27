// Reusable2.js

import React ,{useState}from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './client.css'
import { FaUser } from 'react-icons/fa';
import Modal from 'react-modal';

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
    const price = 'RWF50';
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
export const BusSchedule = () => {
  const [selectedBus, setSelectedBus] = useState(null);

  const handleBusClick = (bus) => {
    setSelectedBus(bus);
  };

  const closeModal = () => {
    setSelectedBus(null);
  };

  return (
    <div className="bus-schedule">
      <div className="schedule-header">
        <div className="time">Time</div>
        <div className="destination">Destination</div>
        <div className="platform">Platform</div>
        <div className="status">Status</div>
      </div>
      <div className="schedule-row" onClick={() => handleBusClick('09:00 AM City Center A1 On Time')}>
        <div className="time">09:00 AM</div>
        <div className="destination">City Center</div>
        <div className="platform">A1</div>
        <div className="status">On Time</div>
      </div>
      <div className="schedule-row" onClick={() => handleBusClick('11:30 AM Suburb Station B2 Delayed')}>
        <div className="time">11:30 AM</div>
        <div className="destination">Suburb Station</div>
        <div className="platform">B2</div>
        <div className="status">Delayed</div>
      </div>
      {/* Add more schedule rows as needed */}

      {/* Modal for displaying full details */}
      {selectedBus && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <div className="modal-content">
              <div className="full-details">{selectedBus}</div>
              <button className="close-btn" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export const SchedulesComponent = () => {
  // Sample data for public transport schedule
  const publicTransportSchedule = [
    { time: '09:00 AM', destination: 'City Center', transport: 'Bus', status: 'On Time', price: 10 },
    { time: '10:30 AM', destination: 'Suburb Station', transport: 'Train', status: 'Delayed', price: 15 },
    { time: '09:00 AM', destination: 'City Center', transport: 'Bus', status: 'On Time', price: 10 },
    { time: '10:30 AM', destination: 'Suburb Station', transport: 'Train', status: 'Delayed', price: 15 },
    { time: '09:00 AM', destination: 'City Center', transport: 'Bus', status: 'On Time', price: 10 },
    { time: '10:30 AM', destination: 'Suburb Station', transport: 'Train', status: 'Delayed', price: 15 },
    // Add more public transport schedules as needed
  ];

  // Sample data for private cars schedule
  const privateCarsSchedule = [
    { time: '09:15 AM', destination: 'Airport', platform: 'Platform 1', status: 'On Time', price: 25 },
    { time: '11:00 AM', destination: 'Shopping Mall', platform: 'Platform 3', status: 'Scheduled', price: 20 },
    { time: '09:15 AM', destination: 'Airport', platform: 'Platform 1', status: 'On Time', price: 25 },
    { time: '11:00 AM', destination: 'Shopping Mall', platform: 'Platform 3', status: 'Scheduled', price: 20 },
    { time: '09:15 AM', destination: 'Airport', platform: 'Platform 1', status: 'On Time', price: 25 },
    { time: '11:00 AM', destination: 'Shopping Mall', platform: 'Platform 3', status: 'Scheduled', price: 20 },
    // Add more private cars schedules as needed
  ];

  // State for modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  // Function to open modal and set selected schedule
  const openModal = (schedule) => {
    setModalIsOpen(true);
    setSelectedSchedule(schedule);
  };

  // Function to close modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedSchedule(null);
  };

  // Function to handle booking
  const handleBooking = () => {
    // Add booking logic here
    alert(`Booking confirmed for ${selectedSchedule.destination} at ${selectedSchedule.time}`);
    closeModal();
  };

  return (
    <div className="schedules-container">
      <div className="schedule-column">
        <h2>Public Transport Schedule</h2>
        <ul>
          {publicTransportSchedule.map((schedule, index) => (
            <li key={index} className="schedule-item" onClick={() => openModal(schedule)}>
              <div className="schedule-info">
                <div className="schedule-time">{schedule.time}</div>
                <div className="schedule-destination">{schedule.destination}</div>
              </div>
              <div className="schedule-details">
                <div className="schedule-transport">{schedule.transport}</div>
                <div className={`schedule-status ${schedule.status.toLowerCase()}`}>{schedule.status}</div>
                {schedule.price && <div className="schedule-price">RWF{schedule.price}</div>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="schedule-column">
        <h2>Private Cars Schedule</h2>
        <ul>
          {privateCarsSchedule.map((schedule, index) => (
            <li key={index} className="schedule-item" onClick={() => openModal(schedule)}>
              <div className="schedule-info">
                <div className="schedule-time">{schedule.time}</div>
                <div className="schedule-destination">{schedule.destination}</div>
              </div>
              <div className="schedule-details">
                <div className="schedule-platform">{schedule.platform}</div>
                <div className={`schedule-status ${schedule.status.toLowerCase()}`}>{schedule.status}</div>
                {schedule.price && <div className="schedule-price">RWF{schedule.price}</div>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for Schedule Details and Booking */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Schedule Details Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {selectedSchedule && (
          <div>
            <h2>Schedule Details</h2>
            <p>Time: {selectedSchedule.time}</p>
            <p>Destination: {selectedSchedule.destination}</p>
            {selectedSchedule.transport && <p>Transport: {selectedSchedule.transport}</p>}
            {selectedSchedule.platform && <p>Platform: {selectedSchedule.platform}</p>}
            {selectedSchedule.price && <p>Price: ${selectedSchedule.price}</p>}
            {/* Add booking button */}
            <button onClick={handleBooking}>Book Now</button>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};


export const UserProfileUI = ({ user }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleVisibility = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="ui-user-profile">
      <div className="ui-profile-header">
        <img src={user.avatar} alt="User Avatar" className="ui-avatar" />
        <div className="ui-user-info">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location}</p>
        </div>
      </div>

      <div className="ui-profile-section">
        <div
          className={`ui-option ${activeSection === 'transactions' && 'active'}`}
          onClick={() => toggleVisibility('transactions')}
        >
          <h3>Transactions</h3>
          {activeSection === 'transactions' && (
            <ul className="ui-transaction-list">
              <li>Transaction 1: RWF50.00</li>
              <li>Transaction 2: RWF30.00</li>
            </ul>
          )}
        </div>
      </div>

      <div className="ui-profile-section">
        <div
          className={`ui-option ${activeSection === 'bookedServices' && 'active'}`}
          onClick={() => toggleVisibility('bookedServices')}
        >
          <h3>Booked Services</h3>
          {activeSection === 'bookedServices' && (
            <ul className="ui-booked-services-list">
              <li>Destination 1</li>
              <li>Destination 2</li>
            </ul>
          )}
        </div>
      </div>

      <div className="ui-profile-section">
        <div
          className={`ui-option ${activeSection === 'paymentMethods' && 'active'}`}
          onClick={() => toggleVisibility('paymentMethods')}
        >
          <h3>Payment Methods</h3>
          {activeSection === 'paymentMethods' && (
            <ul className="ui-payment-methods-list">
              <li>Visa ending in ****1234</li>
              <li>MasterCard ending in ****5678</li>
            </ul>
          )}
        </div>
      </div>

      <div className="ui-profile-section">
        <div
          className={`ui-option ${activeSection === 'accountStatement' && 'active'}`}
          onClick={() => toggleVisibility('accountStatement')}
        >
          <h3>Account Statement</h3>
          {activeSection === 'accountStatement' && (
            <div className="ui-account-statement">
              <p>Balance: RWF500.00</p>
            </div>
          )}
        </div>
      </div>

      <div className="ui-profile-section">
        <div
          className={`ui-option ${activeSection === 'settings' && 'active'}`}
          onClick={() => toggleVisibility('settings')}
        >
          <h3>Settings</h3>
          {activeSection === 'settings' && (
            <div className="ui-settings">
              <p>Language: English</p>
              <p>Notification Preferences: Email</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export const CarRental = ({ car }) => {
  const [showRentOptions, setShowRentOptions] = useState(false);

  const handleRentNowClick = () => {
    setShowRentOptions(true);
  };

  return (
    <div className="cr-container">
      <div className="cr-image">
        <img src={car.image} alt="Car" />
      </div>
      <div className="cr-details">
        <h2>{car.model}</h2>
        <p>Color: {car.color}</p>
        <p>Year: {car.year}</p>
        <p>Price per Day : Rwf{car.pricePerDay}</p>
        <button onClick={handleRentNowClick}>Rent Now</button>
        {showRentOptions && (
          <div className="cr-options">
            {/* Renting options (e.g., pick date, etc.) go here */}
            <label>Pick-up Date :</label>
            <input type="date" />
            {/* Add more options as needed */}
            <button>Confirm Rental</button>
          </div>
        )}
      </div>
    </div>
  );
};
