import React from 'react';

const HostelComponent = ({ image, name, location, price, amenities, reviews }) => {
  return (
    <div className=" ">
    <div className='flex items-center justify-center space-x-8 p-8 bg-color'>
      <img src={image} alt={name} className="w-96 h-64 object-cover rounded-sm" />
      <div className=' '>
        <h2 className="bottom-headings mb-2">{name}</h2>
        <p className="text-gray-500 login2 mb-2">{location}</p>
        <div className='flex mb-3'>
        <img src='images/star-icon.png' className='w-4 h-4 '></img>
        <img src='images/star-icon.png' className='w-4 h-4'></img>
        <img src='images/star-icon.png' className='w-4 h-4'></img>
        </div>
       <p className= "login2 mb-2">{reviews}</p>
        <p className="bottom-headings mb-2"> GH₵{price}</p>
        <div><button className='primary-color p-3 w-[60%] rounded-md text-color-white'>Book now</button></div>
        </div>
        <div className="thin-line-longer ml-10 mr-10"></div>
        <ul className="mt-2">
          {amenities.map((amenity, index) => (
            <li key={index} className="flex items-center space-x-1">
              <img src='images/car-icon.png'></img>
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
      location: 'Hostel Location',
      reviews: "4.8/5 Wonderful (500 reviews)",
      price: 20,
      amenities: ['Free Wi-Fi', 'Breakfast included', '24/7 Security']
    },
    {
      id: 2,
      image: 'images/hostel2.jpeg',
      name: 'Hostel 2',
      location: 'Umat Campus',
      reviews: "4.8/5 Wonderful (500 reviews)",
      price: 25,
      amenities: ['Free Parking', 'Swimming Pool', 'Gym']
    },
    {
      id: 2,
      image: 'images/hostel3.jpeg',
      name: 'Hostel 2',
      location: 'Umat Campus',
      reviews: "4.8/5 Wonderful (500 reviews)",
      price: 25,
      amenities: ['Free Parking', 'Swimming Pool', 'Gym']
    },
    {
      id: 2,
      image: 'images/hostel1.jpeg',
      name: 'Hostel 2',
      location: 'Umat Campus',
      reviews: "4.8/5 Wonderful (500 reviews)",
      price: 25,
      amenities: ['Free Parking', 'Swimming Pool', 'Gym']
    },
    {
      id: 2,
      image: 'images/hostel2.jpeg',
      name: 'Hostel 2',
      location: 'Umat Campus',
      reviews: "4.8/5 Wonderful (500 reviews)",
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
          reviews={hostel.reviews}
          price={hostel.price}
          amenities={hostel.amenities}
        />
      ))}
    </div>
  );
};

export default HostelList;
