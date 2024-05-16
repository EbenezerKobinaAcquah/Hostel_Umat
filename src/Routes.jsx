// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import NotFound from "pages/NotFound";
// import MySubmissions from "pages/MySubmissions";
// const FrameOne = React.lazy(() => import("pages/FrameOne"));

// const ProjectRoutes = () => {
//   return (
//     <React.Suspense fallback={<>Loading...</>}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navigate to="/frameone" />} />
//           <Route path="/frameone" element={<FrameOne />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </React.Suspense>
//   );
// };

// export default ProjectRoutes;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import NotFound from "pages/NotFound";
// import FrameOne from "pages/FrameOne";
// import MySubmissions from "pages/MySubmissions";
// import ReportsPage from "pages/Reports";
// import Login from "pages/Login/Login";
// import AuthGuard from "pages/AuthGuard/AuthGuard";

// const ProjectRoutes = () => {
//   return (
//     <React.Suspense fallback={<>Loading...</>}>
//       <Router>
//         <Routes>
//           <Route path="/Frameone" element={<AuthGuard><FrameOne /></AuthGuard>} />
//           <Route path="/MySubmissions" element={<AuthGuard><MySubmissions /></AuthGuard>} />
//           <Route path="/Reports" element={<AuthGuard><ReportsPage /></AuthGuard>} />
          // <Route path="/Login" element={<Login />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//     </React.Suspense>
//   );
// };

// export default ProjectRoutes;



import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "pages/NotFound";
import FrameOne from "pages/FrameOne";
import MySubmissions from "pages/MySubmissions";
import ReportsPage from "pages/Reports";
import Login from "pages/Login";
import AuthGuard from "pages/AuthGuard/AuthGuard";
import HostelPages from "pages/HostelPages/HostelPages";

const ProjectRoutes = () => {
  const isAuthenticated = localStorage.getItem("token"); // Get the authentication state from your application
  
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
    
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/HostelPages" element={<HostelPages />} />
<Route
  path="/Frameone"
  element={<AuthGuard isAuthenticated={isAuthenticated}><FrameOne /></AuthGuard>}
/>
<Route
  path="/MySubmissions"
  element={<AuthGuard isAuthenticated={isAuthenticated}><MySubmissions /></AuthGuard>}
/>
<Route
  path="/Reports"
  element={<AuthGuard isAuthenticated={isAuthenticated}><ReportsPage /></AuthGuard>}
/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;




