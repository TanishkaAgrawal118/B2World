import React, { useEffect } from "react";
import NavigationBar from "./NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import { Paper } from "@mui/material";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const vision = new URL("../Images/vision.png", import.meta.url);
const mission = new URL("../Images/mission.png", import.meta.url);
const values = new URL("../Images/values.png", import.meta.url);
const culture = new URL("../Images/culture.png",import.meta.url);

const About = () => {
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
        <h1>About Us</h1>
      </div>
      <Container>
        <div className="about">
          <h6>WHO WE ARE</h6>
          <h3>We Grow Your Business,</h3>
          <h2>With Our Innovative Solutions</h2>
          <p>
            We believe that a successful platform is both visually appealing and
            functional. Our developers are skilled in creating intuitive
            interfaces and incorporating cutting-edge technologies such as
            Augmented Reality, Artificial Intelligence, Blockchain, and the
            Internet of Things (IoT). Our comprehensive suite of services
            encompasses Web and Mobile App Development, Web Design, ERP Software
            Development, Cybersecurity Services, and Managed Cloud Services,
            ensuring our clients receive tailored solutions that excel in both
            form and function.
          </p>
          <p>
            We believe that a successful platform is both visually appealing and
            functional. Our developers are skilled in creating intuitive
            interfaces and incorporating cutting-edge technologies such as
            Augmented Reality, Artificial Intelligence, Blockchain, and the
            Internet of Things (IoT). Our comprehensive suite of services
            encompasses Web and Mobile App Development, Web Design, ERP Software
            Development, Cybersecurity Services, and Managed Cloud Services,
            ensuring our clients receive tailored solutions that excel in both
            form and function.
          </p>
        </div>
      </Container>
      <div className="about-container">
        <Container>
          <Paper elevation={1} className="vision" data-aos="fade-right">
          <Row >
            <Col lg={6}>
              <img src={vision} alt="vision"></img>
            </Col>
            <Col lg={6}>
                <h6>Our Vision</h6>
                <p>At B2World, we aspire to be trailblazers in the realm of telecommunication services, dedicated to elevating businesses through cutting-edge solutions. Our focus spans web development, app creation, and digital marketing, delivering innovations that amplify productivity and streamline operations. Devoted to our clients' success, we are here to revolutionize customer interactions, narrow gaps, and broaden horizons. Our mission is to be the catalyst for seamless business operations, empowering growth and success in the dynamic digital arena.</p>
            </Col>
          </Row>
          </Paper>
          <Paper elevation={1} className="vision" data-aos="fade-left">
          <Row>
            <Col lg={6}>
                <h6>Our Mission</h6>
                <p>At B2World, we're on a bold mission to transform the tech landscape through innovative telecommunication services. Our passion lies in empowering businesses with tailor-made solutions in web development, app development, and digital marketing, unlocking growth, enhancing efficiency, and leaving a lasting impact. We are steadfast in our commitment to help clients redefine customer interactions, bridge gaps, and explore new horizons. With a dedicated focus on operational excellence, we aim to make their journey to success smooth and fulfilling.</p>
            </Col>
            <Col lg={6}>
              <img src={mission} alt="mission"></img>
            </Col>
          </Row>
          </Paper>
          <Paper elevation={1} className="vision" data-aos="fade-right">
          <Row>
          <Col lg={6}>
              <img src={values} alt="mission"></img>
            </Col>
            <Col lg={6}>
                <h6>Our Values</h6>
                <p>At B2World, our core principles form the bedrock of our company. We champion integrity, transparency, and a customer-first approach in all our endeavors. Committed to delivering top-notch service, our team is fueled by innovation and a relentless pursuit of excellence. Collaboration is woven into our cultural fabric, creating a space where creativity thrives, and our clients' needs are met with unwavering dedication and enthusiasm. We embrace adaptability, staying ahead in the tech landscape to offer optimal solutions. Our values light the way on our mission to empower businesses in the digital era.</p>
            </Col>
          
          </Row>
          </Paper>
          <Paper elevation={1} className="vision" data-aos="fade-left">
          <Row>
        
            <Col lg={6}>
                <h6>Our Culture</h6>
                <p>At B2World, our culture is a vibrant tapestry woven with threads of excellence and innovation. We thrive in a dynamic and inclusive atmosphere, where we celebrate teamwork, creativity, and collaboration. Our team members are tech enthusiasts dedicated to staying ahead in industry trends. We cherish diversity, valuing each unique perspective and contribution. Our culture is built on honesty, integrity, and open communication—cornerstones ensuring trust with clients and partners. With a commitment to continuous learning and personal growth, we empower our team to deliver outstanding solutions, surpassing client expectations. It's this culture that propels our success, as we unite to make a positive impact in the digital world. Join us on a journey where passion meets innovation!</p>
            </Col>
            <Col lg={6}>
              <img src={culture} alt="mission"></img>
            </Col>
          </Row>
          </Paper>
        </Container>
      </div>
      <Footer/>
    </>
  );
};

export default About;
