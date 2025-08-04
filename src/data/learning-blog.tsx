export const blogPosts = [
    {
        date: "2025-08-04",
        title: "Project Idea: Local Virtual Community Board",
        body: "I've been thinking about building a local virtual community board where people can post about events, services, and resources in their area. The idea is to mimic the posters on telephone poles and bulletin boards at local coffee shops. The goal would be to keep it simple, and similar to the lovingly chaotic vibe of my favorite boards. The view would consist of no more than 4 images, and be scrollable. The images would be akin to a poster or business card. They would have expirations dates, which is key for any type of event. Even services would have to be renewed every few months just to make sure things are up to date. A user would submit a post with an image, title, description, neighborhood, category(s), and expiration date. The submission would be approved by a local volunteer. Order would be randomized. Sections would be limited: events (things with expirations), and/or services. They would be a filter that would allow users to narrow down the categories. Users would access their bulletin board by neighborhood. The goal would be to expose users to local events and services they might not otherwise see or consider, but as the physical bulletin boards do.",
    },
    {
        date: "2025-08-01",
        title: "Prompt Engineering Udemy Course Reflections",  
        body: "I recently completed a Udemy course on prompt engineering, which was a fascinating dive into how to effectively communicate with AI models. The course covered various techniques for crafting prompts that yield better responses, including the use of context, specificity, and iterative refinement. I found it particularly interesting how small changes in wording can lead to significantly different outputs. While recently using AI to help me improve my resume, I was fascinated by how it rewrote my own prompt to influence the outcome. While using it to help stand up projects, I've been reminded of the importance of understanding all the code and the project architecture, and when it comes to debugging and editing I still need a strong grasp of the codebase. Learning about the nuances of prompt engineering has helped me better utilize co-pilot while coding. I haven't had the change to use these powerful AI models in a production setting yet, but I am excited to see how they can enhance my workflow and productivity when working on larger projects.",
    },
    {
        date: "2025-07-22",
        title: "React Server Components",
        body: "React Server Components are a relatively newer feature. They allow you to run React components on the server, which can improve performance and reduce the amount of JavaScript sent to the client. Because they are run on the server, you don't need useEffect, or useState, rather can can use the async/await syntax. They would be useful to fetching data from the database without having an additional API layer. While not maintaining an API layer saves an additional layer from the architecture, I'll have to experiment more with what this looks like in practice. It would make it faster to stand up and iterate on small projects.",
    },
    {
        date: "2025-07-15",
        title: "Playing with Next.js",
        body: "To learn the basics of Next.js, I've been writing my simple cv site using the framework, as well as migrating a personal project. Deploying with vercel could not have been easier, and I love the built-in support for static site generation. The framework is intuitive and has a lot of great features that make it easy to build performant web applications. I was particularly interested to read about how with Next.js some developers have done away with the traditional client/server model and maintaining an express server. Will be digging into React Server Components more to understand how this works in practice. ",
    },
    {
        date: "2025-07-01",
        title: "Adventures in Dynmaic Programming",
        body: "Focused this week on solving problems using dynamic programming techniques. While the straight forward solutions have come more easily, I still find myself a bit at sea when solving problems involving 2 dimensional arrays, such as the classic knapsack problem. While in grad school for teach, and fellow student teacher had a great shirt that read 'Another day with no need for calculous'. Even as math teacher, we were scrambling to relearn calc for the math teaching certification, and if I ever taught calc I would be learning it again. That is sort of how I feel about dynamic programming. As soon as I feel like I've got it, I spend years not thinking about it only to have to relearn it. I've been reminded that I am a very visual thinking when it comes to programming, and drawing pictures to think through dynamic programming problems helps."
    },
    {
        date: "2025-06-15",
        title: "Implementing authentication on a personal project",
        body: "After starting out implementing Auth0 with okta, I found myself frustrated with the documentation available on the site and getting suck early in the process. After more reading on options available, I tested out firebase Auth and was up and running with basic auth in an hour. The documentation, examples, and general configuration felt more intuitive. Implementing auth has been a great way to review some basics around authorization, authentication, json web tokens, and role based access control. I'm not sure I feel a need to incorporate scale Auth into my personal project at this point, and will likely leave it behind a feature flag until I have a need for it. But it was a great exercise to implement and understand how the firebase auth works. My next steps is to implement session cookies (as opposed to the short lived client tokens) as these can be more secure since they are generated using the authorized service account."
    }
]