import BlogAPI from '../assets/images/BlogAPI2.JPG'
import MembersOnly from '../assets/images/MembersOnly2.JPG'
import Disney from '../assets/images/DisneyOverview.JPG'
import Waldo from '../assets/images/WhereIsOverview.JPG'
import Shopping from '../assets/images/Shopping.PNG'
import Weather from '../assets/images/WeatherAppSm.PNG'

import Passport from '../assets/Icons/PassportWB.png'
import Jwt from '../assets/Icons/jwtBW.png'

export const icons = [
    {
        classIcon: 'devicon-html5-plain',
        text: 'HTML',
        isDevicon: true
    },
    {
        classIcon: 'devicon-css3-plain',
        text: 'CSS',
        isDevicon: true
    },
    {
        classIcon: 'devicon-javascript-plain',
        text: 'JavaScript',
        isDevicon: true
    },
    {
        classIcon: 'devicon-git-plain',
        text: 'GIT',
        isDevicon: true
    },
    {
        classIcon: 'devicon-react-original',
        text: 'React',
        isDevicon: true
    },
    {
        classIcon: 'devicon-nodejs-plain',
        text: 'Node.js',
        isDevicon: true
    },
    {
        classIcon: 'devicon-express-original express',
        text: 'Express.js',
        isDevicon: true
    },
    {
        classIcon: 'devicon-redux-plain',
        text: 'Redux',
        isDevicon: true
    },
    {
        classIcon: 'devicon-flutter-plain',
        text: 'Flutter',
        isDevicon: true
    },
    {
        classIcon: 'devicon-socketio-original',
        text: 'Socket IO',
        isDevicon: true
    },
    {
        classIcon: 'devicon-typescript-plain',
        text: 'TypeScript',
        isDevicon: true
    },
    {
        classIcon: 'devicon-tailwindcss-plain',
        text: 'Tailwind CSS',
        isDevicon: true
    },
    {
        classIcon: 'devicon-mongodb-plain',
        text: 'MongoDB',
        isDevicon: true
    },
    {
        classIcon: 'devicon-mysql-plain',
        text: 'MySQL',
        isDevicon: true
    },
    {
        classIcon: 'devicon-jest-plain',
        text: 'Jest',
        isDevicon: true
    },
    {
        classIcon: 'devicon-webpack-plain',
        text: 'Webpack',
        isDevicon: true
    },
    {
        classIcon: 'devicon-docker-plain',
        text: 'Docker',
        isDevicon: true
    },
    {
        classIcon: 'devicon-python-plain',
        text: 'Python',
        isDevicon: true
    },
    {
        classIcon: Passport,
        text: 'Passport',
        isDevicon: false
    },
    {
        classIcon: Jwt,
        text: 'JWT',
        isDevicon: false
    },
]

export const projects = [
    {
        title: `Weather App React And React Native`,
        image: Weather,
        description: `This project showcases weather-related information sourced from the OpenWeatherMap API, which is based on the user's specified city. The application provides essential weather data, including: Temperature, available in both Celsius and Fahrenheit, Humidity levels, Atmospheric pressure, Wind speed, Sunrise and Sunset time, Feels Like Temperature, Min & Max Temperature,
        Current UV index. For this project, two versions were developed:

        \u2022    The mobile version using React Native, created with expo
        \u2022    The website version using React.`,
        technologies: ['CSS','Redux','React', 'TypeScript'],
        github: 'https://github.com/Houser97/Weather-App',
        preview: 'https://houser97.github.io/Weather-App/',
    },
    {
        title: 'Where is Waldo',
        image: Waldo,
        description: "This application is based on the game Where's Waldo, which consists of finding certain characters in an image full of various elements. The application has a timer to measure the time it takes users to find the three characters. The accumulated time is saved in the database along with a username. On the other hand, the game has responsive qualities, since the image can be adapted to different screen sizes without losing its radius of appearance.",
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'CSS'],
        github: 'https://github.com/Houser97/Where-is-walso-V2',
        preview: 'https://whereisgame.onrender.com/',
    },
    {
        title: 'Shopping Cart',
        image: Shopping,
        description: `The project simulates a Shopping Cart page with the following features:

        \u2022 Available items can be commented and voted based on user experience.\t
        \u2022 Comments can be liked or disliked.\t
        \u2022 Items can be added to the user's cart, where the total amount in the cart and the price to pay is shown.\t
        
        Users can register thanks to the implementation of Node.js and MongoDB as server and database. On the other hand, Redux Toolkit was implemented for global status management. Also, Tailwind is used for the styling of the application.`,
        technologies: ['Tailwind CSS','Redux','MongoDB', 'Express.js', 'React', 'Node.js', 'Passport'],
        github: 'https://github.com/Houser97/Shopping-Cart',
        preview: 'https://shopping-cart-a2.onrender.com/',
    },
    {
        title: 'Disney Replica',
        image: Disney,
        description: "The application allows users to create an account through Passport, where the SALTING feature is added to add protection to the passwords entered. Users can choose a profile picture from the images provided. Also, they have the possibility to update this profile picture at any time. On the other hand, the WATCHLIST section shows the movies or series that users have added to their list, which indicate with a checkmark SVG that the card has been added. Users can also remove movies from this section by clicking on the SVG. In total about 21 images were used.",
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Passport', 'CSS', 'TypeScript'],
        github: 'https://github.com/Houser97/Disney-V2',
        preview: 'https://disneyplus-54yk.onrender.com/',
    },
    {
        title: 'My Blog-API',
        image: BlogAPI,
        description: 'This project takes advantage of the functionalities of the REST API concept to communicate the client (React) with the server (Node JS). In addition, it makes use of a JWT token to authenticate the blog owner and grant editing, deletion and post creation capabilities.',
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'CSS'],
        github: 'https://github.com/Houser97/Blog-API',
        preview: 'https://my-blog-api.onrender.com',
    },
    {
        title: 'Members Only',
        image: MembersOnly,
        description: "The application allows users to read messages from others, where message information (creation date and author) is presented according to the user's role. When creating an account it is possible to create messages that will appear in the main window, and for those who enter the secret code will have access to more information about the message. The application uses Passport to authenticate users, who are assigned a specific role that is used by the application to conditionally render elements. On the other hand, EJS is used instead of React to create the frontend.",
        technologies: ['MongoDB', 'Express.js', 'Node.js', 'Passport', 'CSS'],
        github: 'https://github.com/Houser97/members-only',
        preview: 'https://members-only-r266.onrender.com',
    }
]