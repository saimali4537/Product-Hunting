import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./about-section.css";
import aboutImg from "../../images/img2.jpg";
import {
    FaCheckCircle
}from "react-icons/fa";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "-150px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
            <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Product Hunting</h2>
              <p className="section__desc">
              Product Hunting is platform which will analyzes the popularity of top search queries in Google Search across various regions and languages. The website uses graphs to compare the search volume of different queries over time. 
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__desc d-flex align-items-center gap-2">
                <FaCheckCircle/> Find Trendings
                </p>

                <p className="section__desc d-flex align-items-center gap-2">
                <FaCheckCircle/>Find Keywords
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__desc d-flex align-items-center gap-2">
                <FaCheckCircle/> Find Searches&nbsp;&nbsp;
                </p>

                <p className="section__desc d-flex align-items-center gap-2">
                <FaCheckCircle/> Book Popular
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
          <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
