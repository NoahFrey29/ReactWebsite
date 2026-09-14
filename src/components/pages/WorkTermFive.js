import React from 'react'
import '../../App.css';
import './WorkTermFive.css';

function WorkTermFive() {
    return (
        <section>
            <div>
                <h1>My Fifth Work Term: Software Developer at Magnet Forensics!</h1>
            </div>
            <div class="container">
                <img src={require('../../images/magnet.png')} alt="magnet-office" className="image-wrap-wt4" />
                <div class="text-right">
                    <p>Abstraction: This page highlights my journey as a software developer co-op at Magnet Forensics during Summer 2026, giving me a variety of new opportunities to grow as a developer. I learned about the best practices for building forensically accurate artifacts, as well as learning a ton about creating internal tools for AI code analysis and AWS cloud infrastructure for deploying said tools. As well, I was able to build SQLite queries for applications that use SQLite databases, contribute to architectural design questions, and create new mobile artifacts like X (Twitter), Instagram, and TikTok for reporting forensic data stored in these applications. I am very grateful for my time with the mobile artifacts team and I cannot wait to continue to work with them part time throughout this school year!</p>
                </div>
            </div>
            <div class="remainder-text">
                <p>Information about the Employer: Magnet Forensics is a digital forensics and incident response company that is based in Waterloo, with additional locations in the United States and around the world. They create quality applications and products for a multitude of consumers globally for the purpose of recovering evidence and forensic data from mobile, desktop, and even vehicle devices. Their headquarters is located at 2220 University Ave E, Suite 300 in Waterloo, ON.</p>
                <p>Summer Goals: My goals this summer included completing the Artifacts IQ epic, learn more about AI literacy, and complete an additional assignment/project. These goals were completed in different ways as, I was tasked with the AIQ epic initially, and was able to complete the majority of the tech debt and architectural changes. One of such changes was the analysis of our current "Artifact Intelligence", and allowed me to contribute to eliminating tech debt and creating a more robust internal class structure for our repositories. I also volunteered to take on a new project - the Mobile Artifacts Ticket Solver. This solved my last goal, as well as gave some great insight into my second goal, as Ticket Solver was meant to be a pipeline that used AI agents to complete code analysis and look for bugs within our projects. I learned about how to set up Jira automation, work with AWS resources, write IaC, and deploy a dashboard for the rest of the Mobile Artifacts team to use. This was a great way to wrap up my co-op journey, and I am so proud of how far I have come!</p>
                
                <p>Job Description: As a software developer on the mobile artifacts team, it was my job to build and maintain artifact code, which couples with other Magnet products to extract forensic data reports from hundreds of mobile applications found on iOS and Android devices. Our team adopted a 2 week sprint model, to allow for refinement and retrospective brainstorming from the team whilst keeping our story creation process and execution structured and successful. The artifacts code base has API coverage to use engine and reverse engineering logic for creating detailed reports for Magnet products and services, all implemented in .NET/C# dynamic-link library. It is important as a developer to stay in contact with technical support, who in turn place customer support requests and inquiries about new artifacts, as well as maintenance required for existing artifacts.</p>
                <p>Conclusion: Overall, I loved my time at Magnet, and am very pleased to get to continue to work with this team. Not only did I achieve my goals, but I was able to begin to get great experience working on projects and analyzing patterns and design decisions in Artifacts. During the first week of June I was on customer support rotation, meaning I completed all the investigation and communication needed from our customer support engineering team, and also allowed me to test Ticket Solver with real world bugs and scenarios. The team was always ready to lend a helping hand, and I definitely think that their knowledge and advice will help me continue my career in the future with the team. Working for Magnet on the mobile artifacts team was some of the most fun I’ve had during my degree, and I cannot wait to continue to grow and learn with this team!</p>
                <p>Acknowledgements: I’d like to thank the entire artifacts department, with a special thank you for the mobile team for working with me throughout this year; without their help and support, I would not have been able to learn as much as I have. Thank you!</p>
            </div>
        </section>
    )
}

export default WorkTermFive