import React, { useState } from "react";

function MainDashboard() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(null); // Track which menu is open

  const openMenu = (index) => {
    setIsMenuOpen(index); // Open the menu
  };

  const closeMenu = () => {
    setIsMenuOpen(null); // Close the menu
  };

  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputIndex) => {
    setFocusedInput(inputIndex);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="top-container">
      <div className="login flex p-2 md:justify-end justify-center ">
        <div className="pr-5 pt-2 pb-2">
          <a href="https://www.google.com">
            <p>Login</p>
          </a>
        </div>
        <div className="pr-5 pt-2 pb-2">
          <a href="https://www.google.com">
            <p>Register</p>
          </a>
        </div>
        <div className="pr-5 pt-2 pb-2">|</div>
        <div className="flex md:pr-10 pt-2 pb-2 " onClick={toggleDropdown}>
          <div className="flex">
            <img src="images/moon.png" className="h-4 pr-5 cursor-pointer" />
            <p className="pr-5 cursor-pointer">Day</p>

            {dropdownVisible && (
              <div className="absolute md:right-0 right-[30%] mt-6 bg-white border border-gray-300 rounded-md shadow-lg">
                <p
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => console.log("Day selected")}
                >
                  Day
                </p>
                <p
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => console.log("Night selected")}
                >
                  Night
                </p>
              </div>
            )}
          </div>

          <img
            src="images/down-arrow.png"
            className="h-4 pr-2 cursor-pointer"
          ></img>
        </div>
      </div>
      <div className="flex justify-between md:justify-around m-7">
      
        <div>
          <img
            src="images/Bootstrap_logo.svg.png"
            className="md:w-20 md:h-16 w-8 h-8"
          ></img>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          {/* Icon for mobile menu */}
          <img
            src="images/menu-icon.png"
            className="h-6 w-6 mr-4"
            alt="Menu Icon"
          />
          {isMobileMenuOpen && (
            <div className="absolute top-18 right-0  bg-gray-50 mt-1 shadow-md w-30 mr-4">
              {/* Mobile menu dropdown */}
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Item 3
              </a>
            </div>
          )}
        </div>
        <div className="hidden md:flex items-center link-labels">
          <div className="flex items-center link-labels relative">
            <div className="flex items-center link-labels">
              {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="relative">
                  <div
                    className="cursor-pointer flex"
                    onMouseEnter={() => openMenu(index)} // Open the menu on hover
                  >
                    <p className="pr-1">Menu {index + 1}</p>
                    <img
                      src="images/down-arrow.png"
                      className="h-4 mr-10"
                      alt="Dropdown Arrow"
                    />
                  </div>
                  {/* Dropdown menu */}
                  {isMenuOpen === index && (
                    <div
                      className="dropdown-menu absolute top-[100%] z-50"
                      onMouseLeave={closeMenu}
                    >
                      {/* Dropdown content */}
                      <div className="dropdown-content bg-gray-50 border border-gray-300 rounded-md shadow-lg py-2 w-60">
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={closeMenu}
                        >
                          Item 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={closeMenu}
                        >
                          Item 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                          onClick={closeMenu}
                        >
                          Item 3
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:flex">
          <input
            type="text"
            name="Search"
            placeholder={focusedInput === 5 ? "" : "Search..."}
            className=" rounded-full search-box h-14 w-80"
            onFocus={() => handleFocus(5)}
            onBlur={handleBlur}
          ></input>
          <div className="primary-color absolute top-[10%] right-[5%] w-16 h-16 rounded-full flex justify-center items-center cursor-pointer">
            <img src="images/search-icon1.png" className=""></img>
          </div>
        </div>
       
      </div>

      <div className="relative md:h-96 bg-image pt-10 md:pt-20 pb-10 md:0">
        <div className="">
          <div className="">
            <h2 className="md:pb-10 pb-4 md:text-5xl header text-2xl font-bold">
              Get your Hostels the easy way
            </h2>
            <p className="align pl-8 pr-8 ">
              If you use any of our services, you won't bother going anywhere
              else
            </p>
          </div>
        </div>
        <div className="relative w-[100%] mt-12 h-full big-searchBox pb-10">
          <input
            type="text"
            className="w-[80%] md:h-20  h-80 px-4  md:rounded-full rounded-sm border border-gray-300 focus:outline-none focus:border-blue-500 center"
            placeholder=""
          ></input>
          <div className="primary-color absolute md:top-[55%] md:right-[10%] md:w-16 md:h-20 w-[80%] ml-[10%] md:ml-0 h-8 md:rounded-full flex justify-center items-center cursor-pointer">
            <img src="images/search-icon1.png" className=""></img>
          </div>

          <div>
            <div className="mb-10 md:mb-0">
              <div className="absolute md:top-[5%] md:left-[11%] top-[5%] left-[12%] rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src="images/search-icon2.png"
                  className="w-5 h-5"
                  alt="Search Icon"
                ></img>
                <div className="right-start">
                  <p className="p-1 black-color1">Location</p>
                  <input
                    placeholder={
                      focusedInput === 1 ? "" : "Browse Hostel locations"
                    }
                    className="login2 p-1"
                    onFocus={() => handleFocus(1)}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="hidden md:block thin-line ml-10 mr-10"></div>
              </div>

              <div className="absolute  md:top-[5%] md:left-[31%] top-[25%] left-[12%] rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src="images/search-icon2.png"
                  className="w-5 h-5"
                  alt="Search Icon"
                ></img>
                <div className="right-start">
                  <p className="p-1 black-color1">Location</p>
                  <input
                    placeholder={
                      focusedInput === 2 ? "" : "Browse Hostel locations"
                    }
                    className="login2 p-1"
                    onFocus={() => handleFocus(2)}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="hidden md:block thin-line ml-10 mr-10"></div>
              </div>

              <div className="absolute  md:top-[5%] md:left-[51%] top-[45%] left-[12%] rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src="images/search-icon2.png"
                  className="w-5 h-5"
                  alt="Search Icon"
                ></img>
                <div className="right-start">
                  <p className="p-1 black-color1">Location</p>
                  <input
                    placeholder={
                      focusedInput === 3 ? "" : "Browse Hostel locations"
                    }
                    className="login2 p-1"
                    onFocus={() => handleFocus(3)}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="hidden md:block thin-line ml-10 mr-10"></div>
              </div>

              <div className="absolute  md:top-[5%] md:left-[71%] top-[65%] left-[12%] rounded-full flex justify-center items-center cursor-pointer">
                <img
                  src="images/search-icon2.png"
                  className="w-5 h-5"
                  alt="Search Icon"
                ></img>
                <div className="right-start">
                  <p className="p-1 black-color1">Location</p>
                  <input
                    placeholder={
                      focusedInput === 4 ? "" : "Browse Hostel locations"
                    }
                    className="login2 p-1"
                    onFocus={() => handleFocus(4)}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
