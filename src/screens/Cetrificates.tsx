import { useEffect } from "react";
import { Box } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../styles/sectionStyles";
import { Certification } from "../components/Content/Certification/Certification";
import {certificates} from "../data/data";


export const Certificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <TitleWrapper>Certificates</TitleWrapper>
      <Box>
        {certificates.map((certificate) => (
          <Certification certificate={certificate} key={certificate.name} />
        ))}
      </Box>
    </SectionWrapper>
  );
};
