// import React, { useEffect, useState } from 'react'
// import CareerNav from './CareerNav'
// import { Button, Paper } from '@mui/material'
// import { useNavigate } from 'react-router-dom'
// import { Container } from 'react-bootstrap'
// import { fetchJobs } from './ApiServices'


// const Jobs = () => {
//   const[job, setJob] = useState([]);
//   const navigate = useNavigate();


//   const handlejob = (jobId) => {
//     navigate(`/getjobs/${jobId}`); // Corrected template literal syntax
//     console.log(jobId);
//   };
//   useEffect(() => {
//     const fetchJobData = async () => {
//       try {
//         const response = await fetchJobs(); 
//         setJob(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
    
//     fetchJobData(); 
//   }, []); 
//   return (
//     <>
//         <CareerNav/>
//         <div className='service-section'>
//             <h1>Jobs opportunities</h1>
//         </div>
//         <Container>
//         <div >
//           <Paper elevation={2} className='jobposts'>
//           {job.map((job) => (
//               <div key={job._id}>
//                 <h3>{job.title}</h3>
//                 <h6>B2World</h6>
//                 <p>Exp. {job.experience} | {job.salary} | {job.type} | {job.positions} Positions | {job.location}</p>
//                 <button
//                   onClick={() => handlejob(job._id)}
//                   type="button"
//                   className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
//                 >
//                   View Details
//                 </button>
//               </div>
//             ))}
            
//           </Paper>
//         </div>
//         </Container>
       
//     </>
//   )
// }

// export default Jobs



import React, { useEffect, useState } from 'react';
import CareerNav from './CareerNav';
import { Paper } from '@mui/material';
import { Container } from 'react-bootstrap';
import { fetchJobs } from './ApiServices';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Jobs = () => {
    const [job, setJob] = useState([]);
    const navigate = useNavigate();

    const handleJob = (jobId) => {
        navigate(`/getjobs/${jobId}`);
    };

    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const response = await fetchJobs();
                setJob(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchJobData();
    }, []);

    return (
        <>
            <CareerNav />
            <div className='service-section'>
                <h1>Jobs opportunities</h1>
            </div>
            <Container>
                <div>
           
                    {job.map((job) => (
                           <Paper elevation={2} className='jobposts'>
                            <div key={job._id}>
                            <h3>{job.title}</h3>
                            <h6>B2World</h6>
                            <p>Exp. {job.experience} | {job.salary} | {job.type} | {job.positions} Positions | {job.location}</p>
                                <button
                                    onClick={() => handleJob(job._id)}
                                    type="button"
                                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
                                >
                                    View Details
                                </button>
                            </div>
                            </Paper>
                        ))}
     
                </div>
            </Container>
            <Footer/>
        </>
    );
};

export default Jobs;
