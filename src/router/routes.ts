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
        path: "/rubical_portfolio/about-me",
        element: AboutMe,
    },
    {
        path: "/rubical_portfolio/certificates",
        element: Certificates,
    },{
        path: "/rubical_portfolio/education",
        element: Education,
    },{
        path: "/rubical_portfolio/experience",
        element: Experience,
    },{
        path: "/rubical_portfolio/projects",
        element: Projects,
    },{
        path: "/rubical_portfolio/skills",
        element: Skills,
    },

];
