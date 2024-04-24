import React from 'react';

const HostelComponent = ({ image, name, location, price, amenities }) => {
  return (
    <div className="flex items-center justify-center space-x-4 p-4 bg-white shadow-md rounded-lg">
      <img src={image} alt={name} className="w-100 h-100 object-cover rounded-md" />
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-500">{location}</p>
        <p className="text-gray-700">Price: ${price}/night</p>
        <ul className="mt-2">
          {amenities.map((amenity, index) => (
            <li key={index} className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HostelList = () => {
  const hostels = [
    {
      id: 1,
      image: 'images/hostel4.jpeg',
      name: 'Hostel 1',
      location: 'Umat Campus',
      price: 20,
      amenities: ['Free Wi-Fi', 'Breakfast included', '24/7 Security']
    },
    {
      id: 2,
      image: 'images/hostel2.jpeg',
      name: 'Hostel 2',
      location: 'Umat Campus',
      price: 25,
      amenities: ['Free Parking', 'Swimming Pool', 'Gym']
    },
    {
      id: 2,
      image: 'images/hostel3.jpeg',
      name: 'Hostel 2',
      location: 'Umat Campus',
      price: 25,
      amenities: ['Free Parking', 'Swimming Pool', 'Gym']
    },
    {
      id: 2,
      image: 'images/hostel1.jpeg',
      name: 'Hostel 2',
      location: 'Umat Campus',
      price: 25,
      amenities: ['Free Parking', 'Swimming Pool', 'Gym']
    },
    // Add more hostel objects as needed
  ];

  return (
    <div className="grid grid-cols-1 w-[60%] p-8">
      {hostels.map(hostel => (
        <HostelComponent
          key={hostel.id}
          image={hostel.image}
          name={hostel.name}
          location={hostel.location}
          price={hostel.price}
          amenities={hostel.amenities}
        />
      ))}
    </div>
  );
};

export default HostelList;
