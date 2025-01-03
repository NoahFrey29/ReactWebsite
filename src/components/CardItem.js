import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  const handleClick = (e) => {
    if (props.path === '/resume.pdf') {
      e.preventDefault();
      window.open(props.path, '_self');
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path} onClick={handleClick}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Pic'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;