
// import { Building } from "components/Models/submissions";
import { useState, useEffect } from "react";
// import { HostelService } from "components/Services/HostelService";

// function HostelLiist() {
//   // Define hostelData state using useState hook
//   const [hostelData, setHostelData] = useState<Building[]>([]);

//   useEffect(() => {
//   HostelService.getHostels()
//     .then((data) => {
//       console.log(data);
//       // Update hostelData state with fetched data
//       const mappedData = data.map((hostel) => ({
//         id: hostel.id,
//         name: hostel.name,
//         address: hostel.address,
//         picture: hostel.picture,
//         priceRange: hostel.priceRange,
//         reviews: hostel.reviews,
//         amenities: hostel.amenities || []
        
//       }));
//       setHostelData(mappedData);
//     })
//     .catch((error) => console.error("Error fetching Hostels:", error));
// }, []);

//   return (
//     <div>
//       {/* Render hostel names */}
//       {hostelData.map((hostel) => (
//         <div key={hostel.id}>
//           <p>The name of the hostel is {hostel.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HostelLiist;


