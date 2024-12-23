import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="footer" className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h1>A little bit about me...</h1>
              <p class="about-me">My name is Noah Frey and I am computer science student at the University of Guelph. Right now I am currently interested in both web automation and development!
                I have a schnauzer named Tucker and I love doing cross country in the fall. Please feel free to email me at noahfrey29@gmail.com if you have any questions!
              </p>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='footer-logo' onClick={handleClick}>
                My Personal Website<i className='fa-solid fa-laptop-code'/>
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='https://github.com/NoahFrey29'
              target='_blank'
              aria-label='GitHub'
            >
              <i class="fa-brands fa-github"/>
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/29-noah-frey/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;