import React, { useEffect } from "react";
import NavigationBar from "./NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import backgroundImage from "../Images/websiteDev.jpeg";
import web1 from '../Images/website1.png';
import web2 from '../Images/website2.svg';
import Connect from "./Connect";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Website = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
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
          <p className="headContact">Website Development</p>
        </div>
      </div>

      <div className="web-content">
        <Container>
        <h2>Make Your Business Unmissable</h2>
        <Row>
            <Col lg={6} data-aos="fade-right">
                <img src={web2} alt="web"></img>
            </Col>
            <Col lg={6} data-aos="fade-left">
            <p>A website is more than just a virtual presence; it's the unmistakable identity of your business. We excel in capturing the attention of viewers, ensuring that your webpage stands out.</p>
            <p>As the leading website development company, B2world is passionate about crafting the perfect website for your business. Our dedication ensures the creation of a SEO-friendly website that not only captures attention but also serves as the true identity card of your business. Your journey into understanding the intricacies of web designing and development concludes here.</p>
            <h4>Customized Excellence</h4>
            <p>Your ideas shape our creations. Feel free to share your unique requirements, and we'll bring your dreams to life. At B2world , we tailor-make websites that align perfectly with your business vision.</p>
            </Col>
        </Row>

        <Row>
            <Col lg={6} data-aos="fade-right">
                <h4>Elevate Your Online Presence with B2world</h4>
                <p>Your Premier Web Development Partner! At B2world, we don't just build websites; we craft digital experiences that captivate and resonate with your audience. As the leading web development company , we seamlessly blend creativity with robust UX technology and employ the perfect color combinations to ensure your website not only stands out but is also adored by your target audience. Because, in the digital realm, first impressions matter the most.</p>
                <h4>Accelerate Your Business</h4>
                <p>With B2world, you're not just getting a website; you're setting the stage for your business to skyrocket. Our tailor-made websites are designed to propel your brand to new heights.</p>
                <h4>Synchronize Your Business and Brand</h4>
                <p>Whether you're starting a new venture or looking to establish a powerful online presence for your existing offline store, our team of skilled web designers is eager and excited to assist you. We believe in creating websites that seamlessly synchronize with your business and elevate your brand.</p>
            </Col>
            <Col lg={6} data-aos="fade-left">
                <img src={web1} alt="web"></img>
            </Col>
        </Row>
       
        </Container>
     </div>
      <Connect/>
      <Footer/>
    </>
  );
};

export default Website;
