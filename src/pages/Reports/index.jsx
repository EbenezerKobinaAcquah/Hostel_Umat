// import React, { useState, useEffect } from 'react';

// const ReportsPage = () => {
//    const [posts, setPosts] = useState([]);
//    useEffect(() => {
//       fetch('https://portal.umat.edu.gh/subapi/api/Submission/GetUserSubmissions'
//       , {
//         mode: 'no-cors'
//       })
//          .then((response) => response.json())
//          .then((data) => {
//             console.log(data);
//             setPosts(data);
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//    }, []);

// return (
//    // ... consume here
//    <div>
//          <h1>Reports</h1>
//          <ul>
//             {posts.map((post) => (
//                <li key={post.id}>
//                   <h2>{post.studentNumber}</h2>
                  
//                </li>
//             ))}
//          </ul>
//       </div>
// );
// };

// export default ReportsPage;




import React, { useState, useEffect } from 'react';

const ReportsPage = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch('https://portal.umat.edu.gh/subapi/api/Submission/GetUserSubmissions')
         .then((response) => {
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            return response.json();
         })
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <div>
         <h1>Reports</h1>
         <ul>
            {posts.map((post) => (
               <li key={post.id}>
                  <h2>{post.studentNumber}</h2>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default ReportsPage;
