import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../styles/sectionStyles";
import { EducationCard } from "../components/Content/Education/EducationCard";
import {education} from "../data/data";


export const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <TitleWrapper>Education</TitleWrapper>
      <Box>
        <Grid container spacing={3}>
          {education.map((edu, ind) => (
            <Grid item xs={12} key={ind}>
              <EducationCard education={edu} ind={ind} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionWrapper>
  );
};
