import { useNavigate } from "react-router-dom";
import { Building } from "components/Models/submissions";
import { useState, useEffect } from "react";
import { HostelService } from "components/Services/HostelService";

interface HostelComponentProps {
  image: string;
  name: string;
  location: string;
  price: number;
  reviews: string;
  amenities?: string[];
}

const HostelComponent: React.FC<HostelComponentProps> = ({
  image,
  name,
  location,
  price,
  amenities,
  reviews,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleHostelPagesClick = () => {
    // Navigate to the new page when the button is clicked
    navigate("/HostelPages");
  };

  return (
    <div className="w-full hostel-list">
      <div className="md:flex items-center justify-center md:space-x-10 space-y-10  md:p-10 bg-color w-[100%] ">
        <img
          src={image}
          alt={name}
          className=" hostel-img object-cover rounded-sm"
        />
        <div className=" ">
          <h2 className="bottom-headings mb-2">{name}</h2>
          <p className="text-gray-500 login2 mb-2">{location}</p>
          <div className="flex mb-3">
            <img src="images/star-icon.png" className="w-4 h-4 "></img>
            <img src="images/star-icon.png" className="w-4 h-4"></img>
            <img src="images/star-icon.png" className="w-4 h-4"></img>
          </div>
          <p className="login2 mb-2">{reviews}</p>
          <p className="bottom-headings mb-2"> ₵{price}</p>
          <button
            className="green-color p-4 w-[60%] rounded-md text-color-white book-now"
            onClick={handleHostelPagesClick}
          >
            Book now
          </button>
        </div>
        <div className="hidden md:block thin-line-longer "></div>
        <ul className="mt-2 ">
          {amenities?.map((amenity, index) => (
            <li key={index} className="flex items-center space-x-4  price">
              <img src="images/wifi-icon2.png" className="w-4 h-4 "></img>
              <span className="mt-1 mb-1 w-full">{amenity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const HostelList: React.FC = () => {
  const [hostelData, setHostelData] = useState<Building[]>([]);

  useEffect(() => {
    HostelService.getHostels()
      .then((data) => {
        console.log(data);
        // Update hostelData state with fetched data
        const mappedData = data.map((hostel) => ({
          id: hostel.id,
          name: hostel.name,
          address: hostel.address,
          picture: hostel.picture,
          priceRange: hostel.priceRange,
          reviews: hostel.reviews,
          amenities: hostel.amenities || [],
        }));
        setHostelData(mappedData);
      })
      .catch((error) => console.error("Error fetching Hostels:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 w-[100%] md:pl-8 pl-0">
      {hostelData.map((hostel) => (
        <HostelComponent
          key={hostel.id}
          image={hostel.picture} // Assuming picture is the image URL
          name={hostel.name}
          location={hostel.address} // Assuming address is the location
          reviews={hostel.reviews}
          price={parseInt(hostel.priceRange)} // Assuming priceRange is a string
          amenities={hostel.amenities}
        />
      ))}
    </div>
  );
};

export default HostelList;
export { HostelComponent };
