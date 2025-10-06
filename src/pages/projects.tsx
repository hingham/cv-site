import TextBlock from "@/components/textBlock";

export default function Projects() {
    return (
        <div className="main-accent">
            <h1>Recent Projects:</h1>
            <ul>
                <li>
                    <h2>
                        <a
                            href="https://github.com/hingham/geoJson-to-svg-package/tree/main"
                            target="_blank"
                            rel="noopener noreferrer">
                            GeoJSON to SVG Map Generator
                        </a>
                    </h2>
                    <TextBlock
                        title="Stack:"
                        bodyText="JavaScript, Node.js, GeoJSON, SVG"
                    />
                    <TextBlock
                        title="About:"
                        bodyText="A command-line tool for generating scalable, functional SVG maps from GeoJSON files. Built after needing a custom Seattle neighborhood map, the project evolved into a reusable utility that can convert any GeoJSON data into an SVG with color customization and scaling. Published as an open-source CLI tool on GitHub."
                    />
                </li>
                <li>
                    <h2>
                        <a
                            href="https://thelocalboard.city"
                            target="_blank"
                            rel="noopener noreferrer">
                            The Local Board
                        </a>
                    </h2>
                    <TextBlock
                        title="Stack:"
                        bodyText="Next.js, React, TypeScript, Tailwind CSS, Firebase"
                    />
                    <TextBlock
                        title="About:"
                        bodyText="A concept project envisioning a virtual bulletin board for local neighborhoods. The app began as an experiment to practice building exclusively with GitHub Copilot, but as the project grew in complexity, it required more hands-on development to refine structure, components, and logic. The project became a great opportunity to dive deeper into the Next.js full stack framework and learn utility-first styling with Tailwind CSS."
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
                        bodyText="Google Scripts & Google Sheets, Twilio API & Flow, Twilio functions"
                    />
                    <TextBlock
                        title="About:"
                        bodyText="Initially created as a hack-for-social good project in 2020, this tool helps orchestrate
                        large scale surveys over WhatsApp using the Twilio API. It was created with a non technical user in mind, 
                        and leverages the google sheets and scripts to help make it more friendly to users without coding expertise. The team created robust educational tools
                        to help other non profits leverage this work. I have recently had the chance to work again with the team at Immigration Policy Lab to help them 
                        update code and add additional features. The project has been used in dozens of surveys, with hundreds of thousands of participants."
                    />
                </li>
                <li>
                    <h2>
                        <a
                            href="https://whatsfordinner.us"
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
                        takes to plan, prepare, and cook dinner. Inspired by the unique challenge for making dinner with tiny children :)"
                    />
                </li>

            </ul>
        </div>
    );
}
