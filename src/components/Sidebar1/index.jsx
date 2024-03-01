// import React, { useState, useEffect } from "react";
// import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
// import { Img, Text } from "components";
// import sidebarOverlay from "components/togglesidebar";


// const Sidebar1 = (props) => {
//   const { collapseSidebar, collapsed } = useProSidebar();
//   const [isMobile, setIsMobile] = useState(false);
//       const logoElements = document.querySelectorAll(".umat-logo");
//       if (logoElements) {
//         logoElements.forEach((element) => {
//           element.classList.toggle("hidden", collapsed);
//         });
//       }

//   useEffect(() => {
//     // Function to handle viewport resizing
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 576); // Check if viewport is smaller than or equal to "sm"
//     };

//     // Add event listener for window resize
//     window.addEventListener("resize", handleResize);

//     // Call handleResize to set initial state
//     handleResize();

//     // Clean up event listener on component unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   if (isMobile) {
//     // If viewport is smaller than or equal to "sm", hide the sidebar completely
//     return <div className="w-20 h-20 text-center bg-gray-100">
//     <button className="cursor-pointer " /*onClick={()}*/>
//     <Img
//     className="cursor-pointer ml-[20%] mt-5 h-10 w-10"
//     src="images/menu-burger-new.png"
//     alt="menu-icon"
//     />
//     </button>
//     </div>;
//   }

//   // // if (isMobile && )


//   return (
//     <>
//       <div className="above-all left-[0] h-full">
//         <Sidebar
//           onClick={() => collapseSidebar(!collapsed)}
//           className={`umat-logo ${props.className}`}
//         >
//           <div className="">
//             <Img
//               className="cursor-pointer umat-logo md:h-auto mt-[5%] ml-[85%] object-cover w-[29px] "
//               src="images/left-arrow.png"
//               alt="lessthan"
//             />
//             <Menu
//               menuItemStyles={{
//                 button: {
//                   padding: "0 5%",
//                   gap: "12px",
//                   margin: "0 0 10%",
//                   color: "#ffffff",
//                   fontWeight: 700,
//                   fontSize: "30px",
//                   fontFamily: "Inika",
//                 },
//               }}
//               className="umat-logo flex items-center justify-start mt-[10%] w-full"
//             >
//               <MenuItem
//                 icon={
//                   <Img
//                     className="umat-logo common-pointer h-[20px] md:h-[29px] inset-auto object-cover relative w-full"
//                     src="images/img_umatlogo1.png"
//                     alt="umatlogoOne"
//                     onClick={props?.onClick}
//                   />
//                 }
//               >
//                 <Text className="umat-logo text-[25px] text-shadow-ts">
//                   UMaT - TSAP
//                 </Text>
//               </MenuItem>
//             </Menu>

//             <div className="pb-[10%] flex justify-center">
//               <div>
//                 <div className="">
//                   {collapsed && (
//                     <div className="">
//                       {/* Render the menu icon only when the sidebar is collapsed */}
//                       <Img
//                         className="cursor-pointer mb-[50%] h-10 w-10"
//                         src="images/menu-burger-new.png"
//                         alt="menu-icon"
//                       />
//                     </div>
//                   )}
//                 </div>

//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_home.svg"
//                   alt="home"
//                 />
//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_thumbsup.svg"
//                   alt="thumbsup"
//                 />
//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_student.svg"
//                   alt="student_One"
//                 />
//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_thumbsup_blue_gray_200.svg"
//                   alt="thumbsup_One"
//                 />
//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_finance.svg"
//                   alt="finance"
//                 />
//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_calendar.svg"
//                   alt="calendar"
//                 />
//               </div>

//               <div className="umat-logo pl-[10%] ">
//                 <Text
//                   className="h-10 pt-[8%] mb-[12%] flex text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Home
//                 </Text>
//                 <Text
//                   className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Submissions
//                 </Text>
//                 <Text
//                   className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Report
//                 </Text>
//                 <Text
//                   className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Event
//                 </Text>
//                 <Text
//                   className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Assignments
//                 </Text>
//                 <Text
//                   className="h-10 pt-[8%] text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Announcements
//                 </Text>
//               </div>
//             </div>
//           </div>
//         </Sidebar>
//       </div>
//     </>
//   );
// };

// export default Sidebar1;


// import React, { useState, useEffect }  from "react";
// import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
// import { Img, Text } from "components";
// import SidebarOverlay from "components/SidebarOverlay";// Import your component

// const Sidebar1 = (props) => {
//     const { collapseSidebar, collapsed } = useProSidebar();
//     const [isMobile, setIsMobile] = useState(false);
//     const [showComponent, setShowComponent] = useState(false);
//         const logoElements = document.querySelectorAll(".umat-logo");
//         if (logoElements) {
//           logoElements.forEach((element) => {
//             element.classList.toggle("hidden", collapsed);
//           });
//         }




//   const handleClick = () => {
//     // Toggle the state to show/hide the component
//     // setShowComponent(!showComponent);
//     <SidebarOverlay />
//   };

//   useEffect(() => {
//     // Function to handle viewport resizing
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 576); // Check if viewport is smaller than or equal to "sm"
//     };

//     // Add event listener for window resize
//     window.addEventListener("resize", handleResize);

//     // Call handleResize to set initial state
//     handleResize();

//     // Clean up event listener on component unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   if (isMobile) {
//     // If viewport is smaller than or equal to "sm", hide the sidebar completely
//     return (
//       <div className="absolute top-0 left-0  w-[20%] h-20 text-center bg-gray-100">
//         <button className="cursor-pointer" onClick={handleClick}>
//           <Img
//             className="cursor-pointer w-10 h-10 mt-[40%]"
//             src="images/menu-burger-new.png"
//             alt="menu-icon"
//           />
//         </button>
//        {/*showComponent && <SidebarOverlay />} {/* Render your component based on state */}
//       </div>
//     );
//   }
//   /* Open when someone clicks on the span element */


//   return (
//     <>
//       <div className="left-[0] h-full">
//       <SidebarOverlay />
//         <Sidebar
//           onClick={() => collapseSidebar(!collapsed)}
//           className={`umat-logo ${props.className}`}
//         >
//           <div className="">
//             <Img
//               className="cursor-pointer umat-logo md:h-auto mt-[5%] ml-[85%] object-cover w-[29px] "
//               src="images/left-arrow.png"
//               alt="lessthan"
//             />
//             <Menu
//               menuItemStyles={{
//                 button: {
//                   padding: "0 5%",
//                   gap: "12px",
//                   margin: "0 0 10%",
//                   color: "#ffffff",
//                   fontWeight: 700,
//                   fontSize: "30px",
//                   fontFamily: "Inika",
//                 },
//               }}
//               className="umat-logo flex items-center justify-start mt-[10%] w-full"
//             >
//               <MenuItem
//                 icon={
//                   <Img
//                     className="umat-logo common-pointer h-[20px] md:h-[29px] inset-auto object-cover relative w-full"
//                     src="images/img_umatlogo1.png"
//                     alt="umatlogoOne"
//                     onClick={props?.onClick}
//                   />
//                 }
//               >
//                 <Text className="umat-logo text-[25px] text-shadow-ts">
//                   UMaT - TSAP
//                 </Text>
//               </MenuItem>
//             </Menu>

//             <div className="pb-[10%] flex justify-center">
//               <div>
//                 <div className="">
//                   {collapsed && (
//                     <div className="">
//                       {/* Render the menu icon only when the sidebar is collapsed */}
//                       <Img
//                         className="cursor-pointer mb-[50%] h-10 w-10"
//                         src="images/menu-burger-new.png"
//                         alt="menu-icon"
//                       />
//                     </div>
//                   )}
//                 </div>

//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_home.svg"
//                   alt="home"
//                 />
//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_thumbsup.svg"
//                   alt="thumbsup"
//                 />
//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_student.svg"
//                   alt="student_One"
//                 />
//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_thumbsup_blue_gray_200.svg"
//                   alt="thumbsup_One"
//                 />
//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_finance.svg"
//                   alt="finance"
//                 />
//                 <Img
//                   className="mb-[50%] h-10 w-10"
//                   src="images/img_calendar.svg"
//                   alt="calendar"
//                 />
//               </div>

//               <div className="umat-logo pl-[10%] ">
//                 <Text
//                   className="h-10 pt-[8%] mb-[12%] flex text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Home
//                 </Text>
//                 <Text
//                   className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Submissions
//                 </Text>
//                 <Text
//                   className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Report
//                 </Text>
//                 <Text
//                   className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Event
//                 </Text>
//                 <Text
//                   className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Assignments
//                 </Text>
//                 <Text
//                   className="h-10 pt-[8%] text-lg text-white-A700"
//                   size="txtPoppinsMedium18"
//                 >
//                   Announcements
//                 </Text>
//               </div>
//             </div>
//           </div>

//         </Sidebar>
//       </div>
//     </>
//   );
// };

// export default Sidebar1;






// import React, { useState, useEffect } from "react";
// import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
// import { Img, Text } from "components";
// import SidebarOverlay from "components/SidebarOverlay";

// const Sidebar1 = (props) => {
//   const { collapseSidebar, collapsed } = useProSidebar();
//   const logoElements = document.querySelectorAll(".umat-logo");
//   if (logoElements) {
//     logoElements.forEach((element) => {
//       element.classList.toggle("hidden", collapsed);
//     });
//   }
//   const [isMobile, setIsMobile] = useState(false);
//   const [showComponent, setShowComponent] = useState(false);
  

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 576);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleClick = () => {
//     setShowComponent(!showComponent);
//   };

//   return (
//     <div className="left-[0] h-full">
//       <Sidebar
//         onClick={() => collapseSidebar(!collapsed)}
//         className={`umat-logo ${props.className}`}
//       >
        // <div className="">
        //   <Img
        //     className="cursor-pointer umat-logo md:h-auto mt-[5%] ml-[85%] object-cover w-[29px] "
        //     src="images/left-arrow.png"
        //     alt="lessthan"
        //   />
        //   <Menu
        //     menuItemStyles={{
        //       button: {
        //         padding: "0 5%",
        //         gap: "12px",
        //         margin: "0 0 10%",
        //         color: "#ffffff",
        //         fontWeight: 700,
        //         fontSize: "30px",
        //         fontFamily: "Inika",
        //       },
        //     }}
        //     className="umat-logo flex items-center justify-start mt-[10%] w-full"
        //   >
        //     <MenuItem
        //       icon={
        //         <Img
        //           className="umat-logo common-pointer h-[20px] md:h-[29px] inset-auto object-cover relative w-full"
        //           src="images/img_umatlogo1.png"
        //           alt="umatlogoOne"
        //           onClick={props?.onClick}
        //         />
        //       }
        //     >
        //       <Text className="umat-logo text-[25px] text-shadow-ts">
        //         UMaT - TSAP
        //       </Text>
        //     </MenuItem>
        //   </Menu>

        //   <div className="pb-[10%] flex justify-center">
        //     <div>
        //       <div className="">
        //         {collapsed && (
        //           <div className="">
        //             <Img
        //               className="cursor-pointer mb-[50%] h-10 w-10"
        //               src="images/menu-burger-new.png"
        //               alt="menu-icon"
        //             />
        //           </div>
        //         )}
        //       </div>

        //       <Img
        //         className="mb-[50%] h-10 w-10"
        //         src="images/img_home.svg"
        //         alt="home"
        //       />
        //      <Img
        //           className="mb-[50%] h-10 w-10"
        //           src="images/img_thumbsup.svg"
        //           alt="thumbsup"
        //         />
        //         <Img
        //           className="mb-[50%] h-10 w-10"
        //           src="images/img_student.svg"
        //           alt="student_One"
        //         />
        //         <Img
        //           className="mb-[50%] h-10 w-10"
        //           src="images/img_thumbsup_blue_gray_200.svg"
        //           alt="thumbsup_One"
        //         />
        //         <Img
        //           className="mb-[50%] h-10 w-10"
        //           src="images/img_finance.svg"
        //           alt="finance"
        //         />
        //         <Img
        //           className="mb-[50%] h-10 w-10"
        //           src="images/img_calendar.svg"
        //           alt="calendar"
        //         />
        //     </div>

        //     <div className="umat-logo pl-[10%] ">
        //       <Text
        //           className="h-10 pt-[8%] mb-[12%] flex text-lg text-white-A700"
        //           size="txtPoppinsMedium18"
        //         >
        //           Home
        //         </Text>
        //         <Text
        //           className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
        //           size="txtPoppinsMedium18"
        //         >
        //           Submissions
        //         </Text>
        //         <Text
        //           className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
        //           size="txtPoppinsMedium18"
        //         >
        //           Report
        //         </Text>
        //         <Text
        //           className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
        //           size="txtPoppinsMedium18"
        //         >
        //           Event
        //         </Text>
        //         <Text
        //           className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
        //           size="txtPoppinsMedium18"
        //         >
        //           Assignments
        //         </Text>
        //         <Text
        //           className="h-10 pt-[8%] text-lg text-white-A700"
        //           size="txtPoppinsMedium18"
        //         >
        //           Announcements
        //         </Text>
        //     </div>
        //   </div>
        // </div>
      // </Sidebar>

//       {isMobile && ( // Render SidebarOverlay only if isMobile is true
//         <SidebarOverlay handleClick={handleClick} showComponent={showComponent} />
//       )}
//     </div>
//   );
// };

// export default Sidebar1;



import React, { useState, useEffect } from "react";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Img, Text } from "components";
import SidebarOverlay from "components/SidebarOverlay";

const Sidebar1 = (props) => {
  const { openNav} = props;
  const { collapseSidebar, collapsed } = useProSidebar();
  const [isMobile, setIsMobile] = useState(false);


    const logoElements = document.querySelectorAll(".umat-logo");
    if (logoElements) {
      logoElements.forEach((element) => {
        element.classList.toggle("hidden", collapsed);
      });
    }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="left-[0] h-full">
      {isMobile ? ( // Render menu icon only if isMobile is true
        <div className="absolute hidden left-0 w-[20%] text-center ">
          <button id="menu-button-id" className="cursor-pointer " onClick={openNav}>
            <Img
              className="cursor-pointer w-10 h-5 mt-[10%]"
              src="images/menu-burger-new.png"
              alt="menu-icon"
            />
          </button>
        </div>
      ) : (
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className={`umat-logo ${props.className}`}
        >
          <div className="flex flex-col-3 justify-around mt-[5%]">
          
          <div className="col-span-2 ">
          <Menu
            menuItemStyles={{
              button: {
                padding: "0 0",
                gap: "12px",
                margin: "0 0 10%",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "30px",
                fontFamily: "Inika",
              },
            }}
            className="umat-logo flex items-center justify-start w-full"
          >
            <MenuItem
              icon={
                <Img
                  className="umat-logo common-pointer h-[20px] md:h-[25px] inset-auto object-cover relative w-full"
                  src="images/img_umatlogo1.png"
                  alt="umatlogoOne"
                  onClick={props?.onClick}
                />
              }
            >
              <Text className="umat-logo text-[25px] w-full text-shadow-ts">
                UMaT - TSAP
              </Text>
            </MenuItem>
          </Menu>
          </div>
          <div className="col-span-1 ">
          <Img
            className="cursor-pointer umat-logo md:h-auto mt-[5%]  w-[29px] "
            src="images/left-arrow.png"
            alt="lessthan"
          />
          </div>
          </div>

          <div className="pb-[10%] flex justify-center">
            <div>
              <div className="">
                {collapsed && (
                  <div className="">
                    <Img
                      className="cursor-pointer mb-[50%] h-10 w-10"
                      src="images/menu-burger-new.png"
                      alt="menu-icon"
                    />
                  </div>
                )}
              </div>

              <Img
                className="mb-[50%] h-10 w-10"
                src="images/img_home.svg"
                alt="home"
              />
             <Img
                  className="mb-[50%] h-10 w-10"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Img
                  className="mb-[50%] h-10 w-10"
                  src="images/img_student.svg"
                  alt="student_One"
                />
                <Img
                  className="mb-[50%] h-10 w-10"
                  src="images/img_thumbsup_blue_gray_200.svg"
                  alt="thumbsup_One"
                />
                <Img
                  className="mb-[50%] h-10 w-10"
                  src="images/img_finance.svg"
                  alt="finance"
                />
                <Img
                  className="mb-[50%] h-10 w-10"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
            </div>

            <div className="umat-logo pl-[10%] ">
              <Text
                  className="h-10 pt-[8%] mb-[12%] flex text-lg text-white-A700"
                  size="txtPoppinsMedium18"
                >
                  Home
                </Text>
                <Text
                  className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
                  size="txtPoppinsMedium18"
                >
                  Submissions
                </Text>
                <Text
                  className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
                  size="txtPoppinsMedium18"
                >
                  Report
                </Text>
                <Text
                  className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
                  size="txtPoppinsMedium18"
                >
                  Event
                </Text>
                <Text
                  className="h-10 pt-[8%] mb-[12%] text-lg text-white-A700"
                  size="txtPoppinsMedium18"
                >
                  Assignments
                </Text>
                <Text
                  className="h-10 pt-[8%] text-lg text-white-A700"
                  size="txtPoppinsMedium18"
                >
                  Announcements
                </Text>
            </div>
          </div>
        
        </Sidebar>
      )}

      {isMobile && <SidebarOverlay />} {/* Render SidebarOverlay only if isMobile is true */}
    </div>
  );
};

export default Sidebar1;
