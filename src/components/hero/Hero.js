import React from 'react';
import './Hero.css';
import heroImage from './airbnbGroup.png';

function Hero() {
  return (
    <section className="hero-group">
        <img src={heroImage} alt="Airbnb Group"/>
        <div className='hero-text'>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by
             one-of-a-kind hosts-all without leaving home.</p>
        </div>
    </section>
  );
}

export default Hero;
