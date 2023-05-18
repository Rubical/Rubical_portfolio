import {styled, Box} from "@mui/material";
import resume from "../assets/resume/Pivovarov Eugene Aliaksandrovich.pdf";
import {
    CustomButton,
    SectionWrapper,
    TitleWrapper,
} from "../styles/sectionStyles";
import {useEffect} from "react";
import {aboutMe} from "../data/data";
import hackerImg from '../assets/pic.png'

const AboutMeContainer = styled(Box)(({theme}) => ({
    display: "flex",
    "& img": {
        width: 400,
        [theme.breakpoints.down("sm")]: {
            width: 350,
        },
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const DetailsWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 17,
    marginLeft: 15,
    "& .actions": {
        margin: "24px 0",
    },
    [theme.breakpoints.down("md")]: {
        margin: "10px 0 0 0",
    },
}));
export const AboutMe = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SectionWrapper>
            <TitleWrapper>About Me</TitleWrapper>
            <AboutMeContainer>
                <img style={{maxWidth: '360px', maxHeight: '360px', width: '100%', height: '100%'}} src={hackerImg}/>
                <DetailsWrapper>
                    <div style={{lineHeight: '1.5'}}>{aboutMe}</div>
                    <div className="actions">
                        <CustomButton>
                            <a href={resume} rel="noreferrer" target="_blank">
                                View Resume
                            </a>
                        </CustomButton>
                    </div>
                </DetailsWrapper>
            </AboutMeContainer>
        </SectionWrapper>
    );
};
