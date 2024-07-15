import React, { useEffect } from 'react'
import NavigationBar from './NavigationBar'
import backgroundImage from '../Images/seoBack.png';
import { Col, Container, Row } from 'react-bootstrap';
import app  from '../Images/seo1.png';
import app2 from '../Images/seo2.png'
import Connect from './Connect';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Seo = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);
  return (
    <>
        <NavigationBar/>
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
          marginBottom:"60px",
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
          <p className="headContact">SEO Optimization</p>
        </div>
      </div>

      <div className='web-content'>
        <Container>
          <Row>
            <Col lg={6}>
              <img src={app2} alt='app' data-aos="fade-right"></img>
            </Col>
            <Col lg={6} data-aos="fade-left">
              
              <p>SEO services revolve around optimizing your webpage or content to increase visibility on search engines like Google and Bing. This is achieved by strategically placing relevant keywords throughout your page, ultimately boosting its ranking. The primary goal of SEO is to enhance the quantity of traffic directed to your website, and it is recognized as a long-term strategy. As the leading provider of SEO services, you have the opportunity to expose your brand to a broader audience.</p>
              <h4>But Why SEO?</h4>
              <p>Opting for our SEO service transforms your business by significantly increasing leads and sales. Your product gains visibility on search engines, boosting conversion chances and establishing strong customer confidence. With a substantial percentage of quality traffic, brand awareness multiplies, considering that 89% of the audience prefers online product searches. The need for paid advertising diminishes, making SEO a cost-effective approach. Operating without SEO is like a train without an engine for your business. The stability in ranking and overall satisfaction from a well-executed SEO strategy further solidify its indispensable role in navigating the digital landscape.</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} data-aos="fade-right">
              <h4>What Do We Have In Store For You?</h4>
              <p>We begin by engaging in a comprehensive discussion to identify the most suitable option for enhancing your business prospects. Following this consultation, we conduct a thorough analysis of your project to gather essential insights. Our focus is on delivering captivating content for both your website and products. We enhance the visual appeal of your website through careful selection of graphics and fonts. Additionally, we optimize keywords to ensure your business prominently appears on search engines. Our commitment extends to effective link building strategies and keeping your website consistently updated for optimal performance.</p>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <img src={app} alt='app'></img>
            </Col>
          </Row>
        </Container>
          <Connect/>

      </div>
      <Footer/>
    </>
  )
}

export default Seo
