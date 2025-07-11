import TextBlock from "@/components/textBlock";

export default function Home() {
  return (
      <div className="main-accent">
        <h1>About Me:</h1>
        <ul>
          <li>
            <TextBlock
              title="Getting into Software Development"
              bodyText="I transitioned into software development after a career in teaching - teaching high school and middle school math. I loved teaching,
              but the hours and isolation eventually lead me to think about other careers. I entered the Code Fellows boot camp program in 2019 to give coding 
              a chance, and found it was something that lit up my mind and made me excited to learn. As a went through the program, I TA'd for the next cohort,
              even worked as an assistant instructor for the entry level course before landing my first role as a software developer. This role, at Slalom build,
              was more than I could have hoped for as I got started in this new profession. Kind and smart people provided a supportive environment where I was challenged
              with ramping up on new technologies, given ample opportunities to learn from my co-worker, in was able to flourish in a organized team that held itself to high standards.
              I learned the important of document, diagrams, tests,code reviews, and code demos where the team could learn from each other and celebrate work. "
            />
            <TextBlock
              title="My First Software Role"
              bodyText="I worked at Slalom Build for a year and a half, and during that time I was able to work on a variety of projects, including a project for the 
              Seattle Public Library, a project for the City of Seattle, and a project for a large financial institution. I learned how to work with clients, how to 
              manage expectations, and how to deliver high quality software on time. I also learned how to work with a team of developers, how to communicate effectively,
              and how to collaborate with others. I was able to grow my skills in React, Typescript, Node.js, and AWS, and I was able to contribute to the team's success
              by delivering high quality software on time."
            />
            <TextBlock
              title="Growing My Skills At Qualtrics"
              bodyText="I was itching to have other experiences in world of software where I could grow some of skills around full stack development, and found a role at Quatlrics 
              that excited me. The team worked on analyzing large data sets, and enabled users to run the data through statisical analyses to find meaning in their data. The
              team was small, and the structure of the work was different. I learned how to work with more ambiguity, and how to manage legacy code with sparce documentation.
              I learned how to work and manage indpenedent projects, while still trying to be involved in the teams overall goals and objectives. One of my favorite roles on this 
              team was getting the chance to work closely with the interns and new hires, helping them ramp up on the code base, and helping them learn how to work with the team.
              While on the team I pushed for and produced new onboarding documentation, as well has detailed diagrams to help other developers understand the project architecture. While 
              especially valuable for new hires, these documents also helped our team when discussing architecture changes and improvements."
            />
            <TextBlock
              title="Taking a Step Back For Family"
              bodyText="After having my first child, I returned to work, but found balancing the new role of motherhood challenging. I decided to take a step back from full time work. While
              away from a full time role, I had a second child, learned how to dry wall, skim coat, and remodel a kitchen, and planned and enjoyed a month long 100 mile walking trip to Italy with my 
              husband and toddler. In the last six months since my babies have matured a bit, I've gotten back into coding: I've had a chance to help a friend with their business website, 
              work on a passion project around modular meal planning, and jump back into a hack-for-social-good project I started in 2020."
          />
          <TextBlock
            title="Getting Back To Work"
            bodyText="I'm excited to continue my career in software development, and I hope to find a role that will allow me to continue to grow my skills, work with a team of kind and smart people, and help 
              build software that makes a difference in people's lives."
            />
          </li>
          <li>
            <strong>My Values</strong>: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            <strong>My Goals</strong>: Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </li>
        </ul>
      </div>
  );
}