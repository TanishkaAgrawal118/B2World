import React, { useEffect } from "react";
import NavigationBar from "./NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import team1 from "../Images/team.png";
import team2 from "../Images/team1.jpg";
import team3 from "../Images/team2.jpg";
import team4 from "../Images/team3.jpg";
import team5 from "../Images/team4.jpg";
import team6 from "../Images/team5.jpg";

import { Paper } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Footer";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  return (
    <>
      <NavigationBar />
      <div className="service-section">
        <h1>Team</h1>
      </div>
      <div>
        <Container>
          <div className="team">
            <Row>
              <Col lg={6} sm={12}>
                <h1>
                  Meet Our<br></br> Team
                </h1>
              </Col>
              <Col lg={6} sm={12}>
                <img src={team1} alt="team1"></img>
              </Col>
            </Row>
          </div>

          <Row >
      
            <Col lg={4} md={6} sm={12}>
              <div className="d-flex justify-content-center align-items-center">
              <Paper elevation={0} className="teamBox" >
                <div className="d-flex justify-content-center align-items-center">
                  <img src={team2} className="teamImg ring-2 dark:ring-offset-slate ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 ..." alt="team1" data-aos="flip-right" />
                </div>
                <div className="text-center">
                  <h6>Rajnish Anand</h6>
                  <p>Marketing & Technical Analyst</p>
                </div>
              </Paper>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}>
            <div className="d-flex justify-content-center align-items-center">
              <Paper elevation={0} className="teamBox" >
                <div className="d-flex justify-content-center align-items-center">
                  <img src={team3} className="teamImg ring-2 grey ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 ..." alt="team1"  data-aos="flip-right" />
                </div>
                <div className="text-center">
                  <h6>Saurabh Kumar</h6>
                  <p>Software Developer</p>
                </div>
              </Paper>
              </div>
            </Col>

            <Col lg={4} md={6} sm={6}>
            <div className="d-flex justify-content-center align-items-center">
              <Paper elevation={0} className="teamBox" >
                <div className="d-flex justify-content-center align-items-center">
                  <img src={team4} className="teamImg ring-2 grey ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 ..." alt="team1" style={{height:"58%"}}  data-aos="flip-right"/>
                </div>
                <div className="text-center">
                  <h6>Ankit Raj</h6>
                  <p>Graphic Designer</p>
                </div>
              </Paper>
              </div>
            </Col>
         
            <Col lg={6} md={6} sm={6}>
            <div className="d-flex justify-content-center align-items-center">
              <Paper elevation={0} className="teamBox" >
                <div className="d-flex justify-content-center align-items-center">
                  <img src={team5} className="teamImg ring-2 grey ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 ..." alt="team1" style={{height:"58%"}}  data-aos="flip-right"/>
                </div>
                <div className="text-center">
                  <h6>Aman Anad</h6>
                  <p>DevOps Engineer</p>
                </div>
              </Paper>
              </div>
            </Col>

            <Col lg={6} md={6} sm={6}>
            <div className="d-flex justify-content-center align-items-center">
              <Paper elevation={0} className="teamBox" >
                <div className="d-flex justify-content-center align-items-center">
                  <img src={team6} className="teamImg ring-2 grey ring-offset-4 ring-offset-slate-50 dark:ring-offset-slate-900 ..." alt="team1" style={{height:"58%"}}  data-aos="flip-right"/>
                </div>
                <div className="text-center">
                  <h6>Abhishek Kumar</h6>
                  <p>Android Developer</p>
                </div>
              </Paper>
              </div>
            </Col>

          </Row>
        </Container>
        <Footer/>
      </div>
    </>
  );
};

export default Team;
