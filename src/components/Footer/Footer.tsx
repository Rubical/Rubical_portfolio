import {styled, Box, Link} from "@mui/material";
import {StyleConstants} from "../../styles/StyleConstants";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from '@mui/icons-material/Phone';


const FooterContainer = styled(Box)(({theme}) => ({
    height: 150,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: StyleConstants.FOOTER,
    bottom: 0,
    zIndex: 1,
    padding: '15px 0',
    fontWeight: 600,
    "& .mail": {
        display: "flex",
        padding: 6,
        minWidth: 350,
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
            paddingRight: 12,
            fontSize: 32,
        },
    },
    "& .links": {
        display: "flex",
        padding: 6,
        width: 350,
        justifyContent: "center",
        columnGap: '20px',
        "& svg": {
            paddingRight: 12,
            fontSize: 32,
        },
    },
    "& .divider": {
        height: 7,
        borderTop: "1px solid rgba(0,0,0,0.1)",
        width: "95%",
    },
    "& .creator": {
        fontSize: 12,
        opacity: 0.85,
        padding: "0 0 5px",
        "& a": {
            textDecoration: "none",
            color: StyleConstants.BLACK_COLOR,
            "&:hover": {
                color: StyleConstants.HEADER,
            }
        },
    },
    "& .actions": {
        padding: 5,
        "& button": {
            marginRight: 6,
        },
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: 14,
    },
}));
export const Footer = () => {

    return (
        <FooterContainer>
            <Box>
                <Link sx={{
                    color: 'black',
                    textDecoration: 'none',
                    transition: 'transform 0.1s ease-in',
                    '&:hover': {transform: 'scale(1.05)'}
                }} href='mailto:zhpiv96@mail.ru' className="mail">
                    <EmailIcon/> zhpiv96@mail.ru
                </Link>
                <Link sx={{
                    color: 'black',
                    textDecoration: 'none',
                    transition: 'transform 0.1s ease-in',
                    '&:hover': {transform: 'scale(1.05)'}
                }} href='tel:+375297205075' className="mail">
                    <PhoneIcon/> +375297205075
                </Link>
            </Box>
            <Box className="links">
                <Link sx={{transition: 'transform 0.1s ease-in', '&:hover': {transform: 'scale(1.1)'}}}
                      href='https://github.com/Rubical' target="_blank" style={{color: "black"}}>
                    <GitHubIcon/>
                </Link>
                <Link sx={{transition: 'transform 0.1s ease-in', '&:hover': {transform: 'scale(1.1)'}}}
                      href='https://www.linkedin.com/in/eugene-pivovarov-b5665116a/' target="_blank"
                      style={{color: "black"}}>
                    <LinkedInIcon/>
                </Link>
                <Link sx={{transition: 'transform 0.1s ease-in', '&:hover': {transform: 'scale(1.1)'}}}
                      href='https://twitter.com/Berxmanz' target="_blank" style={{color: "black"}}>
                    <TwitterIcon/>
                </Link>
            </Box>
            <Box className="divider"/>
            <Box className="creator">
                &copy; 2023 Rubical. All rights reserved
            </Box>
        </FooterContainer>
    );
};
