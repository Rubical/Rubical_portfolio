import education from "../assets/education.png";
import skills from "../assets/skills.png";
import person from "../assets/hacker.png";
import experience from "../assets/experience.png";
import projects from "../assets/idea.png";
import certificates from "../assets/certificate.png";
import { AboutMe } from "../screens/AboutMe";
import {Experience} from "../screens/Experience";
import { Projects } from "../screens/Projects";
import { Education } from "../screens/Education";
import { Skills } from "../screens/Skills";
import { Certificates } from "../screens/Cetrificates";


export const sections = [
   {name:'About me',  src: person, navigation: 'about-me' },
   {name: 'Experience', src: experience, navigation: 'experience' },
   {name: 'Projects', src: projects, navigation: 'projects' },
   {name:'Education',  src: education, navigation: 'education' },
   {name: 'Skills', src: skills, navigation:'skills'},
   {name:'Certificates',
    src: certificates,
        navigation: 'certificates'},
];
