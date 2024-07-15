import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoCall, IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const box1 = new URL("../Images/app1.avif", import.meta.url);
const box2 = new URL("../Images/website.avif", import.meta.url);
const box3 = new URL("../Images/digital.jpg", import.meta.url);
const box4 = new URL("../Images/aiml.png", import.meta.url);
const box5 = new URL("../Images/seo.png", import.meta.url);
const box6 = new URL("../Images/design.avif", import.meta.url);
const client1 = new URL("../Images/client1.jpg", import.meta.url);
const client2 = new URL("../Images/client2.jpg", import.meta.url);
const work1 = new URL("../Images/image8.jpg", import.meta.url);
const work2 = new URL("../Images/image9.jpg", import.meta.url);
const work3 = new URL("../Images/image10.jpg", import.meta.url);
const logo = new URL("../Images/logo.png", import.meta.url);

const ServiceBox = () => {
  return (
    <>
      <div
        className="relative top-0 z-0 h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] part2"
        // style={{ marginTop: "100vh" }}
      >
        <Container>
          <h1>What Services, We Give You!</h1>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceBox">
                <img src={box1} alt="box1"></img>
                <h6>Website Development</h6>
                <p>
                  Elevate your business with a must-have website! The day is
                  approaching when it's crucial to link your business online.
                  Act now and thrive in the digital age!
                </p>
                <a href="/website">Explore</a>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceBox">
                <img src={box2} alt="box2"></img>
                <h6>Android App Development</h6>
                <p>
                  We excel in the creation of unique Android applications that
                  elevate your business to new heights, turning it into a
                  satellite of innovation and success.
                </p>
                <a href="/android">Explore</a>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceBox">
                <img src={box3} alt="box3"></img>
                <h6>Digital Marketing</h6>
                <p>
                  Unlock the boundless potential that arises from the seamless
                  integration of technology and marketing for your
                  business.Embark on a journey of exploration and innovation.
                </p>
                <a href="/digital">Explore</a>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceBox">
                <img src={box4} alt="box4"></img>
                <h6>AIML</h6>
                <p>
                  Transform your business landscape with our advanced AI and
                  machine learning services, meticulously crafted to boost
                  efficiency, foster innovation, and open doors to new
                  opportunities in the digital realm.
                </p>
                <a href="/aiml">Explore</a>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceBox">
                <img src={box5} alt="box5"></img>
                <h6>SEO Optimization</h6>

                <p>
                  Supercharge your online visibility and dominate search engine
                  rankings with our cutting-edge SEO optimization services,
                  designed to propel your business to unparalleled success in
                  the digital realm.
                </p>
                <a href="/seo">Explore</a>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceBox">
                <img src={box6} alt="box6"></img>
                <h6>Design and Branding</h6>
                <p>
                  Revitalize your brand identity through our extensive range of
                  professional design and branding services, meticulously
                  crafted to elevate your business.
                </p>
                <a href="/digital">Explore</a>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="client">
          <h1>Our Esteemed Clients</h1>
          <Container>
            <div>
              <Row>
                <Col lg={4} sm={12}>
                  <img src={client1} alt="client1"></img>
                </Col>
                <Col lg={4} sm={12}>
                  <img src={client2} alt="client2"></img>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        {/* Timeline */}
        <div className="relative h-auto w-full bg-white">
          <div className="absolute h-auto w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
            <div className="work ">
              <h1>How we work</h1>

              <div className="timeline">
                <div className="container1 left-container">
                  <img src={work1} alt="work1"></img>
                  <div className="text-box">
                    <h2>Defining Project Mission</h2>
                    <p>
                      At B2World, we commence each project with a precise
                      mission, a navigational beacon in our tech-driven
                      endeavors. This mission, forged through collaborative
                      discovery and strategic visioning, is the catalyst that
                      propels us forward, aligning cutting-edge technologies
                      with your unique goals. Experience the power of
                      purpose-driven innovation as we define project missions
                      where ideas seamlessly transform into technological
                      reality.
                    </p>
                    <span className="left-container-arrow"></span>
                  </div>
                </div>

                <div className="container1 right-container">
                  <img src={work2}></img>
                  <div className="text-box">
                    <h2>Development & Testing</h2>
                    <p>
                      In the dynamic realm of technology, our "Development and
                      Testing" phase is the heartbeat of innovation.
                      Meticulously crafted by our expert team, this phase
                      seamlessly navigates through the intricacies of coding,
                      ensuring robust software solutions. Rigorous testing,
                      conducted with precision and care, guarantees a flawless
                      end product, setting the stage for the transformative
                      impact our technology brings to your business.
                    </p>
                    <span className="right-container-arrow"></span>
                  </div>
                </div>

                <div className="container1 left-container">
                  <img src={work3}></img>
                  <div className="text-box">
                    <h2>Product Roll Out</h2>
                    <p>
                      The procedure of delivering the product is a finely tuned
                      blend of innovation and effectiveness. Guiding your vision
                      from inception to realization, we adeptly navigate the
                      intricacies of development, guaranteeing the prompt
                      delivery of resilient, customized solutions that surpass
                      all expectations. Our agile approach and steadfast
                      dedication to quality propel your concepts into tangible,
                      market-ready products, culminating in a transformative
                      journey from idea to actuality.
                    </p>
                    <span className="left-container-arrow"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="footer">
              <Row>
                <Col lg={4}>
                  <Col>
                    <img src={logo} alt="logo" className="logo"></img>
                    <p>
                      At B2World, our enthusiasm for technology and its capacity
                      to revolutionize businesses is truly captivating. As a
                      dynamic and pioneering startup, we are dedicated to
                      harnessing the power of innovation.
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
                      M/S BTOW Pvt. Ltd. , Shivam Market, Dalsingsarai,
                      Samastipur (848114), Bihar, IN
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <IoLocationOutline style={{ fontSize: "35px" }} />
                    <p>
                      G04, Sai Baba Temple Road, Silver Springs Layout,
                      Balagere, Bengaluru, Karnataka 560066
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBox;

// <div className="part2">
// <Container>
//   <h1>What Services, We Give You!</h1>
//   <Row>
//     <Col lg={4} md={6} sm={12}>
//       <div className="serviceBox">
//         <img src={box1} alt="box1"></img>
//         <h6>Website Development</h6>
//         <p>
//           Elevate your business with a must-have website! The day is
//           approaching when it's crucial to link your business online.
//           Act now and thrive in the digital age!
//         </p>
//         <a href="#link">Explore</a>
//       </div>
//     </Col>
//     <Col lg={4} md={6} sm={12}>
//       <div className="serviceBox">
//         <img src={box2} alt="box2"></img>
//         <h6>Android App Development</h6>
//         <p>
//           We excel in the creation of unique Android applications that
//           elevate your business to new heights, turning it into a
//           satellite of innovation and success.
//         </p>
//         <a href="#link">Explore</a>
//       </div>
//     </Col>
//     <Col lg={4} md={6} sm={12}>
//       <div className="serviceBox">
//         <img src={box3} alt="box3"></img>
//         <h6>Digital Marketing</h6>
//         <p>
//           Unlock the boundless potential that arises from the seamless
//           integration of technology and marketing for your
//           business.Embark on a journey of exploration and innovation.
//         </p>
//         <a href="#link">Explore</a>
//       </div>
//     </Col>
//     <Col lg={4} md={6} sm={12}>
//       <div className="serviceBox">
//         <img src={box4} alt="box4"></img>
//         <h6>AIML</h6>
//         <p>
//           Transform your business landscape with our advanced AI and
//           machine learning services, meticulously crafted to boost
//           efficiency, foster innovation, and open doors to new
//           opportunities in the digital realm.
//         </p>
//         <a href="#link">Explore</a>
//       </div>
//     </Col>
//     <Col lg={4} md={6} sm={12}>
//       <div className="serviceBox">
//         <img src={box5} alt="box5"></img>
//         <h6>SEO Optimization</h6>
//         <p>
//           Supercharge your online visibility and dominate search
//           engine rankings with our cutting-edge SEO optimization
//           services, designed to propel your business to unparalleled
//           success in the digital realm.
//         </p>
//         <a href="#link">Explore</a>
//       </div>
//     </Col>
//     <Col lg={4} md={6} sm={12}>
//       <div className="serviceBox">
//         <img src={box6} alt="box6"></img>
//         <h6>Design and Branding</h6>
//         <p>
//           Revitalize your brand identity through our extensive range
//           of professional design and branding services, meticulously
//           crafted to elevate your business to unprecedented levels of
//           success.
//         </p>
//         <a href="#link">Explore</a>
//       </div>
//     </Col>
//   </Row>
// </Container>
// </div>
