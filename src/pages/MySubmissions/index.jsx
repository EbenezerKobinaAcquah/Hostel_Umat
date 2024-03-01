import React, { useState } from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import StudentProfile from "components/StudentProfile";
import SidebarOverlay from "components/SidebarOverlay";
import Footer from "components/Footer";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";


const FrameOnePage = () => {
  function handleNavigate() {
    const win = window.open("https://umat.edu.gh", "_blank");
    win.focus();
  }
  const navigate = useNavigate();
  const handleMySubmissionsClick = () => {
    // Navigate to the new page when the button is clicked
    navigate("/MySubmissions");
  };
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: row => row.age,
      sortable: true,
    }
  ];
  
  const data = [
      {
      id: 1,
      name: 'Beetlejuice',
      email: 'ebenezer@gmail.com',
      age: 23
    },
    {
      id: 2,
      name: 'Ghostbusters',
      email: 'eben@gmail.com',
      age: 24
    },
    {
      id: 3,
      name: 'Kobina',
      email: 'kobina@gmail.com',
      age: 24
    },
    {
      id: 4,
      name: 'Acquah',
      email: 'acquah@gamil.com',
      age: 24
    },
    {
      id: 1,
      name: 'Beetlejuice',
      email: 'ebenezer@gmail.com',
      age: 23
    },
    {
      id: 2,
      name: 'Ghostbusters',
      email: 'eben@gmail.com',
      age: 24
    },
    {
      id: 3,
      name: 'Kobina',
      email: 'kobina@gmail.com',
      age: 24
    },
    {
      id: 4,
      name: 'Acquah',
      email: 'acquah@gamil.com',
      age: 24
    },
    {
      id: 1,
      name: 'Beetlejuice',
      email: 'ebenezer@gmail.com',
      age: 23
    },
    {
      id: 2,
      name: 'Ghostbusters',
      email: 'eben@gmail.com',
      age: 24
    },
    {
      id: 3,
      name: 'Kobina',
      email: 'kobina@gmail.com',
      age: 24
    },
    {
      id: 4,
      name: 'Acquah',
      email: 'acquah@gamil.com',
      age: 24
    },
  ]
  const [records, setRecords] = useState(data);
function handleFilter(event){
  const newData = data.filter(row => {
    return row.name.toLowerCase().includes(event.target.value.toLowerCase())
  });
  setRecords(newData)
}
  return (
    
      <div className="">
      <div className="flex md:flex-col-3  h-[100%]  font-inika my-auto  w-full">
        <div className="md:relative md:col-span-1 ">
          <Sidebar1
            openNav={openNav}
            className="h-full bg-teal-900 flex justify-start left-[0] top-[0]"
          />
        </div>
        <div className="  md:col-span-2 relative bg-gray-100 items-center justify-start md:ml-[0] w-full">
        <div className="">
          <div className="md:mb-[7%]  mb-[17%]">
            <StudentProfile />
          </div>
          
          <div className="md:pt-[5%] md:mb-[5%] md:pl-[10%] md:pr-[10%]">
          <div className="bg-white-A700 shadow-md">
          <div  className="text-right mr-5 "><input type="text" className="mt-5" onChange={handleFilter} /></div>
         
          <DataTable
			columns={columns}
      
			data={records}
      selectableRows
      fixedHeader
      pagination

		/>
    
          </div>
</div>
          </div>
         
        </div>
      </div>
      <div className="">
      <Footer />
      </div>
      </div>
    
  );
};

export default FrameOnePage;

// import React, { useState } from "react";
// import Sidebar1 from "components/Sidebar1";

// function FrameOnePage() {
//   const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

//   const handleToggleSidebar = () => {
//     setSidebarCollapsed(!isSidebarCollapsed);
//   };

//   return (
//     <div className="flex flex-col-3 page-content bg-white-A700 font-inika mx-auto sm:pr-5 relative w-full" >
//       <div className="relative col-span-1" >

//         <Sidebar1
//           className="h-full bg-teal-900 flex justify-start overflow-auto left-[0] top-[0]"

//         />
//       </div>

//       <div
//         className={`main-content col-span-2 absolute mr-[5%] flex flex-col font-poppins gap-[29px] justify-start right-[2%] top-20 w-[73%] ${
//           isSidebarCollapsed ? "expanded-width" : ""
//         }`}
//       >
//         <h2>Testing</h2>
//       </div>
//     </div>
//   );
// }

// export default FrameOnePage;
