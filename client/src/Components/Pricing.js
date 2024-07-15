import React, { useState } from "react";
import NavigationBar from "./NavigationBar";
import backgroundImage from "../Images/pricing.png";
import { Col, Container, Row } from "react-bootstrap";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Footer from "./Footer";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(false);

  const handleMonthlyClick = () =>{
    setIsMonthly(true);
  }
  const handleAnnualClick = () =>{
    setIsMonthly(false);
  }

  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <>
      <NavigationBar />
      <div
        style={{
          position: "relative",
          overflowX: "hidden",
          height: "51vh",
          width: "98.9vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginBottom: "60px",
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
          <p className="headContact">Pricing</p>
        </div>
      </div>

      <div className="pricing">
        <h2>Our Pricing Designed For Your Business</h2>
        <h6>Pick a plan that's right for you</h6>
      </div>
      <div className="price-btn">
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-3 py-3.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" onClick={handleAnnualClick}
        >
          Annually(Save 20%)
        </button>
        <button
          type="button"
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-3 py-3.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" onClick={handleMonthlyClick}
        >
          Monthly
        </button>
      </div>
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Paper className="pricingBox" elevation={3}>
              <div className="priceTop"></div>
              <div className="price-content">
                <h4>Lite</h4>
                <h1 style={{padding:"10px"}}>{isMonthly ? "$20/month" : "$240/year"}</h1>
                <p style={{padding:"10px"}}>Get organized and set up simple sales processes.</p>
                <button
                  type="button"
                  class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 ml-4 mt-1 mb-1"
                  onClick={handleContact}
                >
                  Contact
                </button>

                <h4> Features</h4>
                <ul>
                  <div className="points">
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>Landing Page</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Domain + Hoisting</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>01-05 Pages</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>Cross-browser Support</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Digital Marketing</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>SEO Service</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Email Marketing</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>24*7 Support</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Admin Panel</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Business Email</p>
                      </span>
                    </li>
                  </div>
                  
                </ul>
              </div>
            </Paper>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Paper className="pricingBox" elevation={3}>
              <div className="priceTop"></div>
              <div className="price-content">
                <h4>Pro</h4>
                <h1  style={{padding:"10px"}}>{isMonthly ? "$30/month" : "$480/year"} </h1>
                <p  style={{padding:"10px"}}>Everything you need to boost performance and revenue.</p>
                <button
                  type="button"
                  class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 ml-4 mt-1 mb-1"
                  onClick={handleContact}
                >
                  Contact
                </button>

                <h4>Features</h4>
                <ul>
                  <div className="points">
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>Landing Page</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Domain + Hoisting</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>01-05 Pages</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>Cross-browser Support</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Digital Marketing</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>SEO Service</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Email Marketing</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>24*7 Support</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Admin Panel</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Business Email</p>
                      </span>
                    </li>
                  </div>
                  
                </ul>
              </div>
            </Paper>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <Paper className="pricingBox" elevation={3}>
              <div className="priceTop"></div>
              <div className="price-content">
                <h4>Ultimate</h4>
                <h1  style={{padding:"10px"}}>{isMonthly ? "$80/month" : "$720/year"}</h1>
                <p  style={{padding:"10px"}}>Customize without limits and access unrivaled support.</p>
                <button
                  type="button"
                  class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 ml-4 mt-1 mb-1"
                  onClick={handleContact}
                >
                  Contact
                </button>

                <h4>Features</h4>
                <ul>
                  <div className="points">
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>Landing Page</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Domain + Hoisting</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>01-05 Pages</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>Cross-browser Support</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Digital Marketing</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>SEO Service</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Email Marketing</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineCheck />
                        <p>24*7 Support</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Admin Panel</p>
                      </span>
                    </li>
                    <li>
                      <span className="icon-text">
                        <AiOutlineClose />
                        <p>Business Email</p>
                      </span>
                    </li>
                  </div>
                  
                </ul>
              </div>
            </Paper>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Pricing;
