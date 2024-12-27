import React from 'react'
import '../../App.css';
import './WorkTermOne.css';

function WorkTermOne() {
    return (
        <section>
          <div>
            <h1>My First Work Term at theScore as a QA Automation Engineer!</h1>
          </div>
            <div className="container-wt1">
                <img src={require('../../images/10th-floor.jpg')} alt="10th-floor" className="image-wrap-wt1"/>
                <div className="text-right-wt1">
                    <p>Abstraction: This website and my position at theScore go hand-in-hand for me; they both gave me new opportunities to grow my knowledge, skills, and within my career. Working as a QA Automation Engineer taught me about new frameworks, new ways to write testing code for web platforms, and how to work in a large and diverse team.</p>
                    <p>Making a website from scratch and learning about web development independently was the best compliment to my co-op experience for this summer. I cannot wait to hone and improve my skills, searching for great opportunities like this one!</p>
                    <p>Information about the Employer: theScore is a sports media company that is based in Toronto, which deploys theScore Media app as well as theScore Bet app on Android, iOS, and web platforms. Software development and extensive unit and automated testing for quality assurance and for maintained and high-quality app services. The office I worked at is located at 125 Queens Quay E and is relatively new, with the previous location being on King Street.</p>
                </div>
            </div>
            <div className="remainder-text-wt1">
                <p>Goals: My goals this summer included learning how to debug more effectively, integrating myself into the automation team, and learning to contribute and merge completed automation tickets into the codebase. These goals were made specifically for this automation position, and in order to grow and improve in the skills necessary for the job.
Looking to improve upon my communication skills within a team, as well as acquire new technological skills too, I wanted to learn how to code in new ways and languages this work term. I even got experience using CI and test plan tools too, such as Jenkins and TestRail. In future job opportunities, not only will I have an understanding of how to deliver suitable code in a team dynamic, common applications like Jira and GitHub will no longer be new for me.</p>
                <p>The most prevalent skills I learned were how to code within a team setting; whether in pair programming sessions or code-reviews, strong communication skills and a willingness to learn were both very important to finding success. Applying these skills everyday allowed me to complete pull requests and make contributions to the coverage the automation team provided. I was even able to identify notable bugs and eliminate the resulting errors. Gaining experience with debugging and writing automation code in a team setting was exactly what I was looking for this term in order to complete my goals.</p>
                <p>Job Description: As a QA Automation Engineer, it was my job to maintain automation Web frameworks for Vegas, the back-end admin platform component of theScore Bet (the TSB app). As bi-weekly releases were developed, the QA team for Vegas would verify features function as intended and the automation team would dedicate 2-3 employees to automate 75%+ of the test coverage.
Using cucumber/Gherkin feature files, and Kotlin code for the implemented steps, Selenium drivers would be able to navigate and complete UI-based test cases on the Vegas web platform. Jenkins supports as a dedicated automation CI tool, and tickets/pull requests would be maintained and completed through Jira and GitHub respectively.
Along with weekly syncs with QA and monthly backlog grooming sessions to denote new automation sessions, automation would complete regression cycles every 2 weeks to uphold the automated coverage and ensure that no bugs have been introduced into non-release components of Vegas.</p>
                <p>Conclusions: Overall, I am very pleased with how this work term went. There were a lot of aspects that were outside of my comfort zone and it taught me a lot about working in a large team, being open and flexible to challenges, and always being willing to learn new things. I think I achieved my goals, but I know that I always have room to improve and reach for more. For the next work term, even if these goals are not my primary focus, they will be in the back of my mind as I learn and take on new obstacles. This position and work term were a delight and I cannot wait for more to come!</p>
                <p>Acknowledgements: I'd like to thank the automation team and QA Vegas team working with me throughout the summer at theScore; without their help I would not have been able to learn as much as I have. Thank you!</p>
            </div>
        </section>
      )
}

export default WorkTermOne
