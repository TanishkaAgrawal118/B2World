import React, { useEffect } from 'react'
import NavigationBar from './NavigationBar'
import backgroundImage from '../Images/digital1.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import digital from '../Images/digital2.png';
import digital1 from '../Images/digital3.jpg';
import Connect from './Connect';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Design = () => {
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
          height: "60vh",
          width: "98.9vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginBottom:"80px"
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
          <p className="headContact">Design and Branding</p>
        </div>
      </div>

      <div className='web-content'>
          <Container>
            <Row>
                <Col lg={6} data-aos="fade-right">
                    <img src={digital}></img>
                </Col> 
                <Col lg={6} data-aos="fade-left">
                <p>B2World as the emerging UI design agency, with its talented team of designers ensures that you as the prime user are more than comfortable enough to navigate & get the experience like never before. What we primarily focus on is designing the visual elements of the product’s digital interface. Whether you are using a smartphone or a PC to view the same website, the appearance & the layout of the webpage should be soothing to the eye with ease of accessibility.</p>
                    <h4>UX Designing</h4>
                    <p>Discover exceptional designs that set your product apart. Were you aware that UX stands for "User Experience," serving as a crucial link between the user and the product? The key focus lies in the overall user experience across devices and products, emphasizing how well users can connect with them. As the premier UX Design company, B2World ensures a superior experience. We take pride in delivering head-turning UX designs for your brand and business, ensuring your constant engagement with our remarkable product delivery. Applause to our skilled team, whose expertise consistently guides us in delivering an excellent user experience by staying abreast of relevant skills.</p>
                </Col>
            </Row>

            <Row>
                <Col lg={6} data-aos="fade-right">
                <h4>Redefining Your Brand</h4>
                <p>Explore distinctive designs that define your brand's identity. Were you aware that BaaS stands for "Branding as a Service," acting as a crucial link between your brand and its audience? The primary focus is on the overall branding experience, highlighting how effectively your audience can connect with your brand. B2World Branding Hub takes pride in being a premier provider of Branding as a Service, ensuring an unparalleled branding experience for your business. We are thrilled to present you with attention-grabbing branding solutions that will keep you engaged with our exceptional service delivery. Applause to our skilled team, whose expertise consistently leads us in delivering an outstanding branding experience by staying abreast of relevant skills.</p>
                </Col>
                <Col lg={6} data-aos="fade-left">
                    <img src={digital1}></img>
                </Col>
            </Row>
            <Connect/>
          </Container>
    
      </div>
      <Footer/>
   </>
  )
}

export default Design
