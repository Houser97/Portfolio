import BlogAPI from '../assets/images/BlogAPI.JPG'
import MembersOnly from '../assets/images/MembersOnly.JPG'

export const icons = [
    {
        classIcon: 'devicon-html5-plain colored icon',
        text: 'HTML'
    },
    {
        classIcon: 'devicon-css3-plain colored icon',
        text: 'CSS'
    },
    {
        classIcon: 'devicon-javascript-plain colored icon',
        text: 'javascript'
    },
    {
        classIcon: 'devicon-git-plain colored icon',
        text: 'GIT'
    },
    {
        classIcon: 'devicon-react-original colored icon',
        text: 'React'
    },
    {
        classIcon: 'devicon-nodejs-plain colored icon',
        text: 'Node.js'
    },
    {
        classIcon: 'devicon-express-original colored icon express',
        text: 'Express.js'
    },
    {
        classIcon: 'devicon-mongodb-plain colored icon',
        text: 'MongoDB'
    },
    {
        classIcon: 'devicon-jest-plain colored icon',
        text: 'Jest'
    },
    {
        classIcon: 'devicon-webpack-plain colored icon',
        text: 'Webpack'
    },
    {
        classIcon: 'devicon-npm-original-wordmark colored icon',
        text: 'npm'
    },
    {
        classIcon: 'devicon-heroku-plain colored icon',
        text: 'Heroku'
    },
    {
        classIcon: 'devicon-docker-plain colored icon',
        text: 'Docker'
    },
    {
        classIcon: 'devicon-python-plain colored icon',
        text: 'Python'
    },
]

export const projects = [
    {
        image: BlogAPI,
        description: 'The project is composed of a REST API to bridge the gap between the client (REACT) and the server (Node JS).',
        technologies: ['MongoDB', 'Express', 'React', 'Node'],
        github: 'https://github.com/Houser97/Blog-API',
        preview: 'https://my-blog-api.onrender.com',
    },
    {
        image: MembersOnly,
        description: 'Aside from working with Node as backend and ejs, passport is used to add security to users signing up by means of salting.',
        technologies: ['MongoDB', 'Express', 'Node', 'Passport'],
        github: 'https://github.com/Houser97/members-only',
        preview: 'https://members-only-r266.onrender.com',
    }
]