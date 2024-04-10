// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthGuard = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("userData");

//     // Check if token or userData is missing
//     if (token === null || userData === null) {
//       console.log("Redirecting to Login");
//       navigate("/Login");
//     }
//   }, [navigate]);

//   // Return null if the user is authenticated
//   return null;
// };

// export default AuthGuard;


import React from "react";
import { Navigate } from "react-router-dom";


const AuthGuard = ({ isAuthenticated, children }) => {
  isAuthenticated = localStorage.getItem("token");
  // Check if the user is authenticated
  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/" />;
    
  }

  // If authenticated, render the children components
  return children;
};

export default AuthGuard;


