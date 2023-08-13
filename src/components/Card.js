import { Component } from "react";
import logoWhite from '../images/logo-white.png';
import { Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaFacebook, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import slideImage1 from '../images/slideImage1.png';

class Card extends Component {
  render() {
    return (
      <div className="">
        <a className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
          <div className="h-72 border-b-2 border-palette-lighter relative">
            <img
              src={slideImage1}
              layout="fill"
              className="transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <div className="h-48 relative">
            <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
              A
            </div>
            <div className="text-lg text-gray-600 p-4 font-primary font-light">
              C
            </div>
            <div
              className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter
              rounded-tl-sm triangle"
            >
            </div>
          </div>
        </a>
        <a className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
                  <div className="h-72 border-b-2 border-palette-lighter relative">
                    <img
                      src={slideImage1}
                      layout="fill"
                      className="transform duration-500 ease-in-out hover:scale-110"
                    />
                  </div>
                  <div className="h-48 relative">
                    <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                      A
                    </div>
                    <div className="text-lg text-gray-600 p-4 font-primary font-light">
                      C
                    </div>
                    <div
                      className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter
                      rounded-tl-sm triangle"
                    >
                    </div>
                  </div>
                </a>
      </div>

    )
  }
}

export default Card;