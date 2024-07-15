import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "./NavigationBar";
import backgroundImage from "../Images/contact2.png";
import Footer from "./Footer";
import { Paper } from "@mui/material";
import contact from '../Images/contact1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  const form = useRef();
  const notify = () => toast("Message sent!");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vbg6bdq", "template_63e1bnl", form.current, {
        publicKey: "0yYobg3Hgro7rRztQ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <NavigationBar />
      <div
        style={{
          position: "relative",
          overflowX: "hidden",
          height: "60vh",
          width: "98.9vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <div style={{ zIndex: 2 }}>
          <span className="headContact">Contact</span>
        </div>
      </div>
        
      <Container>
      <div className='contact'>
        <h2>We Would Love to Hear From You!</h2>

        <Row>
          <Col lg={8}>
            <Paper elevation={2} className="contact-form" data-aos="fade-right">
              <form ref={form} onSubmit={sendEmail}>
                <h6>Brief us your requirements below, and let's connect.</h6>
                <Row>
                  <Col lg={6}>
                  <label htmlFor="from_name" className="label">Name</label><br/>
                  <input type="text" className="inputs" name="from_name"></input>
                  </Col>
                  <Col lg={6}>
                  <label htmlFor="from_contact" className="label">Contact</label><br/>
                  <input type="text" className="inputs" name="from_contact"></input>
                  </Col>
                </Row>
               
                <Row>
                  <Col lg={8}>
                  <label htmlFor="from_email" className="label">Email</label><br/>
                  <input type="email" className="inputs" name="from_email"></input>
                  </Col>
                 
                </Row>
                <Row>
                <Col lg={12}>
                  <label htmlFor="from_msg" className="label">Message</label><br/>
                  <textarea type="text" className="inputs" name="from_msg"></textarea>
                  </Col>
                </Row>
                <button type="button" onClick={notify} class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 ml-2 mt-2 text-center me-2 mb-2">Submit</button>
              </form>

            </Paper>
          </Col>
          <Col lg={4}>
            <img src={contact} data-aos="fade-left"></img>
          </Col>
        </Row>
        <ToastContainer />
      </div>
      </Container>
    
     

    <Footer/>
    </>
  );
};

export default Contact;
