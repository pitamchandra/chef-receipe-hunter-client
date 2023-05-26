import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link  } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container className="py-4">
        <Row className="m-0">
          <Col sm={12} md={3} className="p-3 text-light text-md-left">
            <h5>About Us</h5>
            <p>We are a team of passionate chefs who love to cook and share our recipes with the world.</p>
          </Col>
          <Col sm={12} md={3} className="p-3 text-light text-md-left">
            <h5>Contact Us</h5>
            <p>123 Main St, Dhaka, Bangladesh</p>
            <p>Phone: +880-123456789</p>
            <p>Email: info@chefwebsite.com</p>
          </Col>
          <Col sm={12} md={3} className="p-3 text-light text-md-left">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className='text-warning'>Home</Link></li>
              <li><Link to="#" className='text-warning'>Recipes</Link></li>
              <li><Link to="#" className='text-warning'>About Us</Link></li>
              <li><Link to="#" className='text-warning'>Contact Us</Link></li>
            </ul>
          </Col>
          <Col sm={12} md={3} className="p-3 text-light text-md-left">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item bg-warning fs-5 p-2 m-2"><Link to="#"> <FaFacebookF className='text-black'></FaFacebookF> </Link></li>
              <li className="list-inline-item bg-warning fs-5 p-2 m-2"><Link to="#"> <FaTwitter className='text-black'></FaTwitter> </Link></li>
              <li className="list-inline-item bg-warning fs-5 p-2 m-2"><Link to="#"> <FaInstagram className='text-black'></FaInstagram> </Link></li>
            </ul>
          </Col>
        </Row>
        <Row className="m-0">
          <Col className="p-3 text-light text-md-center">
            <p className="mb-0">&copy; 2023 Chef Website. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
