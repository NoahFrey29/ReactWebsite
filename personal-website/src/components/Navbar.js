import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import {Button} from './Button';
import ScrollHandler from './HandleScroll'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                My Personal Website<i className='fa-solid fa-laptop-code'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    to='/products'
                    className='nav-links'
                    onClick={(e) => {
                      closeMobileMenu();
                      ScrollHandler.handleScroll(e, 'cards');
                    }}
                  >
                    Work Terms
                  </Link>
                </li>
            </ul>
              {button && <Button 
                buttonStyle="btn--social" 
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/NoahFrey29", "_blank", "noopener noreferrer");
                }}
              >
                GitHub
                <i class="fa-brands fa-github"/>
              </Button>}
              {button && <Button 
                buttonStyle="btn--social" 
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.linkedin.com/in/29-noah-frey/", "_blank", "noopener noreferrer");
                }}
              >
                LinkedIn
                <i class="fa-brands fa-linkedin"/>
              </Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
