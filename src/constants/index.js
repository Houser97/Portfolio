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
        description: `This project showcases weather-related information sourced from the OpenWeatherMap API, which is based on the user's specified city. The application provides essential weather data, including: Temperature (available in both Celsius and Fahrenheit), Humidity levels, Atmospheric pressure, Wind speed, Sunrise and Sunset time, Feels Like Temperature, Min & Max Temperature, Current UV index. For this project, two versions were developed:

        \u2022    The mobile version using React Native, created with expo
        \u2022    The website version using React.`,
        technologies: ['CSS','Redux','React', 'TypeScript'],
        github: 'https://github.com/Houser97/Weather-App',
        preview: 'https://houser97.github.io/Weather-App/',
    },
    {
        title: 'Where is Waldo',
        image: Waldo,
        description: "This application is inspired by the popular game 'Where's Waldo,' where the challenge lies in spotting specific characters within a crowded image filled with various elements. The app includes a timer to gauge how quickly users can locate three characters. User performance data, including the time taken, is stored in the database along with their usernames. Additionally, the game is designed to be responsive, ensuring that the image adapts seamlessly to various screen sizes.",
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'CSS'],
        github: 'https://github.com/Houser97/Where-is-walso-V2',
        preview: 'https://whereisgame.onrender.com/',
    },
    {
        title: 'Shopping Cart',
        image: Shopping,
        description: `The project emulates a Shopping Cart page with several noteworthy features:

        \u2022 Users can comment on available items and provide ratings based on their experiences.\t
        \u2022 Comments are interactive, allowing users to like or dislike them.\t
        \u2022 Items can be added to the user's cart, displaying the total amount in the cart and the price to be paid.\t
        
        User registration is facilitated through the use of Node.js and MongoDB as the server and database technologies. Additionally, Redux Toolkit has been implemented for efficient global state management, while Tailwind CSS has been employed for styling the application`,
        technologies: ['Tailwind CSS','Redux','MongoDB', 'Express.js', 'React', 'Node.js', 'Passport'],
        github: 'https://github.com/Houser97/Shopping-Cart',
        preview: 'https://shopping-cart-a2.onrender.com/',
    },
    {
        title: 'Disney Replica',
        image: Disney,
        description: `The application enables users to create an account using Passport, which incorporates a salting feature to enhance password security. Users can personalize their profiles by selecting a profile picture from a range of provided images, with the flexibility to update it at their convenience. 
        
        Moreover, the application features a WATCHLIST section that displays movies or series added by users. These selections are indicated by a checkmark SVG, signifying that the content has been successfully added. Users can easily remove items from their watchlist by clicking on the SVG. In total, approximately 21 images were utilized to enhance the user experience.`,
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Passport', 'CSS', 'TypeScript'],
        github: 'https://github.com/Houser97/Disney-V2',
        preview: 'https://disneyplus-54yk.onrender.com/',
    },
    {
        title: 'My Blog-API',
        image: BlogAPI,
        description: 'This project leverages the capabilities of the REST API concept to establish communication between the client (React) and the server (Node.js). Additionally, it implements a JWT token system to authenticate the blog owner, providing them with the authority to edit, delete, and create posts.',
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