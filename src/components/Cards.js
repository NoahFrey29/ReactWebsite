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
                              src={require('../images/thescore-office.jpeg')}
                              text='QA Automation Engineer at theScore - WT3'
                              label='Work Term 3 - S2025'
                              path='/work-term-three' />
                          <CardItem
                              src={require('../images/work-term-one.jpg')}
                              text='QA Automation Engineer at theScore - WT1 & WT2'
                              label='Work Term 1 and 2 - S2024 & F2024'
                              path='/work-term-two' />
                      </ul>
                      <ul className='cards__items'>
                          <CardItem
                              src={require('../images/hpe.jpg')}
                              text='Software Developer Intern at Hewlett Packard Enterprise'
                              label='Summer 2023 at HPE'
                              path='/hpe' />
                          <CardItem
                              src={require('../images/img-2.jpg')}
                              text='Work Terms 4 and 5'
                              label='Future Work - TBD'
                              path='/tbd' />
                          <CardItem
                              src={require('../images/img-8.jpg')}
                              text='Check out my Resume!'
                              label='My Resume'
                              path='/resume.pdf' />
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

export default Cards;