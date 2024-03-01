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

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/frameone" />} />
          <Route path="/frameone" element={<FrameOne />} />
          {/* Create a route for the new page */}
          <Route path="/MySubmissions" element={<MySubmissions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
