import React from 'react';
import { FaEnvelope, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import userPhoto from "../../images/user-photo.jpeg";
import './Card.scss';

function Card(props) {
  return (
    <div className='card'>
      <img className='userPhoto' src={userPhoto} alt='profile avatar' />
      <div className='container'>
        <div className='userInfo'>
          <h1>Amily Jackson</h1>
          <h3>Frontend Developer</h3>
          <a href='/#'>amilyjacksona.website</a>
        </div>
        <div className='buttonBox'>
          <a className='button' href='/#'><FaEnvelope className='icon'/>Email</a>
          <a className='button' href='/#'><FaLinkedin className='icon'/>LinkedIn</a>
        </div>
        <div className='aboutText'>
          <h2>About</h2>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I
            try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
      </div>
      <div className='socials'>
        <a href="/#"><FaTwitterSquare/></a>
        <a href="/#"><FaFacebookSquare/></a>
        <a href="/#"><FaInstagramSquare/></a>
        <a href="/#"><FaLinkedin/></a>
        <a href="/#"><FaGithubSquare/></a>
      </div>
    </div>
  );
}

export default Card;