import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../styles/sectionStyles";
import { Project } from "../components/Content/Projects/ProjectCard";
import {projects} from "../data/data";


export const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <TitleWrapper>Projects</TitleWrapper>
      <Box>
        {projects.map((project,ind) => (
          <Project project={project} key={ind}/>
        ))}
      </Box>
    </SectionWrapper>
  );
};
