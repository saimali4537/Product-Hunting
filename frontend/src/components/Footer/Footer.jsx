import React, { useState, useEffect } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import 'bootstrap/dist/css/bootstrap.css';
const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/security",
    display: "Security",
  },

  {
    path: "/privacy",
    display: "Privacy",
  },
  {
    path: "/basic",
    display: "Basic Info",
  },

  {
    path: "/properties",
    display: "Properties",
  },
];


const Footer = () => {
  
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                  <img src={require('../../images/log.png')} width={250} height={80} alt='logo' />
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Product Hunting is a PlaYou can find Trending Products Rightnow available in Global Search 
            Paradigm.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Wah Cantt, Pakistan</p>
              <p className="office__info">Phone: </p>

              <p className="office__info">Email: producthunt@gmail.com</p>

              <p className="office__info">Office Time: 10am - 5pm</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Newsletter</h5>
              <p className="section__description">Subscribe our newsletter</p>
              <div className="newsletter">
                <input style={{padding: '0',  color:'#000000' }} type="email" placeholder="Email" />
                <span style={{color:'blue',cursor:'pointer'}} >
                  <i class="ri-send-plane-line" ></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>This Website is for Educational Purpose.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
