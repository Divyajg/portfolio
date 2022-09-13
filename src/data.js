import mealshare from "./images/mealShare.jpg";
import weatherApp from "./images/weatherApp.JPG";
import gifSearch from "./images/gifSearch.JPG";
import todoList from "./images/todoList.JPG";
import userSearch from "./images/userSearch.JPG";
import plantWebShop from "./images/e_commerce_webshop.JPG"

export const projects = [{
        title: "The Green Store",
        subtitle: "React.js, Node.js, MySQL, Storybook, Firebase, Swagger",
        description: "An E-commerce plant web-shop: A team project with forntend, database, backend, firebase authentication and paypal payment technologies.",
        image: plantWebShop,
        link: "https://staging-webshop-class19-fp.herokuapp.com/",
        code: "https://github.com/HackYourFuture-CPH/fp-class19",
    },
    {
        title: "Meal Sharing",
        subtitle: "React.js, Node.js, Knex, MySQL, CSS and HTML",
        description: "An exclusive App, where you can reserve to share a meal with others, Share your interesting meal and Review the meals(Improvising).",
        image: mealshare,
        link: "https://hyf-meal-sharing-dj.herokuapp.com/",
        code: "https://github.com/Divyajg/meal-sharing",
    },
    {
        title: "Weather App",
        subtitle: "HTML, CSS and JavaScript(Fetch API and DOM Manipulation)",
        description: "Applications that provides you the weather details of you current location or any other location",
        image: weatherApp,
        link: "https://divyajg.github.io/weather-Application/weather.html",
        code: "https://github.com/Divyajg/weather-Application",
    },
    {
        title: "Todolist",
        subtitle: "React.js(Hooks, JSON data, Lifecycle methods)",
        description: "Todolist application provides to add the todo to your list, edit & update it, mark it done and to delete that todo.",
        image: todoList,
        link: "https://todolist-app-dj.herokuapp.com/",
        code: "https://github.com/Divyajg/todo-list",
    },
    {
        title: "GitHub User Search",
        subtitle: "React.js(Hooks, Context, Lifecycle methods)",
        description: "You can search for the GitHub profiles by name",
        image: userSearch,
        link: "https://github-user-search-dj.herokuapp.com/",
        code: "https://github.com/Divyajg/github-user-search",
    },
    {
        title: "Giphy Search",
        subtitle: "HTML, CSS and JavaScript(Fetch API and DOM Manipulation)",
        description: "You can search the gifs here and limit the number of results required",
        image: gifSearch,
        link: "https://divyajg.github.io/Giphy-Search/aGifSearch.html",
        code: "https://github.com/Divyajg/Giphy-Search",
    },

];

export const hardSkills = ["Git & GitHub", "BitBucket", "Firebase Auth", "AWS Cognito", "HTML(5)& CSS(3)", "Javascript", "Typescript", "React JS", "Node JS", "Rest API's", "MySQL Database", "Swagger", "Postman", "Storybook", "Tailwind CSS", "React-Native", "MS Azure", "Docker", "AWS Developer skills", "React Scheduler"];

export const softSkills = ["Approachable", "Initiative Driven", "Active Learning", "Innovative Thinking", "Team Work", "Team Leadership", "Creative Problem solving", "Attention to detail", "Time management", "Code review"];

export const workExperience = [{
    title: "WEB DEVELOPER",
    company: "Karl Farm Aps",
    description: ["Developed web content for the app.",
    "Developed User Authentication using AWS Cognito.",
"Stack: ReactJs and AWS"] ,
    from: "06/2022 - ",
    to: "present"
},
{
    title: "ALUMNI AND VOLUNTEER",
    company: "Hack Your Future",
    description: ["Reviewed assignments of applicants as a part of the selection process for the upcoming classes.",
    "Reviewing homework of students for Nodejs and React JS.",
    "Reviewing full-stack web applications of students.",] ,
    from: "03/2022 - ",
    to: "present"
},
{
    title: "CAREER BREAK",
    description: ["Delivered a wonderful baby",
    "moved to denmark",] ,
},
{
    title: "SECURITY ANALYST",
    company: "IBM India",
    description: ["Analyzed risk analysis with the new patches.",
    "Vulnerability assessment before Carrying out Health checks in the client-server environment and with the new patches.",
    "Reporting Compliance documentation for the Security Audits both (internal & external).",] ,
    from: "05/2015 - ",
    to: "03/2016"
},
{
    title: "TECH SUPPORT ENGINEER",
    company: "Lanew Inc. India",
    description: ["Data entry and data logging, monitoring, and maintaining computer systems.",] ,
    from: "08/2013 - ",
    to: "04/2015"
},
]

export const education=[
    {
        title: "WEB DEVELOPMENT",
        school: "Hack Your Future - Copenhagen, DK",
        description: "Learned to develop web applications using HTML, CSS, Javascript, ReactJs, NodeJs, ExpressJs, MySQL Database, Git, GitHub, storybook, Swagger, Postman, Docker, and Firebase by working on several projects.",
        from: "2022 - ",
        to: "2022"
    },
    {
        title: "BACHELOR OF ENGINEERING",
        school: "VTU Belgaum - INDIA",
        description: "Electricals and Electronics Engineering" ,
        from: "2009 - ",
        to: "2013"
    },
]