import React, { useEffect } from 'react'
import NavigationBar from './NavigationBar'
import aiml from '../Images/aiml1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row } from 'react-bootstrap'
import aiml1 from '../Images/aiml2.jpg'
import aiml2 from '../Images/aiml3.png'
import Footer from './Footer';
import Connect from './Connect';


const Aiml = () => {
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
          backgroundImage: `url(${aiml})`,
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
          <p className="headContact">Artificial Intelligence and Machine Learning</p>
        </div>
      </div>


      <div className='web-content'>
          <Container>
            <Row>
                <Col lg={6} data-aos="fade-right">
                    <img src={aiml1}></img>
                </Col> 
                <Col lg={6} data-aos="fade-left">
                    <h4>We Grasp Your Market As A Growing Digital Agency.</h4>
                    <p>B2world stands out as a pioneering force in digital marketing, elevating businesses to new heights. We delve deep into understanding your product before tailoring our input. Proudly your preferred digital marketing company, we urge business owners to consider leveraging our services (SEO, SEM, SMM) for effective promotion. As the foremost digital marketing agency, B2world intricately connects the dots within your niche. We prioritize engaging and lucrative content to secure a lasting place in the hearts of your audience, ensuring recognition for your product. Equipped with specialized strategies for your market, B2world propels your business forward, facilitating growth. Our exceptional team is the driving force behind keeping you delighted in the ever-evolving market landscape.</p>
                </Col>
            </Row>

            <Row>
                <Col lg={6} data-aos="fade-right">
                <h4>Trendsetting Digital Marketing Company Is Here</h4>
                <p>In the dynamic landscape of online connectivity, establishing a robust digital presence is crucial for effectively reaching your target audience. The competition in the digital sphere is fierce, making it imperative for you to seize the opportunity and take action. Leveraging marketing tools like SEO and SEM can prove instrumental in enhancing your visibility. This presents a favorable opportunity to cater to your specific niche audience, allowing you to run and monitor campaigns tailored to their preferences. Furthermore, by focusing on return on investments (ROI), you not only gain exposure but also reap a portion of what you've invested, making your digital marketing endeavors a strategic and rewarding venture.</p>
                </Col>
                <Col lg={6} data-aos="fade-left">
                    <img src={aiml2}></img>
                </Col>
            </Row>
            <Connect/>
          </Container>
    
      </div>
      <Footer/>
    </>
  )
}

export default Aiml
