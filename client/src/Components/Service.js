import React from 'react'
import NavigationBar from './NavigationBar'
import { Col, Row } from 'react-bootstrap'
import ServiceBox from './ServiceBox';


const side = new URL('../Images/image11.jpg',import.meta.url);

const Service = () => {
  return (
    <>
        <NavigationBar/>
        <div className='service-section'>
            <h1>SERVICES</h1>
        </div>
        <div className='service-side'>
            <Row>
                <Col lg={6} md={6} sm={6}>
                    <img src={side} alt='side' className='sideImage'></img>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <h3>Services That Keep Your Business Synchronised</h3>
                    <p>Discover the foundation for your brand and business with B2World, your exclusive partner for IT solutions and digital marketing services. In today's digital era, certain tools can make your product and business go viral. B2World offers a diverse range of services that can elevate your brand both directly and indirectly. Sometimes, a single service may seem sufficient, but when interconnected with others, it completes the business puzzle. Take, for instance, a website that attracts various traffic. What makes it truly special is the ability to convert that traffic into leads. This is where services like UI/UX come into play. We provide a comprehensive selection of attractive and customized services tailored just for you. Whether you're starting out or looking to give your product an extra edge, we're here to discuss and develop solutions. We serve as your gateway – just give it a push, and we're ready to help you thrive.</p>
                </Col>
            </Row>
        </div>
        <ServiceBox/>
    </>
  )
}

export default Service
