import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoCall, IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const logo = new URL("../Images/logo.png", import.meta.url);

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Row>
          <Col lg={4}>
            <Col>
              <img src={logo} alt="logo" className="logo"></img>
              <p>
                At B2World, our enthusiasm for technology and its capacity to
                revolutionize businesses is truly captivating. As a dynamic and
                pioneering startup, we are dedicated to harnessing the power of
                innovation.
              </p>
            </Col>
          </Col>
          <Col lg={2}>
            <b>Company</b>
            <br />
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/about-us">
              <li>About</li>
            </a>
            <a href="/">
              <li>Services</li>
            </a>
            <a href="/pricing">
              <li>Pricing</li>
            </a>
            <a href="/team">
              <li>Team</li>
            </a>
            <a href="/jobs">
              <li>Career</li>
            </a>
            <a href="/privacyPolicy">
              <li>Privacy Policy</li>
            </a>
            <a href="/termsAndConditions">
              <li>Terms and Conditions</li>
            </a>
          </Col>
          <Col lg={3}>
            <b>Services</b>
            <br />
            <a href="/website">
              <li>Website Development</li>
            </a>
            <a href="/android">
              <li>Android Development</li>
            </a>
            <a href="/seo">
              <li>SEO Optimization</li>
            </a>
            <a href="/digital">
              <li>Digital Marketing</li>
            </a>
            <a href="/aiml">
              <li>AIML</li>
            </a>
            <a href="/">
              <li>Design and Branding</li>
            </a>
            <a href="/">
              <li>UI/UX Design</li>
            </a>
            <a href="/">
              <li>Graphic Design</li>
            </a>
          </Col>
          <Col lg={3}>
            <b>Reach Out</b>
            <div className="d-flex align-items-center">
              <IoLocationOutline style={{ fontSize: "35px" }} />
              <p>
                M/S BTOW Pvt. Ltd. , Shivam Market, Dalsingsarai, Samastipur
                (848114), Bihar, IN
              </p>
            </div>
            <div className="d-flex align-items-center">
              <IoLocationOutline style={{ fontSize: "35px" }} />
              <p>
              G04, Sai Baba Temple Road, Silver Springs Layout, Balagere,
              Bengaluru, Karnataka 560066
            </p>
            </div>
           
            <div className="d-flex align-items-center">
              <IoCall />
              <p>+91 7482909107</p>
            </div>
            <div className="d-flex align-items-center">
              <MdEmail />
              <p>contact@b2world.com</p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
