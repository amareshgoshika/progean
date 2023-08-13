import { Component } from "react";
import logoWhite from '../images/logo-white.png';
import { Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope, FaLinkedin } from 'react-icons/fa';

class Footer extends Component {
  render() {
    return (
      <div className="">
        <div className="footer">
          <Row>
            <h1 className="startYourDay"> Start your day at <b>PROGEAN</b> </h1>
          </Row>
          <button className="joinNow">Join Now</button>
        </div>
        <div className="footerCopyright">
          <Row>
            <img src={logoWhite} alt="Hero" className="footerImage" />
            <p className="copyright"> Innovative technology solutions, <br />delivered with care.</p>
            <Col md={6}>
              <h5 className="copyright"> About Us </h5>
              <p className="aboutUs"> Progean Technologies is an IT products and services company offering software development and consulting solutions, enabling our customers succeed by delivering innovative and reliable solutions that meet their unique needs.</p>
              <p className="aboutUs"> At Progean, we believe in the power of technology to transform businesses and drive growth. It is our goal to be a trusted advisor and partner to our clients, helping them navigate the constantly evolving world of IT and achieve success. We are committed to continuously improving and expanding our services to meet the changing needs of our clients and the industry.</p>
              <p className="aboutUs"> Our team of highly skilled and dedicated personnel ensures that we provide superior service to our customers. The diverse experience and fresh perspectives of our team enhance the value of the solutions we offer and lead to greater customer satisfaction.</p>
            </Col>
            <Col md={6}>
              <h5 className="copyright"> Contact Us </h5>
              <div class="icons">
                <a href="#" class="icon icon--instagram">
                  <FaInstagram />
                </a>
                <a href="#" class="icon icon--twitter">
                  <FaTwitter />
                </a>
                <a href="#" class="icon icon--facebook">
                  <FaLinkedin />
                </a>
                <a href="#" class="icon icon--envelop">
                  <FaEnvelope />
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Footer;