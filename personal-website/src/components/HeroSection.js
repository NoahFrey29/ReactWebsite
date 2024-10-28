import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import ScrollHandler from './HandleScroll';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Noah Frey</h1>
      <p>Hi, I'm Noah, and I am a student at the University of Guelph studying computer science!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={(e) => {
            ScrollHandler.handleScroll(e, 'footer');}
          }
        >
          Learn more!
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={(e) => {
            ScrollHandler.handleScroll(e, 'cards');}
          }
        >
          Work Terms
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;