import BlogAPI from '../assets/images/BlogAPI2.JPG'
import MembersOnly from '../assets/images/MembersOnly2.JPG'

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
        description: 'This project takes advantage of the functionalities of the REST API concept to communicate the client (React) with the server (Node JS). In addition, it makes use of a JWT token to authenticate the blog owner and grant editing, deletion and post creation capabilities.',
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