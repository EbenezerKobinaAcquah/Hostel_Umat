import React from 'react';

const HostelComponent = ({ image, name, location, price, amenities }) => {
  return (
    <div className=" ">
    <div className='flex  space-x-8 p-8 bg-color'>
      <img src={image} alt={name} className="w-96 h-64 object-cover rounded-sm" />
      <div className=' '>
        <h2 className="bottom-headings mb-2">{name}</h2>
        <p className="text-gray-500 login2 mb-2">{location}</p>
        <p className="bottom-headings"> GH₵{price}</p>
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
    </div>
  );
};

const HostelList = () => {
  const hostels = [
    {
      id: 1,
      image: 'images/hostel4.jpeg',
      name: 'Hostel 1',
      location: 'Hostel Location',
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
