import React from 'react'
import '../../App.css';
import './WorkTermThree.css';

function WorkTermThree() {
    return (
        <section>
          <div>
            <h1>My Third Work Term at theScore as a QA Automation Engineer!</h1>
          </div>
            <div class="container">
                <img src={require('../../images/noah-at-thescore.png')} alt="score-office" className="image-wrap-wt3" />
                <div class="text-right">
                    <p>Abstraction: This website and my position at theScore go hand-in-hand for me; they both gave me new opportunities to grow my knowledge, skills, and within my career. Working as a QA Automation Engineer taught me about new frameworks, new ways to write testing code for web platforms, and how to work in a large and diverse team. Making a website from scratch and learning about web development independently was the best compliment to my co-op experience for this summer. I cannot wait to hone and improve my skills, searching for great opportunities like this one!</p>
                    <p>Information about the Employer: theScore is a sports media company that is based in Toronto, which deploys theScore Media app as well as theScore Bet app on Android, iOS, and web platforms. theScore develops software and completes extensive unit and automated testing for quality assurance for their high-quality app services. The office I worked at is located at 125 Queens Quay E and is relatively new, with the previous location being on King Street.</p>
                </div>
            </div>
            <div class="remainder-text">
                <p>Summer Goals: My goals this summer included taking on more responsibility, contributing a meaningful endeavour for the Vegas team, and expanding my knowledge of programming languages like Java, Python, Kotlin, and Elixir.
                  This summer, another co-op and I, were tasked with automating high priority test cases, which we were able to successfully complete. It required backlog refinement sessions, planning out Jira epics with user stories by feature, and adhering to agile methodologies to finish chunks of work</p>
                <p>Not only was this great from a responsibility standpoint, but I continued to hone skills I learned in 2024, often solidifying my understanding of using tools like Selenium and Jenkins. I am proud of how much the team was able to accomplish this summer, and I am glad I could be a primary contributor. As for my third goal, I took up personal projects in Python and Elixir throughout the summer in and outside of work. I started the design for a script for the Vegas development team that involved using Bugsnag to send a list of errors to a Slack channel. Between learning new programming conventions and undertaking more responsibility, I definitely think I achieved my goals this summer and I am excited to see what comes next. </p>
                <p>Job Description: As a QA Automation Engineer, it was my job to maintain automation Web frameworks for Vegas, the back-end admin platform component of theScore Bet (the TSB app). As bi-weekly releases were developed, the QA team for Vegas would verify features function as intended and the automation team would dedicate 2-3 employees to automate 75%+ of the test coverage. Using cucumber/Gherkin feature files, and Kotlin code for the implemented steps, Selenium drivers would be able to navigate and complete UI-based test cases on the Vegas web platform. Jenkins supports as a dedicated automation CI tool, and tickets/pull requests would be maintained and completed through Jira and GitHub respectively. Along with weekly syncs with QA and monthly backlog grooming sessions to denote new automation sessions, automation would complete regression cycles every 2 weeks to uphold the automated coverage and ensure that no bugs have been introduced into non-release components of Vegas.</p>
                <p>Conclusion: Overall, I am proud of the contributions I was able to make this year for theScore. I think I achieved my goals, but I know that I always have more things to learn and places to go! Taking on more of a full-time employee role rather than a co-op was great for building my confidence. The sprint planning portion of the summer term might have been my most valuable part of the summer, because it involved communicating and collaborating with the team to reach a common goal together. Working at theScore again was wonderful and I am so grateful that the team was willing to have me back. Their support, mentorship, and guidance are the last part I want to highlight, as I have learned so much because of them.</p>
                <p>Acknowledgements: I’d like to thank the automation team and Vegas team (QA and Dev!) working with me throughout the summer at theScore; without their help I would not have been able to learn as much as I have. Thank you!</p>
            </div>
        </section>
      )
}

export default WorkTermThree
