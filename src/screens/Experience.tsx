import { Box, styled } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../styles/sectionStyles";
import ExperienceCard from "../components/Content/Experience/ExperienceCard";
import {experience} from "../data/data";


const ExperienceWrapper = styled(Box)(() => ({}));


export const Experience = () => {
  return (
    <SectionWrapper>
      <TitleWrapper>Experience</TitleWrapper>
      <ExperienceWrapper>
        {experience.map((experience, ind) => (
          <ExperienceCard experience={experience} key={ind} />
        ))}
      </ExperienceWrapper>
    </SectionWrapper>
  );
};
