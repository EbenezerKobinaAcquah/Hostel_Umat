import React, { useState, useEffect, useRef } from "react";
import { Button, Img, Line, Text } from "components";
import { useNavigate } from "react-router-dom";

function StudentProfile() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


 const navigate = useNavigate();
  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    // Redirect to logout page or perform any additional logout actions if needed
    navigate("/Login"); // Redirect example
  };

  var userDetailsString = localStorage.getItem("userData");
  var userDetails = JSON.parse(userDetailsString);
  
  return (
    <div className="example flex absolute top-0 right-0 justify-end bg-white-A700 font-poppins md:w-[100%] w-[80%] h-15 pb-[1%]">
      <div className="items-center md:mr-[10] cursor-pointer" onClick={toggleDropdown}>
        <Text className="mt-[20%] text-[15px] text-blue_gray-900" size="txtPoppinsBold25">
          {userDetails.firstName} {userDetails.lastName}
        </Text>
        <Text className="top-10 text-teal-900 text-l" size="txtPoppinsMedium20">
          Student
        </Text>
      </div>
      <div className="mt-4 mr-7 cursor-pointer" onClick={toggleDropdown}>
        <Img
          className="h-10 rounded-[50%] w-10"
          src="images/img_ellipse2711.png"
          alt="ellipse2711"
        />
      </div>
      {isDropdownVisible && (
        <div ref={dropdownRef} className="absolute above-all top-16 right-2 bg-slate-50 rounded-md shadow-md p-2">
          <ul className="text-gray-500">
            <li>
              <a href="#">User</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#" onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default StudentProfile;
