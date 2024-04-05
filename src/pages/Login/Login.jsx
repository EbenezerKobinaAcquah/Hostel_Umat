// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   const handleMySubmissionsClick = () => {
//     navigate("/FrameOne");
//   };

//   return (
//     <div className="loginContainer bg-white-A700 shadow-xl w-[30%] m-auto h-[400px] text-center mt-[10%]">
//       <form>
//         <div className="pt-[5%]">
//           <h1>UMaT TSAP</h1>
//           <div className="inputField">
//             <div className="m-[5%]">
//               <input type="text" placeholder="Username" />{" "}
//             </div>
//             <div className="m-[5%]">
//               <input type="password" placeholder="Password" />{" "}
//             </div>
//           </div>
//           <button
//             type="submit"
//             onClick={handleMySubmissionsClick}
//             class="bg-teal-700 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full"
//           >
//             Login
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode"; // Import jwt_decode library

// function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch("https://portal.umat.edu.gh/mainapi/api/UserAccount/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         const token = data.token;
//         // Decode the token to access its claims (payload content)
//         const decodedToken = jwtDecode(token);
//         console.log(decodedToken); // Log the decoded token to the console

//         // Example: Accessing specific claims
//         console.log(decodedToken.email); // Access username claim
//         console.log(decodedToken.role); // Access role claim

//         // Store the token in localStorage
//         localStorage.setItem("token", token);
//         navigate("/FrameOne");
//       } else {
//         setError("Invalid username or password");
//       }
//     } catch (error) {
//       console.error("Error authenticating user:", error);
//       setError("An error occurred while authenticating");
//     }
//   };

//   return (
//     <div className="loginContainer bg-white-A700 shadow-xl w-[30%] m-auto h-[400px] text-center mt-[10%]">
//       <form onSubmit={handleSubmit}>
//         <div className="pt-[5%]">
//           <h1>UMaT TSAP</h1>
//           <div className="inputField">
//             <div className="m-[5%]">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={handleUsernameChange}
//               />
//             </div>
//             <div className="m-[5%]">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="bg-teal-700 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full"
//           >
//             Login
//           </button>
//           {error && <p className="text-red-500">{error}</p>}
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;




import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://portal.umat.edu.gh/mainapi/api/UserAccount/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });


      const data = await response.json();
      console.log(data)
      
      if (data.token) {
        const token = data.token;
        

        // Use the extracted information to construct the request to the other endpoint
        const otherEndpointResponse = await fetch("https://portal.umat.edu.gh/subapi/api/Account/UserInfo/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        });

        const otherEndpointData = await otherEndpointResponse.json();

        // Handle the response from the other endpoint accordingly
        console.log(otherEndpointData);

        // Store the token in localStorage
        localStorage.setItem("token", token);
        navigate("/FrameOne");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
      setError("An error occurred while authenticating");
    }
  };

    // // Function to refresh token
    // const refreshAccessToken = async () => {
    //   try {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //       const response = await fetch("https://portal.umat.edu.gh/subapi/api/Account/Login", {
    //         method: "POST",
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       });
  
    //       const data = await response.json();
  
    //       if (data.token) {
    //         const newToken = data.token;
    //         localStorage.setItem("token", newToken);
    //         console.log(newToken)
    //       } else {
    //         // Handle token refresh failure
    //         console.error("Token refresh failed:", data);
    //       }
    //     }
    //   } catch (error) {
    //     console.error("Error refreshing token:", error);
    //   }
    // };
  
    // // Periodically refresh token every 5 minutes
    // useEffect(() => {
    //   const intervalId = setInterval(refreshAccessToken, 5 * 60 * 1000);
    //   return () => clearInterval(intervalId);
    // }, []);
  

  return (
    <div className="loginContainer bg-white-A700 shadow-xl w-[30%] m-auto h-[400px] text-center mt-[10%]">
      <form onSubmit={handleSubmit}>
        <div className="pt-[5%]">
          <h1>UMaT TSAP</h1>
          <div className="inputField">
            <div className="m-[5%]">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="m-[5%]">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-teal-700 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full"
          >
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </form>
    </div>
  );
}

export default Login;



// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// function Login() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch("https://portal.umat.edu.gh/mainapi/api/UserAccount/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();
//       console.log(data)

//       if (data.token) {
//         const token = data.token;
//         localStorage.setItem("token", token);
//         navigate("/FrameOne");
//       } else {
//         setError("Invalid username or password");
//       }
//     } catch (error) {
//       console.error("Error authenticating user:", error);
//       setError("An error occurred while authenticating");
//     }
//   };

  // // Function to refresh token
  // const refreshAccessToken = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       const response = await fetch("https://portal.umat.edu.gh/subapi/api/Account/Login", {
  //         method: "POST",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       const data = await response.json();

  //       if (response.ok) {
  //         const newToken = data.token;
  //         localStorage.setItem("token", newToken);
  //       } else {
  //         // Handle token refresh failure
  //         console.error("Token refresh failed:", data);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error refreshing token:", error);
  //   }
  // };

  // // Periodically refresh token every 5 minutes
  // useEffect(() => {
  //   const intervalId = setInterval(refreshAccessToken, 5 * 60 * 1000);
  //   return () => clearInterval(intervalId);
  // }, []);


// // request data from the second endpoint using the received token in the headers of the request 


//   return (
//     <div className="loginContainer bg-white-A700 shadow-xl w-[30%] m-auto h-[400px] text-center mt-[10%]">
//       <form onSubmit={handleSubmit}>
//         <div className="pt-[5%]">
//           <h1>UMaT TSAP</h1>
//           <div className="inputField">
//             <div className="m-[5%]">
//               <input
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={handleUsernameChange}
//               />
//             </div>
//             <div className="m-[5%]">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={handlePasswordChange}
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="bg-teal-700 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded-full"
//           >
//             Login
//           </button>
//           {error && <p className="text-red-500">{error}</p>}
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;
