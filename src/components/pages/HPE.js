import React from 'react'
import '../../App.css';
import './HPE.css';

function HPE() {
  return (
    <section>
      <div>
        <h1>My Experience Working at HPE as a Software Developer Intern</h1>
      </div>
        <div class="container-hpe">
            <div class="text-left-hpe">
            <img src={require('../../images/aug-31-2023.jpeg')} alt="aug31" class="image-wrap-hpe"/>
                <p>I completed a software developer internship at HPE in the summer of 2023, and looking back on that time, I am really grateful for it. Coming just out of first year, I was inexperienced but knew that I wanted to learn as much as possible. HPE welcomed me with open arms and I had the opportunity to work on an ongoing project that I saw through up to its completion.</p>
                <p>During my time here, I got to see my first exposure to the software development life cycle in nearly its entirety, and as the months went on, I found the team relying on me to assist with code reviews, internal testing, and even communicating with Rogers clients on quality assurance requirements. In my last month, I was the QA lead for the project, which not only gave me insight into what was needed for our project and for our internal testing efforts, but hugely improved my communication skills within my team and with clients. HPE was a wonderful place to gain valuable understanding of the SDLC and learn about working within a small and compact team.</p>
            </div>
        </div>
    </section>
  )
}

export default HPE
