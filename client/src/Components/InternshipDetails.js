import React, { useEffect, useState } from 'react'
import CareerNav from './CareerNav'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Paper } from '@mui/material'
import { fetchInternshipById } from './ApiServices'
import { useParams } from 'react-router-dom'

const InternshipDetails = () => {
    const { id: internshipId } = useParams();
    const[internship, setInternship] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchInternshipData = async () => {
          try {
            const response = await fetchInternshipById(internshipId); 
            setInternship(response.data);
            setLoading(false);
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
        }
        if(internshipId){
            fetchInternshipData(); 
        }
       
      }, [internshipId]); 
      if (loading) {
        return <div>Loading...</div>;
      }
  return (
   <>
    <CareerNav/>
    <Container>
        <Row>
            <Col lg={8}>
                <Paper elevation={2} className='jobdetail-post'>
                <button
                type="button"
                className="focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-3 py-2 mb-2 ml-1 mr-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Application Deadline: 
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-2 py-2 mb-2 ml-1 mr-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Duration:{ internship.duration} months
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-2 py-2 mb-2 ml-1 mr-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Experience: {internship.experience}
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md px-2 py-2 mb-2 ml-1 mr-1 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              >
                Stipened:  {internship.stipened}
              </button>
            
              <h5>{internship.title}</h5><br/>
              <b>Description</b>   <p>{internship.description}</p>
              <div className='description'>
              <b>Responsibilites</b><br/>
              <ul>
                  {internship.responsibilities.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              <b>Requirements</b><br/>
              <ul>
                  {internship.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              <b>Benifits</b><br/>
              <ul>
                  {internship.benifits.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </div>
            
                </Paper>
            </Col>
            <Col lg={4}>
            <div className='application'>
              <h5>Job Application Form</h5>
              <form>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name='name' />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name='email' />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="text" name='phone' />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Upload Resume</Form.Label>
                  <Form.Control type="file" name='file' />
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

export default InternshipDetails
