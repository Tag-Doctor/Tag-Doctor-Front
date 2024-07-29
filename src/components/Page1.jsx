import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Page1.css';
import HomeLogo from '../imgs/Home_Logo.png'; // 이미지 import

function Page1() {
  const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState('');

  const handleNext = () => {
    if (selectedAge) {
      navigate('/page2');
    }
  };

  const ageGroups = [
    'Less than 10', '10-19', '20-29', '30-39',
    '40-49', '50-59', '60-69', 'over 70'
  ];

  return (
    <div className="container">
      <button className="info-button">?</button>
      <button className="home-button" onClick={() => navigate('/')}>
        <img src={HomeLogo} alt="Home" className="home-logo" /> Home
      </button>
      <h1>Your age?</h1>
      <div className="progress">
        <div className="progress-step active">1</div>
        <div className="progress-step">2</div>
        <div className="progress-step">3</div>
        <div className="progress-step">4</div>
        <div className="progress-step">5</div>
      </div>
      <div className="age-buttons">
        {ageGroups.map((age, index) => (
          <button
            key={index}
            className={`age-button ${selectedAge === age ? 'selected' : ''}`}
            onClick={() => setSelectedAge(age)}
          >
            {age}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="nav-button" onClick={() => navigate('/')}>Previous</button>
        <button className="nav-button" onClick={handleNext}>Next</button>
        <button className="nav-button" onClick={() => navigate('/page2')}>Skip</button>
      </div>
      <footer className="footer">
        <h4>Tag-Doctor</h4>
      </footer>
    </div>
  );
}

export default Page1;