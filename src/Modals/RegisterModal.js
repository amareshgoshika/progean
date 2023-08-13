import React from 'react';
import './RegisterModal.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const RegisterModal = ({ isOpen, onClose }) => {

  const navigate = useNavigate();

  const handleCandidateRegistration = () => {
    navigate('/candidate-registration');
  };


  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-icon" onClick={onClose}>
          &times;
        </span>
        <div className="button-group">
          <Button variant="primary" className="RegisterModelButton">
            Login
          </Button>
          <Button variant="primary" className="RegisterModelButton"  onClick={handleCandidateRegistration}>
            Candidate Registration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
