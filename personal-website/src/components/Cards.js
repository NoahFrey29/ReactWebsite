import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <>
      <section id='cards'>
        <div id='placeholder'/>
        <div className='cards'>
           <h1>Check out my Work Terms!</h1>
              <div className='cards__container'>
                  <div className='cards__wrapper'>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/smile.jpg'
                              text='Explore the hidden waterfall deep inside the Amazon Jungle'
                              label='Adventure'
                              path='/' />
                          <CardItem
                              src='images/smile.jpg'
                              text='Travel through the Islands of Bali in a Private Cruise'
                              label='Luxury'
                              path='/' />
                      </ul>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/smile.jpg'
                              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                              label='Mystery'
                              path='/' />
                          <CardItem
                              src='images/smile.jpg'
                              text='Experience Football on Top of the Himilayan Mountains'
                              label='Adventure'
                              path='/' />
                          <CardItem
                              src='images/img-8.jpg'
                              text='Ride through the Sahara Desert on a guided camel tour'
                              label='Adrenaline'
                              path='/' />
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

export default Cards;