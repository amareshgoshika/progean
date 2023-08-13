import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Create this CSS file for styling
import slideImage1 from '../images/slideImage1.png';
import slideImage2 from '../images/slideImage2.png';
import slideImage3 from '../images/slideImage3.png';
import slideImage4 from '../images/slideImage4.png';
import slideImage5 from '../images/slideImage5.png';
import slideImage6 from '../images/slideImage6.png';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="sliderFile">
    <Slider {...settings}>
      <div className="slideImage">
        <img src={slideImage1} alt="Slide 1" />
        <h1 className="slideHeading">IT Strategy Consulting</h1>
        <h5 className="slideContent">Our team of strategy consultants works with clients to identify their business objectives and develop a roadmap for achieving them through the use of technology. This includes assessing the clients current technology infrastructure and making recommendations for improvement.</h5>
      </div>
      <div className="slideImage">
        <img src={slideImage2} alt="Slide 1" />
        <h1 className="slideHeading">Enterprise Resource Planning</h1>
        <h5 className="slideContent">We offer implementation, customization, integration, and support services for various ERP systems, such as Oracle E-Business Suite, SAP and Microsoft Dynamics. Our implementation approach includes a detailed analysis of the clients current processes, the definition of the target processes, and the implementation of the chosen solution. We also work closely with our clients during the customization phase, to ensure that the ERP solution is configured to meet their specific needs and requirements.</h5>
      </div>
      <div className="slideImage">
        <img src={slideImage3} alt="Slide 1" />
        <h1 className="slideHeading">Cybersecurity</h1>
        <h5 className="slideContent">Protecting client data is a top priority for us. We offer a range of cybersecurity services, including penetration testing, vulnerability assessments, and security audits.</h5>
      </div>
      <div className="slideImage">
        <img src={slideImage4} alt="Slide 1" />
        <h1 className="slideHeading">System Design and Integration</h1>
        <h5 className="slideContent">We have extensive experience designing and integrating complex IT systems. This includes designing custom solutions for clients as well as integrating off-the-shelf products into their existing technology stack.</h5>
      </div>
      <div className="slideImage">
        <img src={slideImage5} alt="Slide 1" />
        <h1 className="slideHeading">Managed Services</h1>
        <h5 className="slideContent">For clients who want to outsource their IT operations, we offer managed services that include monitoring, maintenance, and support for their technology infrastructure. This helps clients reduce their IT costs and free up internal resources to focus on core business activities.</h5>
      </div>
      <div className="slideImage">
        <img src={slideImage6} alt="Slide 1" />
        <h1 className="slideHeading">Cloud Computing</h1>
        <h5 className="slideContent">Our cloud computing services help clients move their applications and data to the cloud, providing them with increased flexibility, scalability, and security. We have experience with a variety of cloud platforms, including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform.</h5>
      </div>
    </Slider>
    </div>
  );
};

export default Carousel;
