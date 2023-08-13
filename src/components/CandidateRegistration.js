import React from 'react';
import { useNavigate } from 'react-router-dom';

const CandidateRegistration = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Candidate Registration Page</h1>
      {/* Your registration form and content */}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default CandidateRegistration;
