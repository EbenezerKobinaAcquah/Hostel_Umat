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


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "pages/NotFound";
import FrameOne from "pages/FrameOne"; // Import FrameOne page
import MySubmissions from "pages/MySubmissions";
import ReportsPage from "pages/Reports"; 
import Login from "pages/Login/Login";

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={ <Login  />} />
          <Route path="/frameone" element={<FrameOne />} />
          {/* Create a route for the new page */}
          <Route path="/MySubmissions" element={<MySubmissions />} />
          <Route path="/Reports" element={<ReportsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
