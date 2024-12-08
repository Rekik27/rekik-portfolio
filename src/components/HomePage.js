import React from 'react';
import profileImage from '../assets/images/profile.jpg'; 
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <h2>Welcome to My Portfolio</h2>
      <p>I am a Junior Software Engineer passionate about building innovative software solutions.</p>
      <img src={profileImage} alt="Rekik Mengstu" className="profile-photo" />
    </div>
  );
};

export default HomePage;
