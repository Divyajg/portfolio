import mealshare from "./images/mealShare.jpg";
import weatherApp from "./images/weatherApp.JPG";
import gifSearch from "./images/gifSearch.JPG";
import todoList from "./images/todoList.JPG";
import userSearch from "./images/userSearch.JPG";
import plantWebShop from "./images/e_commerce_webshop.JPG"

export const projects = [{
        title: "The Green Store",
        subtitle: "React.js, Node.js, MySQL, Storybook, Firebase",
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

export const hardSkills = ["HTML(5)", "CSS(3)", "JavaScript", "ReactJs", "NodeJss", "KnexJs", "MySql", "Git & GitHub", "Rest API's", "Express.js",
    "Docker", "Firebase Authentication", "Storybook",
];

export const softSkills = ["Adaptable", "Continous-learning", "Approachable", "Creative", "MultiCultural"];