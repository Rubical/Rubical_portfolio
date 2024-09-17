import zenixFilmImg from './../assets/projects-img/zenix-film-img.jpg'
import zenixCarsImg from './../assets/projects-img/zenix-cars-img.jpg'
import zenixCryptoImg from './../assets/projects-img/zenix-crypto-img.jpg'
import efsetCert from './../assets/efset-cert.jpg'


export const aboutMe = 'Hello! My name is Evgeniy Pivovarov. Lawyer by education, programmer by calling. \n Currently open to job offers.'


export const experience = [
    {
        span: "November 2022 -  June 2023",
        company: "Freelance",
        location: "Brest, Belarus",
        progress: [
            {
                role: "Frontend developer",
                span: "November 2022 -  June 2023",
                descriptions: [
                    "Development of the user interface, including the creation of components, forms, sliders and drop-down menus; ",
                    "Working with Redux Toolkit to manage application state and Redux Thunk to handle asynchronous requests; ",
                    "Styling - scss and styled-components, working with design libraries such as Material UI and Bootstrap; ",
                    "Integration with API and other external services; ",
                ]
            },
        ]
    },

]


export const projects = [
    {
        name: "Zenix crypto",
        description: "An application containing news about cryptocurrency, current cryptocurrency rates, as well as a separate page for interacting with the github profile. Created using NYtimes data, github API.",
        sourceCode: "https://github.com/Rubical/Zenix_Crypto",
        demoLink: "https://rubical.github.io/Zenix_Crypto/",
        img:zenixCryptoImg,

    },
    {
        name: "Zenix film",
        warning: 'Currently works only from european IPs or with paid proxy.',
        description: "Movie database containing over a hundred thousand movies." +
            " Based on themoviedb API.",
        sourceCode: "https://github.com/Rubical/Zenix_Film",
        demoLink: "https://rubical.github.io/Zenix_Film/",
        img:zenixFilmImg,


    },{
        name: "Zenix cars",
        warning: 'THIS IS APP IS STILL IN PROGRESS!',
        description: "Animated application for the selection of cars in various categories. Pictures taken from imagin.studio.",
        sourceCode: "https://github.com/Rubical/Zenix_Cars",
        demoLink: "https://rubical.github.io/Zenix_Cars/",
        img:zenixCarsImg,

    }
]


export const education = [
    {
        name: "BSU",
        location: "Minsk, Belarus",
        course: "Law faculty",
        span: "2017 - 2021",
        specialization: "Jurisprudence",
        score: "7.8 CGPA"
    },

]

export const skills = {
    softSkills: [
        "JavaScript, TypeScript;",
        "React.js, Redux;",
        "Vue.js, Vuex;",
        "Next.js;",
        "APIs, GraphQL;",
        "Bootstrap, MaterialUI;",
    ],

    hardSkills: [
        "Analytical mind;",
        "Punctuality;",
        "Perseverance;",
        "Learnability;",
        "Purposefulness;",
        "Ability to concentrate."
    ]
}

export const certificates = [
    {
        name: "English level certificate",
        org: "EFSET",
        issued: "Feb 2023",
        expiry: "",
        credentialId: "5Wij3N",
        credentialUrl: "https://www.efset.org/cert/5Wij3N",
        img:efsetCert
    },

]
