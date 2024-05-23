// RoomBox.jsx

import React from 'react';

const RoomBox = ({ roomNumber, capacity, slotsLeft }) => {
  return (
    <div className="room-box w-36 h-36  m-5 flex flex-col items-center justify-center ori-hostel-manager"
    style={{
  boxShadow: '0 4px 8px rgba(0, 90, 35, 1)' // Green shadow
      }}
    >
      <h1 className='text-center big-screen-labels mb-5'>{roomNumber}</h1>
      <p className='text-center'>Capacity: {capacity}</p>
      <p className='text-center'>Slots:  {slotsLeft}</p>
    </div>
  );
};

export default RoomBox;