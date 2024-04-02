import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "Reliqus",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "October 2023 - December 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies like wordPress.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Reactjs Developer",
        company_name: "Ek Solitaire",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "June 2023 - Oct 2023",
        points: [
            "Meticulously refining designs to precisely replicate Figma prototypes and leveraged Styled Components to craft responsive and visually compelling user interfaces",
            "Implemented state management through Redux, enhancing application performance by meticulously crafting code from the ground up",
            "Stayed abreast of industry trends, incorporating cutting-edge technologies and best practices into the development workflow.",
        ],
    },
    {
        title: "Reactjs Developer",
        company_name: "Nyadeko",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Mar 2023 - June 2023",
        points: [
            "Worked with the Redwing team of10 persons to improve app performance by optimizing API calls and static proping frequently used elements of data",
            "Used javascript library to developed over 10+ pages of website.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Reactjs Developer Intern",
        company_name: "Rablo",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Aug 2022 - Nov 2022",
        points: [
            "Acquiring industry-specific experience , gaining insights and increases my efficiency by 10X",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Tech Stack Used : Reactjs , tailwind Css, javascript , Api Integration",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'YouTube Clone',
        description: 'Created a Frontend replica of the popular video streaming platform "Youtube," enabling users to view and engage in popular content.',
        link: 'https://mytube-mridul.netlify.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Rentals App',
        description: 'Designed and built a web app for finding and renting cars on the market, streamlining the car-renting process.',
        link: 'https://car-rentals-mridul.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Messaging App',
        description: 'Built a complete end-to-end messaging app , allowing users to chat, share thoughts and talk with friends in a familiar social media environment.',
        link: 'https://gleaming-kelpie-0a3ae1.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'GERITCH Restaurant',
        description: 'Developed a web application for creating real restaurant ambience, facilitating customer searches and connecting foodies with heaven.',
        link: 'https://restaurant-mridul.netlify.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Admin data panel',
        description: 'App that leverages admins to manages the data of the employees and the users , also manipulate the data according to their choice.',
        link: 'https://sparkly-mandazi-29207d.netlify.app/',
    }
];