import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../styles/sectionStyles";
import { SkillList } from "../components/Content/Skills/SkillList";
import {skills} from "../data/data";


export const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SectionWrapper>
      <TitleWrapper>Skills</TitleWrapper>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SkillList type="softSkills" skills={skills.softSkills} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SkillList type="hardSkills" skills={skills.hardSkills} />
          </Grid>
        </Grid>
      </Box>
    </SectionWrapper>
  );
};
