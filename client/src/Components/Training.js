import React, { useEffect, useState } from "react";
import CareerNav from "./CareerNav";
import { Container } from "react-bootstrap";
import { fetchInternship } from "./ApiServices";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

const Training = () => {
  const [internship, setInternship] = useState([]);
  const navigate = useNavigate();

  const handleInternship = (internshipId) => {
    navigate(`/internshipdetails/${internshipId}`);
  }

  useEffect(() => {
    const fecthInternshipData = async () => {
      try {
        const response = await fetchInternship();
        setInternship(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthInternshipData();
  }, []);

  return (
    <>
      <CareerNav />
      <div className="service-section">
        <h1>Training and Internship opportunities</h1>
      </div>
      <Container>
        <div>
          {internship.map((internship) => (
            <Paper elevation={2} className="jobposts">
              <div key={internship._id}>
                <h3>{internship.title}</h3>
                <h6>B2World</h6>
                <p>
                  Duration: {internship.duration} months | Stipened: {internship.stipened} | {internship.type} |{" "}
                  {internship.experience} 
                </p>
                <button
                  onClick={() => handleInternship(internship._id)}
                  type="button"
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
                >
                  View Details
                </button>
              </div>
            </Paper>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Training;
