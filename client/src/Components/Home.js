import React from "react";
import NavigationBar from "./NavigationBar";
import { Col, Container, Row } from "react-bootstrap";
import ServiceBox from "./ServiceBox";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleContact = () =>{
    navigate('/contact')
  }
  return (
    <>

      <div className="relative inset-0 h-auto w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="relative bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
        <NavigationBar />
          <Container>
            <Row>
              <div className="sideText">
                <h1>
                  Turning Dreams into Reality, Explore the extraordinary at
                  B2World.
                </h1>
                <p>
                  Embracing innovation, B2World stands out as a premier provider
                  of bespoke IT solutions, breathing new vitality into
                  businesses and orchestrating seamless journeys. All credit
                  goes to our exceptional team, ensuring your ventures thrive
                  with unparalleled expertise.
                </p>
                <button className="transition-background inline-flex h-12 items-center justify-center rounded-md border border-gray-800 bg-gradient-to-r from-gray-100 via-[#c7d2fe] to-[#8678f9] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-gray-950 duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 mt-5" style={{marginBottom:"109px"}} onClick={handleContact}>
                  Contact Us
                </button>
              </div>
            </Row>
          </Container>
          </div>
          </div>
      <ServiceBox/>

    </>
  );
};

export default Home;


   {/* <NavigationBar />
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
          <Container>
            <Row>
              <div className="sideText">
                <h1 className="gradient max-w-4xl font-semibold leading-tight">
                  Turning Dreams into Reality, Explore the extraordinary at
                  B2World.
                </h1>
                <p>
                  Embracing innovation, B2World stands out as a premier provider
                  of bespoke IT solutions, breathing new vitality into
                  businesses and orchestrating seamless journeys. All credit
                  goes to our exceptional team, ensuring your ventures thrive
                  with unparalleled expertise.
                </p>
                <button className="transition-background inline-flex h-12 items-center justify-center rounded-md border border-gray-800 bg-gradient-to-r from-gray-100 via-[#c7d2fe] to-[#8678f9] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-gray-950 duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
                  Contact Us
                </button>
              </div>
            </Row>
          </Container>
        </div>
      </div> */}