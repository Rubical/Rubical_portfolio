import React from "react";
import {AboutMe} from "../screens/AboutMe";
import {Certificates} from "../screens/Cetrificates";
import {Education} from "../screens/Education";
import {Experience} from "../screens/Experience";
import {Projects} from "../screens/Projects";
import {Skills} from "../screens/Skills";

interface Routes {
    path: string;
    element: React.FC;
}

export const routes = [
    {
        path: "/Rubical_portfolio/about-me?",
        element: AboutMe,
    },
    {
        path: "/Rubical_portfolio/certificates",
        element: Certificates,
    },{
        path: "/Rubical_portfolio/education",
        element: Education,
    },{
        path: "/Rubical_portfolio/experience",
        element: Experience,
    },{
        path: "/Rubical_portfolio/projects",
        element: Projects,
    },{
        path: "/Rubical_portfolio/skills",
        element: Skills,
    },

];
