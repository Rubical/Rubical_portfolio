import {Box, Link, styled} from "@mui/material";
import {CustomButton} from "../../../styles/sectionStyles";
import {StyleConstants} from "../../../styles/StyleConstants";


interface projectCard {
    name: string;
    description: string;
    sourceCode: string;
    demoLink: string;
    img: string;
    warning?: string
}

interface Prop {
    project: projectCard;
}

const InfoWrapper = styled(Box)(() => ({
    "& .name": {
        fontSize: StyleConstants.SIZE_ITEM_TITLE,
    },
    "& .desc": {
        padding: '15px 15px 15px 0',
    },
    "& .actions button": {
        margin: "0 12px 12px 0",
    },
}));
const ProjectWrapper = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: StyleConstants.SPACE_BETWEEN_SECTIONS,
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));
const ImageBox = styled(Box)(({theme}) => ({
    marginRight: 10,
    width: 400,
    "& img": {
        border: "1px solid black",
        width: 400,
    },
    [theme.breakpoints.down("sm")]: {
        width: 350,
        "& img": {
            width: 350,
        },
    },
}));
export const Project = ({project}: Prop) => {
    const {
        name,
        description,
        sourceCode,
        demoLink,
        img,
        warning
    } = project;

    return (
        <ProjectWrapper>
            <InfoWrapper>
                <div className="name bold">{name}</div>
                <div style={{color: 'red', fontWeight: '600'}}>{warning}</div>
                <div className="desc">{description}</div>
                <div className="actions">
                    <CustomButton>
                        <a href={sourceCode} target="_blank" rel="noreferrer">
                            Source Code
                        </a>
                    </CustomButton>
                    <CustomButton>
                        <a href={demoLink} target="_blank" rel="noreferrer">
                            Demo
                        </a>
                    </CustomButton>
                </div>
            </InfoWrapper>
            <Link href={demoLink} target="_blank" sx={{transition: 'transform 0.2s ease-in', '&:hover': {transform: 'scale(1.05)'}}}>
                <ImageBox>
                    <img style={{maxWidth: '400px', width: '100%', height: '200px' }}
                         src={img}
                         alt="projectCard"
                    />
                </ImageBox></Link>
        </ProjectWrapper>
    )
        ;
};
