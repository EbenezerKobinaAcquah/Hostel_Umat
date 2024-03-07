



// import React, { useState, useEffect } from 'react';


// const ReportsPage = () => {
//    const [posts, setPosts] = useState([]);

//    useEffect(() => {
//       fetch('https://portal.umat.edu.gh/subapi/api/Submission/GetUserSubmissions')
//          .then((response) => {
//             if (!response.ok) {
//                throw new Error('Network response was not ok');
//             }
//             return response.json();
//          })
//          .then((data) => {
//             console.log(data);
//             setPosts(data);
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//    }, []);

//    return (
//       <div>
//          <h1>Reports</h1>
//          <ul>
//             {posts.map((post) => (
//                <li key={post.id}>
//                   <h2>{post.studentNumber}</h2>
//                   <h2>{post.id}</h2>
//                   <h2>{post.student.indexNumber}</h2>
//                </li>
//             ))}
//          </ul>
//       </div>
//    );
// };

// export default ReportsPage;



// components/SubmissionList.tsx

import React, { useEffect, useState } from 'react';
import { Submission } from "components/Models/submissions";
import { SubmissionService } from 'components/Services/SubmissionService';

const SubmissionList: React.FC = () => {
    const [submissions, setSubmissions] = useState<Submission[]>([]);

    useEffect(() => {
        SubmissionService.getUserSubmissions()
        .then((data) => {
            //console.log('Response from getUserSubmissions:', data);
            setSubmissions(data);
            //const [records, setRecords] = useState(data);
        })
            .catch((error) => console.error('Error fetching submissions:', error));
    }, []);

    return (
        <>
                 <div>
            {/* <h2>Submissions</h2>
            <ul>
                {submissions.map((SubmissionData) => (
                    <li key={SubmissionData.id}>
                        {SubmissionData.studentNumber}
                        {SubmissionData.id}
                        {SubmissionData.title}
                        
                    </li>
                ))}
            </ul> */}
        </div>

        </>
        
    );
};

export default SubmissionList;
