import BlogAPI from '../assets/images/BlogAPI2.JPG'
import MembersOnly from '../assets/images/MembersOnly2.JPG'
import Disney from '../assets/images/DisneyOverview.JPG'
import Waldo from '../assets/images/WhereIsOverview.JPG'

import Passport from '../assets/Icons/passport.png'
import Jwt from '../assets/Icons/jwt.png'

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
        text: 'javascript',
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
        classIcon: 'devicon-mongodb-plain',
        text: 'MongoDB',
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
        classIcon: 'devicon-npm-original-wordmark',
        text: 'npm',
        isDevicon: true
    },
    {
        classIcon: 'devicon-heroku-plain',
        text: 'Heroku',
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
        title: 'My Blog-API',
        image: BlogAPI,
        description: 'This project takes advantage of the functionalities of the REST API concept to communicate the client (React) with the server (Node JS). In addition, it makes use of a JWT token to authenticate the blog owner and grant editing, deletion and post creation capabilities.',
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT'],
        github: 'https://github.com/Houser97/Blog-API',
        preview: 'https://my-blog-api.onrender.com',
    },
    {
        title: 'Members Only',
        image: MembersOnly,
        description: "The application allows users to read messages from others, where message information (creation date and author) is presented according to the user's role. When creating an account it is possible to create messages that will appear in the main window, and for those who enter the secret code will have access to more information about the message. The application uses Passport to authenticate users, who are assigned a specific role that is used by the application to conditionally render elements. On the other hand, EJS is used instead of React to create the frontend.",
        technologies: ['MongoDB', 'Express.js', 'Node.js', 'Passport'],
        github: 'https://github.com/Houser97/members-only',
        preview: 'https://members-only-r266.onrender.com',
    },
    {
        title: 'Disney Replica',
        image: Disney,
        description: "The application allows users to create an account through Passport, where the SALTING feature is added to add protection to the passwords entered. Users can choose a profile picture from the images provided. Also, they have the possibility to update this profile picture at any time. On the other hand, the WATCHLIST section shows the movies or series that users have added to their list, which indicate with a checkmark SVG that the card has been added. Users can also remove movies from this section by clicking on the SVG. In total about 21 images were used.",
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Passport'],
        github: 'https://github.com/Houser97/Disney-V2',
        preview: 'https://disneyplus-54yk.onrender.com/',
    },
    {
        title: 'Where is Waldo',
        image: Waldo,
        description: "This application is based on the game Where's Waldo, which consists of finding certain characters in an image full of various elements. The application has a timer to measure the time it takes users to find the three characters. The accumulated time is saved in the database along with a username. On the other hand, the game has responsive qualities, since the image can be adapted to different screen sizes without losing its radius of appearance.",
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        github: 'https://github.com/Houser97/Where-is-walso-V2',
        preview: 'https://whereisgame.onrender.com/',
    }
]