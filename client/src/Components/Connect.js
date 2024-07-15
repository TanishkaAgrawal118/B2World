import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import connect from "../Images/connect1.png";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Connect = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
    const navigate = useNavigate();
    const handleContact = () =>{
        navigate('/contact');
    }
  return (
    <>
      <Container>
        <Paper elevation={3} className="talk" data-aos="zoom-in">
          <Row>
            <Col lg={6}>
              <img src={connect} alt="connect"></img>
            </Col>
            <Col lg={6} style={{backgroundColor:"#faf5ff"}}>
              <h1>Let's Talk About Your Project!</h1>
              <p>Tell us how we can help you, and we'll get right back to you...</p>
              
              <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 ml-5 mt-5 mb-11" onClick={handleContact}>Contact</button>
            </Col>
          </Row>
        </Paper>
      </Container>
    </>
  );
};

export default Connect;
