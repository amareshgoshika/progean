import { Component } from "react";
import React from 'react';
import logo from '../images/logo.png';
import './Header.css';
import Modal from '../Modals/RegisterModal';
import { FaUser } from 'react-icons/fa';

class Header extends Component {

  state = { clicked: false };

  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };


  render() {

    const { isModalOpen } = this.state;

    return (
        <nav>
          <a href="#"><img src={logo} alt="Logo" className="header-logo"/></a>
          <div>
            <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li><a className="active" href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#" onClick={ this.openModal }><FaUser /></a></li>
              <Modal isOpen={isModalOpen} onClose={ this.closeModal } />
            </ul>
          </div>

          <div id="mobile" onClick= { this.handleClick}>
            <i id="bar" className={ this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
          </div>
        </nav>
    )
  }
}

export default Header;
