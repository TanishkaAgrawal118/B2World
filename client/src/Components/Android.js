import React, { useEffect } from 'react'
import NavigationBar from './NavigationBar'
import backgroundImage from '../Images/android.jpg';
import { Col, Container, Row } from 'react-bootstrap';
import app  from '../Images/android1.png';
import app2 from '../Images/android2.png'
import Connect from './Connect';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Android = () => {
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
          <p className="headContact">Android Development</p>
        </div>
      </div>

      <div className='web-content'>
        <Container>
          <Row>
            <Col lg={6}>
              <img src={app2} alt='app' data-aos="fade-right"></img>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <h4>Why you need Mobile Apps</h4>
              <p>In the digital era, mobile apps have become essential for businesses, offering a myriad of benefits. They enhance user engagement, increase accessibility, and provide a competitive edge by boosting brand visibility. Mobile apps foster customer loyalty through personalized experiences and offer valuable data insights for strategic decisions. Additionally, they streamline internal processes, improving operational efficiency. By expanding market reach, businesses can tap into new audiences, unlocking growth opportunities. Embrace the transformative power of mobile apps with Webgrid to redefine customer interactions and elevate your brand's success. Connect with us to explore the full potential of mobile apps for your business.</p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} data-aos="fade-right">
              <h4>Business in your pocket, go digital</h4>
              <p>In the modern business landscape, success hinges on talent, enthusiasm, and adaptability. B2worls, synonymous with the synergy between an apk and Android, is your premier partner for mobile application development. Our expert team crafts tailored Android, iOS, and Hybrid applications, backed by thorough testing. From e-commerce to news apps, our portfolio boasts satisfied clients. Connect with us, the top Android app development company, to bring your mobile app vision to life. Whether you're a startup or an established enterprise, B2worls offers concise innovative solutions to elevate your brand in the digital realm. Choose us for success in a competitive market.</p>
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

export default Android
