export interface IconType {
    classIcon: string;
    text: string;
    isDevicon: boolean;
}

export interface ProjectType {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    github: string;
    preview: string;
}

export const icons: IconType[] = [
    // {
    //     classIcon: 'devicon-html5-plain',
    //     text: 'HTML',
    //     isDevicon: true
    // },
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
    // {
    //     classIcon: 'devicon-git-plain',
    //     text: 'GIT',
    //     isDevicon: true
    // },
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
    // {
    //     classIcon: 'devicon-express-original express',
    //     text: 'Express.js',
    //     isDevicon: true
    // },
    {
        classIcon: 'devicon-nestjs-plain',
        text: 'NestJS',
        isDevicon: true
    },
    {
        classIcon: 'devicon-redux-plain',
        text: 'Redux',
        isDevicon: true
    },
    // {
    //     classIcon: 'devicon-flutter-plain',
    //     text: 'Flutter',
    //     isDevicon: true
    // },
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
    // {
    //     classIcon: 'devicon-webpack-plain',
    //     text: 'Webpack',
    //     isDevicon: true
    // },
    {
        classIcon: 'devicon-docker-plain',
        text: 'Docker',
        isDevicon: true
    },
    {
        classIcon: 'devicon-csharp-plain',
        text: 'C#',
        isDevicon: true
    },
    {
        classIcon: 'devicon-dotnetcore-plain',
        text: 'ASP.NET Core',
        isDevicon: true
    },
    {
        classIcon: 'devicon-java-plain',
        text: 'Java',
        isDevicon: true
    },
    {
        classIcon: 'devicon-googlecloud-plain',
        text: 'Google Cloud',
        isDevicon: true
    },
    {
        classIcon: 'devicon-python-plain',
        text: 'Python',
        isDevicon: true
    },
    {
        classIcon: 'https://res.cloudinary.com/dluwqcce9/image/upload/v1734284574/Portfolio/PassportWB_q8zmaj.png',
        text: 'Passport',
        isDevicon: false
    },
    {
        classIcon: 'https://res.cloudinary.com/dluwqcce9/image/upload/v1734284574/Portfolio/jwtBW_mfpyen.png',
        text: 'JWT',
        isDevicon: false
    },
    {
        classIcon: 'devicon-kubernetes-plain',
        text: 'Kubernetes',
        isDevicon: true
    }
]

export const projects: ProjectType[] = [
    {
        title: 'In Touch IO - Messaging App',
        image: 'https://res.cloudinary.com/dluwqcce9/image/upload/v1734284604/Portfolio/InTouchIo_i7f47x.jpg',
        description: `The app uses MongoDB, Express, Node, React, and Socket IO to deliver a complete real-time messaging application. Additionally, Cloudinary is employed to store user images which are used for profile pictures or within messages.

        The app is fully responsive, ensuring a seamless user experience across all devices.  Users can either create an account or opt for the demo user provided in the login component to begin interacting with the application's features. Moreover, the authentication process leverages JSON Web Tokens (JWT) to secure user data and protect the application's routes.`,
        technologies: ['MongoDB', 'Express.js', 'React', 'CSS', 'TypeScript', 'Socket IO', 'JWT'],
        github: 'https://github.com/Houser97/In-Touch-IO',
        preview: 'https://in-touch-io.onrender.com',
    },
    {
        title: 'Shopping Cart',
        image: 'https://res.cloudinary.com/dluwqcce9/image/upload/v1734284604/Portfolio/Shopping_kuq8qj.png',
        description: `The project emulates a Shopping Cart page with several features:

        \u2022 Users can comment on available items and provide ratings based on their experiences.\t
        \u2022 Comments are interactive, allowing users to like or dislike them.\t
        \u2022 Items can be added to the user's cart, displaying the total amount in the cart and the price to be paid.\t
        
        User registration is facilitated through the use of Node.js and MongoDB as the server and database technologies. Additionally, Redux Toolkit has been implemented for efficient global state management, while Tailwind CSS has been employed for styling the application.`,
        technologies: ['Tailwind CSS', 'Redux', 'MongoDB', 'Express.js', 'React', 'Node.js', 'Passport'],
        github: 'https://github.com/Houser97/Shopping-Cart',
        preview: 'https://shopping-cart-a2.onrender.com/',
    },
    {
        title: 'Where is Waldo',
        image: 'https://res.cloudinary.com/dluwqcce9/image/upload/v1734284605/Portfolio/WhereIsOverview_j0aypq.jpg',
        description: `This application is inspired by the popular game 'Where's Waldo,' where the challenge lies in spotting specific characters within a crowded image filled with various elements. 
        
        The app includes a timer to gauge how quickly users can locate three characters. The time taken to find all characters is stored in the database along with their usernames. Additionally, the game is designed to be responsive, ensuring that the image adapts seamlessly to various screen sizes.`,
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'CSS'],
        github: 'https://github.com/Houser97/Where-is-walso-V2',
        preview: 'https://whereisgame.onrender.com/',
    },
    // {
    //     title: `Weather App React And React Native`,
    //     image: Weather,
    //     description: `This project showcases weather-related information sourced from the OpenWeatherMap API, which is based on the user's specified city. The application provides essential weather data, including: Temperature (available in both Celsius and Fahrenheit), Humidity levels, Atmospheric pressure, Wind speed, Sunrise and Sunset time, Feels Like Temperature, Min & Max Temperature, and Current UV index. For this project, two versions were developed:

    //     \u2022    The mobile version is built with React Native and created using Expo. The link to it can be found in the README file of the repository.
    //     \u2022    The website version using React.`,
    //     technologies: ['CSS', 'Redux', 'React', 'TypeScript'],
    //     github: 'https://github.com/Houser97/Weather-App',
    //     preview: 'https://houser97.github.io/Weather-App/',
    // },
    // {
    //     title: 'Disney Replica',
    //     image: Disney,
    //     description: `The application enables users to create an account using Passport, which incorporates a salting feature to enhance password security. Users can personalize their profiles by selecting a profile picture from a range of provided images. 
        
    //     Moreover, the application features a WATCHLIST section users can see the movies or series they've added from the available options. These selections are indicated by a checkmark SVG, signifying that the content has been successfully added. Users can easily remove items from their watchlist by clicking on the SVG. In total, approximately 21 images were utilized.`,
    //     technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Passport', 'CSS', 'TypeScript'],
    //     github: 'https://github.com/Houser97/Disney-V2',
    //     preview: 'https://disneyplus-54yk.onrender.com/',
    // }
]