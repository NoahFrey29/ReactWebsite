import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <>
      <section id='cards'>
        <div id='placeholder'/>
        <div className='cards'>
           <h1>Check out my Work Terms and Co-op Experiences:</h1>
              <div className='cards__container'>
                  <div className='cards__wrapper'>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/smile.jpg' // add standing in front of score building
                              text='QA Automation Engineer at theScore - WT1'
                              label='Work Term 1 - S2024'
                              path='/work-term-one' />
                          <CardItem
                              src='images/thescore2.jpg'
                              text='QA Automation Engineer at theScore - WT2'
                              label='Work Term 2 - F2024'
                              path='/work-term-two' />
                      </ul>
                      <ul className='cards__items'>
                          <CardItem
                              src='images/hpe.jpg'
                              text='Software Developer Intern at Hewlett Packard Enterprise'
                              label='Summer 2023 at HPE'
                              path='/hpe' />
                          <CardItem
                              src='images/img-2.jpg'
                              text='Work Terms 3, 4, 5'
                              label='Future Work - TBD'
                              path='/tbd' />
                          <CardItem
                              src='images/img-8.jpg' // resume clipart
                              text='Check out my Resume!'
                              label='My Resume'
                              path='/resume' />
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

export default Cards;