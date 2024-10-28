import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--social'];

const SIZES = ['btn--medium', 'btn--large'];

const handleScroll = (e) => {
  e.preventDefault();
  const section = document.getElementById('cards');
  section.scrollIntoView({ behavior: 'smooth' });
};

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <a className='btn-mobile'href='#cards' onClick={handleScroll}>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
            {children}
            </button>
        </a>
    );
};