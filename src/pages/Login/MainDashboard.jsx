import React, {useState} from "react";

function MainDashboard(){
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
    return <div className="top-container">
    <div className="login flex p-2 justify-end ">
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
      <div className="flex pr-10 pt-2 pb-2 " onClick={toggleDropdown}>
        <div className="flex">
          <img src="images/moon.png" className="h-4 pr-5 cursor-pointer" />
          <p className="pr-5 cursor-pointer">Day</p>

          {dropdownVisible && (
            <div className="absolute right-0 mt-6 bg-white border border-gray-300 rounded-md shadow-lg">
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
    <div className="flex justify-around m-7">
      <div>
        <img
          src="images/Bootstrap_logo.svg.png"
          className="w-20 h-16"
        ></img>
      </div>

      <div className="flex items-center link-labels">
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
      <div className="">
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
    <div className="w-[100%] h-96 bg-image content-center">
      <div className="">
        <div className="w-[100%]">
          <h2 className="pb-10 header">Get your Hostels the easy way</h2>
          <p className="align ">
            If you use any of our services, you won't bother going anywhere
            else
          </p>
        </div>
      </div>
      <div className=" w-[100%] mt-12  big-searchBox">
        <input
          type="text"
          className="w-[80%] h-20 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 center"
          placeholder=""
        ></input>
        <div className="primary-color absolute top-[55%] right-[10%] w-16 h-20 rounded-full flex justify-center items-center cursor-pointer">
          <img src="images/search-icon1.png" className=""></img>
        </div>

        <div>
          <div>
            <div className="absolute top-[57%] left-[11%] rounded-full flex justify-center items-center cursor-pointer">
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
              <div className="thin-line ml-10 mr-10"></div>
            </div>

            <div className="absolute top-[57%] left-[31%] rounded-full flex justify-center items-center cursor-pointer">
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
              <div className="thin-line ml-10 mr-10"></div>
            </div>

            <div className="absolute top-[57%] left-[51%] rounded-full flex justify-center items-center cursor-pointer">
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
            </div>

            <div className="absolute top-[57%] left-[71%] rounded-full flex justify-center items-center cursor-pointer">
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

}

export default MainDashboard;