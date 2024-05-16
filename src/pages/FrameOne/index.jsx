import React, { useState, useEffect } from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, Text } from "components";
import Sidebar1 from "components/Sidebar1";
import StudentProfile from "components/StudentProfile";
import SidebarOverlay from "components/SidebarOverlay";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";


const FrameOnePage = () => {
 

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  const openNav = () => {
    setIsOpen(true);
  };

  const handleMySubmissionsClick = () => {
    // Navigate to the new page when the button is clicked
    navigate("/MySubmissions");
  };



  const handleReports = () => {
    navigate("/Reports");
  };


  
  return (
    <>
      <div className="flex flex-col-3 page-content bg-white-A700 font-inika mx-auto relative w-full">
        <div className="md:relative col-span-1 ">
          <Sidebar1
            openNav={openNav}
            className="h-full bg-teal-900 flex justify-start left-[0] top-[0]"
          />
        </div>

        <div className="relative bg-gray-100 col-span-2 items-center justify-start md:ml-[0] w-full">
          <div className="">
            <StudentProfile />
          </div>

          <div className="md:pt-[2%] md:mb-[5%] md:pl-[5%] md:pr-[5%]">
            <div className="bg-white-A700 shadow-md">
              <div className="md:flex md:mt-[9%] pt-[2%] mt-[30%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[115px] md:h-[135px] w-auto md:w-[165px] mb-4"
                    src="images/submit_icon.png"
                    alt="reporticonOne"
                  />

                  <Button
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 cursor-pointer font-semibold leading-[normal] min-w-[200px] md:text-xl sm:text-base text-lg text-center mb-6 md:mb-0"
                    size="sm"
                  >
                    New Submission
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[115px] md:h-[135px] object-cover w-[185px] mb-4"
                    src="images/img_submiticon21.png"
                    alt="reporticonOne"
                  />

                  <Button
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 cursor-pointer font-semibold leading-[normal] min-w-[200px] md:text-xl sm:text-base text-lg text-center mb-6 md:mb-0"
                    onClick={handleMySubmissionsClick}
                    size="sm"
                  >
                    My Submissions
                  </Button>
                </div>

                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[115px] md:h-[135px] object-cover w-[155px]  mb-4"
                    src="images/report_icon.png"
                    alt="reporticonOne"
                  />

                  <Button
                    
                    className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-500 duration-300 cursor-pointer font-semibold leading-[normal] min-w-[200px] md:text-xl sm:text-base text-lg text-center mb-6 md:mb-0"
                    onClick={handleReports}
                    size="sm"
                  >
                    Reports
                  </Button>
                </div>
              </div>

              <div className="md:flex text-center items-cente mt-[5%] w-[100%] pb-[9%]">
                <div className=" md:w-[60%] w-[100%]">
                  <Button
                    className="font-semibold leading-[normal] w-[90%] md:text-3xl sm:text-[28px] text-[20px] text-center"
                    shape="square"
                  >
                    Announcements:
                  </Button>
                  <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-gray-100 duration-300 overflow-y-auto h-[300px] ">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-6 w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-center md:items-start md:w-[80%] w-full ">
                        <Text
                          className="text-[18px] md:text-[22px] text-teal-900  "
                          size="txtPoppinsRegular36"
                        >
                          UMaT Holds Management Conversation.
                        </Text>
                        <Text
                          className="md:leading-[30.00px] md:ml-[0]  text-[15px] text-black-900 "
                          size="txtPoppinsRegular32"
                        >
                          <>
                            The VC is calling all board members for an <br />
                            emergency meeting this Wednesday, 2pm .
                          </>
                        </Text>
                        <Text
                          className=" ml-[60%] text-[12px] text-teal-900_7f"
                          size="txtPoppinsSemiBold32Teal9007f"
                        >
                          Read more...
                        </Text>
                        <Line className="bg-black-900_33 h-px mt-[7px] w-full" />
                        <Text
                          className="text-[18px] md:text-[22px] mt-2 text-teal-900  "
                          size="txtPoppinsRegular36"
                        >
                          UMaT Holds Management Conversation.
                        </Text>
                        <Text
                          className="md:leading-[30.00px] md:ml-[0] text-[15px] text-black-900 "
                          size="txtPoppinsRegular32"
                        >
                          <>
                            The VC is calling all board members for an <br />
                            emergency meeting this Wednesday, 2pm .
                          </>
                        </Text>
                        <Text
                          className=" ml-[60%] text-[12px] text-teal-900_7f"
                          size="txtPoppinsSemiBold32Teal9007f"
                        >
                          Read more...
                        </Text>
                        <Line className="bg-black-900_33 h-px mt-[7px] w-full" />
                        <Text
                          className="text-[18px] md:text-[22px] mt-2 text-teal-900  "
                          size="txtPoppinsRegular36"
                        >
                          UMaT Holds Management Conversation.
                        </Text>
                        <Text
                          className="md:leading-[30.00px] md:ml-[0]  text-[15px] text-black-900 "
                          size="txtPoppinsRegular32"
                        >
                          <>
                            The VC is calling all board members for an <br />
                            emergency meeting this Wednesday, 2pm .
                          </>
                        </Text>
                        <Text
                          className=" ml-[60%] text-[12px] text-teal-900_7f"
                          size="txtPoppinsSemiBold32Teal9007f"
                        >
                          Read more...
                        </Text>

                        <Line className="bg-black-900_33 h-px mt-[7px] w-full" />
                        <Text
                          className="text-[18px] md:text-[22px] mt-2 text-teal-900  "
                          size="txtPoppinsRegular36"
                        >
                          UMaT Holds Management Conversation.
                        </Text>
                        <Text
                          className="md:leading-[30.00px] md:ml-[0]  text-[15px] text-black-900 "
                          size="txtPoppinsRegular32"
                        >
                          <>
                            The VC is calling all board members for an <br />
                            emergency meeting this Wednesday, 2pm .
                          </>
                        </Text>
                        <Text
                          className=" ml-[60%] text-[12px] text-teal-900_7f"
                          size="txtPoppinsSemiBold32Teal9007f"
                        >
                          Read more...
                        </Text>

                        <Line className="bg-black-900_33 h-px mt-[7px] w-full" />

                        <Text
                          className="text-[18px] md:text-[22px] mt-2 text-teal-900  "
                          size="txtPoppinsRegular36"
                        >
                          UMaT Holds Management Conversation.
                        </Text>
                        <Text
                          className="md:leading-[30.00px] md:ml-[0]  text-[15px] text-black-900 "
                          size="txtPoppinsRegular32"
                        >
                          <>
                            The VC is calling all board members for an <br />
                            emergency meeting this Wednesday, 2pm .
                          </>
                        </Text>
                        <Text
                          className=" ml-[60%] text-[12px] text-teal-900_7f"
                          size="txtPoppinsSemiBold32Teal9007f"
                        >
                          Read more...
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:w-[40%] w-[100%] md:mr-5 mt-5 md:mt-0">
                  <Button
                    className="font-semibold leading-[normal] w-[90%] md:text-3xl sm:text-[28px] text-[20px] text-center"
                    shape="square"
                  >
                    Events:
                  </Button>
                  <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-gray-100 duration-300 overflow-y-auto h-[300px]">
                    <div className="items-center mt-6 w-full">
                      <div className="items-start justify-center md:justify-start w-[100%] md:w-full">
                        <div className="items-center justify-center md:justify-start w-full">
                          <div className="flex justify-center md:justify-start border-b pb-2">
                            <div className="ml-[5%] bg-teal-900 flex flex-col items-center justify-center md:justify-start p-[3px]">
                              <Text
                                className=" leading-[10.00px] mb-1 md:text-1xl sm:text-[10px] text-[12px] text-center text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                <>
                                  24
                                  <br />
                                  JAN
                                </>
                              </Text>
                            </div>
                            <div className="md:text-1xl sm:text-[12px] text-[15px] text-black-900 text-center ml-2">
                              <Text size="txtPoppinsSemiBold32Black900">
                                Orientation for freshers
                              </Text>
                            </div>
                          </div>
                          <div className="flex justify-center md:justify-start border-b pt-2 pb-2">
                            <div className="ml-[5%] bg-teal-900 flex flex-col items-center  p-[3px]">
                              <Text
                                className=" leading-[10.00px] mb-1 md:text-1xl sm:text-[10px] text-[12px] text-center text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                <>
                                  24
                                  <br />
                                  JAN
                                </>
                              </Text>
                            </div>
                            <div className="md:text-1xl sm:text-[12px] text-[15px] text-black-900 text-center ml-2">
                              <Text size="txtPoppinsSemiBold32Black900">
                                Orientation for freshers
                              </Text>
                            </div>
                          </div>
                          <div className="flex justify-center md:justify-start border-b pb-2 pt-2">
                            <div className="ml-[5%] bg-teal-900 flex flex-col items-center  p-[3px]">
                              <Text
                                className=" leading-[10.00px] mb-1 md:text-1xl sm:text-[10px] text-[12px] text-center text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                <>
                                  24
                                  <br />
                                  JAN
                                </>
                              </Text>
                            </div>
                            <div className="md:text-1xl sm:text-[12px] text-[15px] text-black-900 text-center ml-2">
                              <Text size="txtPoppinsSemiBold32Black900">
                                Orientation for freshers
                              </Text>
                            </div>
                          </div>
                          <div className="flex justify-center md:justify-start border-b pb-2 pt-2">
                            <div className="ml-[5%] bg-teal-900 flex flex-col items-center p-[3px]">
                              <Text
                                className=" leading-[10.00px] mb-1 md:text-1xl sm:text-[10px] text-[12px] text-center text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                <>
                                  24
                                  <br />
                                  JAN
                                </>
                              </Text>
                            </div>
                            <div className="md:text-1xl sm:text-[12px] text-[15px] text-black-900 text-center ml-2">
                              <Text size="txtPoppinsSemiBold32Black900">
                                Orientation for freshers
                              </Text>
                            </div>
                          </div>
                          <div className="flex justify-center md:justify-start border-b pb-2 pt-2">
                            <div className="ml-[5%] bg-teal-900 flex flex-col items-center  p-[3px]">
                              <Text
                                className=" leading-[10.00px] mb-1 md:text-1xl sm:text-[10px] text-[12px] text-center text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                <>
                                  24
                                  <br />
                                  JAN
                                </>
                              </Text>
                            </div>
                            <div className="md:text-1xl sm:text-[12px] text-[15px] text-black-900 text-center ml-2">
                              <Text size="txtPoppinsSemiBold32Black900">
                                Orientation for freshers
                              </Text>
                            </div>
                          </div>

                          <div className="border-b pb-2 pt-2 flex justify-center md:justify-start">
                            <div className="ml-[5%] bg-teal-900 flex flex-col items-center justify-center md:justify-start p-[3px]">
                              <Text
                                className=" leading-[10.00px] mb-1 md:text-1xl sm:text-[10px] text-[12px] text-center text-white-A700"
                                size="txtPoppinsSemiBold32"
                              >
                                <>
                                  24
                                  <br />
                                  JAN
                                </>
                              </Text>
                            </div>
                            <div className="md:text-1xl sm:text-[12px] text-[15px] text-black-900 text-center ml-2">
                              <Text size="txtPoppinsSemiBold32Black900">
                                Orientation for freshers
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="border-b pb-2 pt-2 flex justify-center md:justify-start">
                          <div className="ml-[5%] bg-teal-900 flex flex-col items-center p-[3px]">
                            <Text
                              className=" leading-[10.00px] mb-1 md:text-1xl sm:text-[10px] text-[12px] text-center text-white-A700"
                              size="txtPoppinsSemiBold32"
                            >
                              <>
                                24
                                <br />
                                JAN
                              </>
                            </Text>
                          </div>
                          <div className="md:text-1xl sm:text-[12px] text-[15px] text-black-900 text-center ml-2">
                            <Text size="txtPoppinsSemiBold32Black900">
                              Orientation for freshers
                            </Text>
                          </div>
                        </div>

                        <div className="border-b pb-2 pt-2 flex justify-center md:justify-start">
                          <div className="ml-[5%] bg-teal-900 flex flex-col items-center  p-[3px]">
                            <Text
                              className=" leading-[10.00px] mb-1 md:text-1xl sm:text-[10px] text-[12px] text-center text-white-A700"
                              size="txtPoppinsSemiBold32"
                            >
                              <>
                                24
                                <br />
                                JAN
                              </>
                            </Text>
                          </div>
                          <div className="md:text-1xl sm:text-[12px] text-[15px] text-black-900 text-center ml-2">
                            <Text size="txtPoppinsSemiBold32Black900">
                              Orientation for freshers
                            </Text>
                          </div>
                        </div>

                        <div className="border-b pb-2 pt-2 flex justify-center md:justify-start">
                          <div className="ml-[5%] bg-teal-900 flex flex-col items-center  p-[3px]">
                            <Text
                              className=" leading-[10.00px] mb-1 md:text-1xl sm:text-[10px] text-[12px] text-center text-white-A700"
                              size="txtPoppinsSemiBold32"
                            >
                              <>
                                24
                                <br />
                                JAN
                              </>
                            </Text>
                          </div>
                          <div className="md:text-1xl sm:text-[12px] text-[15px] text-black-900 text-center ml-2">
                            <Text size="txtPoppinsSemiBold32Black900">
                              Orientation for freshers
                            </Text>
                          </div>
                        </div>

                        {/*
                          You can map through your announcements data and display them here.
                          Example:
                          announcements.map((announcement, index) => (
                            <div key={index}>{announcement}</div>
                          ))
                        */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
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
