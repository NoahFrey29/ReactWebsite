import React from 'react'
import '../../App.css';
import './WorkTermFour.css';

function WorkTermFour() {
    return (
        <section>
            <div>
                <h1>My Fourth Work Term: Software Developer at Magnet Forensics!</h1>
            </div>
            <div class="container">
                <img src={require('../../images/magnet_office.jpg')} alt="magnet-office" className="image-wrap-wt4" />
                <div class="text-right">
                    <p>Abstraction: This page highlights my journey as a software developer co-op at Magnet Forensics during the Winter 2026, giving me a variety of new opportunities to grow as a developer. I learned about the best practices for building forensically accurate software, as well as learning more about the importance of data generation when reporting evidence for a user application. As well, I was able to build SQLite queries for applications that use SQLite databases, help other developers through code reviews and debriefing code changes, and create new mobile artifacts like Session, Facebook Messenger, and Safari for reporting forensic data stored in these applications. I had a fantastic time learning and growing alongside the mobile artifacts team and cannot wait for more to come!</p>
                </div>
            </div>
            <div class="remainder-text">
                <p>Information about the Employer: Magnet Forensics is a digital forensics and incident response company that is based in Waterloo, with additional locations in the United States and around the world. They create quality applications and products for a multitude of consumers globally for the purpose of recovering evidence and forensic data from mobile, desktop, and even vehicle devices. Their headquarters is located at 2220 University Ave E, Suite 300 in Waterloo, ON.</p>
                <p>Winter Goals: My goals this winter included learning the ins and outs of the position, understanding a new technology, and gaining a better sense of developer literacy through debugging, creating technical requirements, and contributing to code reviews. I was tasked with everything from bug fixes, to creating new artifacts, to being assigned large architectural changes for our code base. One of such changes was the removal of a database architecture that allowed our team to allow for versioning support on many of our high priority artifacts, like Android: Snapchat. Removing this eliminated large overheads, whilst implementing a builder pattern to allow for our regression suites and artifact library to still know which schema versions of applications are parseable. As well, I gained incredibly valuable experiences with data generation via test devices. Using open source tools like palera1n, I was able to jailbreak older generation test iPads to pull data off and analyze what forensic evidence can be observed and reported to a customer. Completing tickets through an agile sprint environment using Jira and Azure DevOps exposed me to development stories, investigative spikes for new artifact analysis, and a deepened understanding of being a strong team member through the process of code reviewing and debriefing changes with other developers. I am really proud of the progress I made, and so pleased I was able to reach all of my goals!</p>
                
                <p>Job Description: As a software developer on the mobile artifacts team, it was my job to build and maintain artifact code, which couples with other Magnet products to extract forensic data reports from hundreds of mobile applications found on iOS and Android devices. Our team adopted a 2 week sprint model, to allow for refinement and retrospective brainstorming from the team whilst keeping our story creation process and execution structured and successful. The artifacts code base has API coverage to use engine and reverse engineering logic for creating detailed reports for Magnet products and services, all implemented in .NET/C# dynamic-link library. It is important as a developer to stay in contact with technical support, who in turn place customer support requests and inquiries about new artifacts, as well as maintenance required for existing artifacts.</p>
                <p>Conclusion: Overall, I loved my first four months at Magnet, and am very pleased to have made so much progress. Not only did I achieve my goals, but I was able to begin to contribute to the team in meaningful ways every week, and even volunteered to try large high priority refactors. During the last week of March I was even on customer support rotation, meaning I completed all the investigation and communication needed from our customer support engineering team, which was a huge confidence builder. Being a part of the team and experiencing sprint refinement sessions in depth is a definite highlight, and gave me valuable insight into what it means to be a developer supporting a huge application/library. Working for Magnet on the mobile artifacts team was some of the most fun I’ve had during my degree, and I cannot wait for the next four months to continue to grow and learn with this team!</p>
                <p>Acknowledgements: I’d like to thank the entire artifacts department, with a special thank you for the mobile team for working with me throughout the winter; without their help and support, I would not have been able to learn as much as I have. Thank you!</p>
            </div>
        </section>
    )
}

export default WorkTermFour
