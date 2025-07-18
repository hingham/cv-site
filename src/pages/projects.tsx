import TextBlock from "@/components/textBlock";

export default function Projects() {
    return (
        <div className="main-accent">
            <h1>Recent Projects:</h1>
            <ul>
                <li>
                    <h2>
                        <a
                            href="http://whatsfordinner.us"
                            target="_blank"
                            rel="noopener noreferrer">
                            What&apos;s for Dinner
                        </a>
                    </h2>
                    <TextBlock
                        title="Stack:"
                        bodyText="NextJS, React, Typescript, MaterialUI, Firebase"
                    />
                    <TextBlock
                        title="About:"
                        bodyText="A modular recipe site to help people prepare meals in bulk, freeze food, meal prep, and drastically cut the time it 
                        takes to plan, prepare, and cook dinner."
                    />
                </li>
                <li>
                    <h2>
                        <a
                            href="https://immigrationlab.org/2020/10/01/webinar-whatsapp-surveys/"
                            target="_blank"
                            rel="noopener noreferrer">
                            Immigration Policy Lab WhatsApp Outreach
                        </a>
                    </h2>
                    <TextBlock
                        title="Stack:"
                        bodyText="Google Scripts & Google Sheets, Twilio API & Flow services"
                    />
                    <TextBlock
                        title="About:"
                        bodyText="Initially created as a hack-for-social good project, this tool was used to help orchestrate
                        large scale survey's over WhatsApp using the Twilio projects. It was created with a non technical user in mind, 
                        who would also need to be able to tweak and modify changes in the flow and database. I have recently had the chance
                        to work again with the team at Immigration Policy Lab after initially creating the project in 2020 to help them prepare 
                        for a new survey."
                    />
                </li>
            </ul>
        </div>
    );
}
