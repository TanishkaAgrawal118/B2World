import React, { useEffect, useState } from 'react'
import CareerNav from './CareerNav'
import { Paper } from '@mui/material'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { fetchJobsById, saveApplication } from './ApiServices'
import { useParams } from 'react-router-dom'

const JobDetails = () => {
  const [formData, setFormData] = useState({ name:"", email:"", contact:"", file:null})

    const { id: jobId } = useParams();
    const[job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleOnChange = (e) => {
      if (e.target.type === 'file') {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
      } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formDataToSend = new FormData();
      for (const key in formData) {
          formDataToSend.append(key, formData[key]);
      }
      try {
          const response = await saveApplication(formDataToSend);
          console.log('Application send', response.data);
          alert("Application sent");
      } catch (error) {
          console.error(error);
          alert("Failed to submit Application");
      }
  };
    useEffect(() => {
        const fetchJobData = async () => {
          try {
            const response = await fetchJobsById(jobId); 
            setJob(response.data);
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
        }
        if(jobId){
            fetchJobData(); 
        }
       
      }, [jobId]); 
      if (loading) {
        return <div>Loading...</div>;
      }

  return (
    <>
        <CareerNav />
      <Container>
        <Row>
          <Col lg={8}>
            <Paper elevation={2} className='jobdetail-post'>
              <button
                type="button"
                className="focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-3 py-2 mb-2 ml-1 mr-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Location: {job.location}
              </button>
 
              <button
                type="button"
                className="focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-2 py-2 mb-2 ml-1 mr-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Exp. {job.experience}
              </button>

              <button
                type="button"
                className="focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-3 py-2 mb-2 ml-1 mr-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Positions: {job.positions}
              </button>

              <button
                type="button"
                className="focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-3 py-2 mb-2 ml-1 mr-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Salary: {job.salary}
              </button> 
              <div className='description'>
                <p>Designation: <b>{job.title}</b></p>
                <p>Exp: <b>{job.experience}</b></p>
                <p>Location: <b>{job.location}</b></p>
                <p>Salary: <b>{job.salary}</b></p>
                <p>No. of Positions: <b>{job.positions}</b></p>
                <p>Applicants are requested to share their CV at b2world@gmail.com</p><br />
                <b>Requirements</b>
                <ul>
                  {job.requirement.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
                <br />
                <b>Highlights</b>
                <ul>
                  {job.highlight.map((highlight, highlightIndex) => (
                    <li key={highlightIndex}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </Paper>
          </Col>
          <Col lg={4}>
            <div className='application'>
              <h5>Job Application Form</h5>
              <form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name='name' onChange={handleOnChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name='email' onChange={handleOnChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="text" name='contact' onChange={handleOnChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload Resume</Form.Label>
                  <Form.Control type="file" name='file'  onChange={handleOnChange} />
                </Form.Group>
                <Button variant="primary" style={{ margin: "10px", padding: "6px" }} type='submit'>Submit</Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default JobDetails
