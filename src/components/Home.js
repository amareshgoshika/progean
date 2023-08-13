import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Slides from './Slides';
import { Component } from "react";
import './Home.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
class Home extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Container className="header-container">
          <Header />
        </Container>
        <div className="App">
          <header className="App-header">
            <div className="container-landing">
              <Row>
                <Col md={6} className="landingImage">
                </Col>
                <Col md={6} className="enrollNowContainer">
                 <h2 id="transformYourBusiness">Start your Carrier at </h2>
                  <h1 className="progeanAnimation text-right">
                     <span>P</span>
                     <span>R</span>
                     <span>O</span>
                     <span>G</span>
                     <span>E</span>
                     <span>A</span>
                     <span>N</span>
                   </h1>
                </Col>
              </Row>
            </div>
            <div className="container-hero-head">
              <div className="container-empower">
                <h1 className="label1">Empowering your business through technology.</h1>
                <p className="label2">A team of experts dedicated to help your business succeed by providing innovative technology solutions that are tailored to your specific needs.</p>
              </div>
            </div>
            <div className="slides-container">
               <Slides />
            </div>
            <div className="footer-container">
               <Footer />
            </div>
          </header>
        </div>
       </div>
    )
  }
}

export default Home;



