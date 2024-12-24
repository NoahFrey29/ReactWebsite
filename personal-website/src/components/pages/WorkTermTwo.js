import React from 'react'
import '../../App.css';
import './WorkTermTwo.css';

function WorkTermTwo() {
    return (
        <section>
          <div>
            <h1>My Work Term 2 at theScore as a QA Automation Engineer!</h1>
          </div>
            <div class="container">
                <img src="images/NoahFrey3.jpg" alt="office-street" class="image-wrap"/>
                <div class="text-right">
                    <p>Abstraction: This website and my position at theScore go hand-in-hand for me; they both gave me new opportunities to grow my knowledge, skills, and within my career. Working as a QA Automation Engineer taught me about new frameworks, new ways to write testing code for web platforms, and how to work in a large and diverse team. Making a website from scratch and learning about web development independently was the best compliment to my co-op experience for this summer. I cannot wait to hone and improve my skills, searching for great opportunities like this one!</p>
                    <p>Information about the Employer: theScore is a sports media company that is based in Toronto, which deploys theScore Media app as well as theScore Bet app on Android, iOS, and web platforms. Software development and extensive unit and automated testing for quality assurance and for maintained and high-quality app services. The office I worked at is located at 125 Queens Quay E and is relatively new, with the previous location being on King Street.</p>
                </div>
            </div>
            <div class="remainder-text">
                <p>Goals: My goals this fall were to continue to develop my problem solving and debugging skills, to learn more about Jenkins CI and/or APIs, and to take on more responsibility and meaningful/impactful work. These goals were made specifically for this automation position after analyzing my current standing at the end of the previous four months. Some of the chosen goals were weak points, but some of them were also personal goals that I wanted to tackle.
In these 4 months, I achieved every single one of my goals. I did this through the completion of a project that the automation team deemed necessary to further harden test runs and our framework. I was tasked with integrating UI and API tests together for the back-end admin “Vegas” platform, ensuring its relation to theScore Bet front-end app can be validated correctly. This would involve completing UI tests on Vegas as usual, but then completing end to end API tests that would query the front end sportsbook and ensure the changes matched the Vegas back-end changes.</p>
                <p>Through this experience, I learned about using GraphQL and a bit of Postman, I learned about JSON format API responses, and I even learned a little about system design interactions too. Not only was this incredibly fulfilling and a pleasure to work on, but my problem solving and debugging skills improved significantly. As I was the only member working on the project, I also was able to achieve more responsibility within the Vegas and within the automation team itself.</p>
                <p>Job Description: As a QA Automation Engineer, it was my job to maintain automation Web frameworks for Vegas, the back-end admin platform component of theScore Bet (the TSB app). As bi-weekly releases were developed, the QA team for Vegas would verify features function as intended and the automation team would dedicate 2-3 employees to automate 75%+ of the test coverage. Using cucumber/Gherkin feature files, and Kotlin code for the implemented steps, Selenium drivers would be able to navigate and complete UI-based test cases on the Vegas web platform. Jenkins supports as a dedicated automation CI tool, and tickets/pull requests would be maintained and completed through Jira and GitHub respectively. Along with weekly syncs with QA and monthly backlog grooming sessions to denote new automation sessions, automation would complete regression cycles every 2 weeks to uphold the automated coverage and ensure that no bugs have been introduced into non-release components of Vegas.</p>
                <p>Conclusion: This work term was really fantastic, and it was definitely enhanced by the impact of the end-to-end API integration project. I felt like I was more of an integral part of the automation team, and from code reviews to meetings to learning by myself, I think I enjoyed this work term more than I enjoyed the first 4 months in the summer. Not only was I able to dive into more of a responsible and technical role, but I continued to learn and find interesting and fulfilling aspects of the position. For my next work term, I know that trying new things will be crucial to continuing to grow in experience. Working at theScore was a fantastic endeavour from start to finish, and I am truly grateful for these past 8 months. I will never forget my time at theScore and I hope I can return someday!</p>
                <p>Acknowledgements: I’d like to thank the automation team and QA Vegas team working with me throughout the summer at theScore; without their help I would not have been able to learn as much as I have. Thank you!</p>
            </div>
        </section>
      )
}

export default WorkTermTwo
