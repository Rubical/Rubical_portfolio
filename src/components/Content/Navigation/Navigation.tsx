import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import {sections} from "../../../data/sections";
import {useNavigate} from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', columnGap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
            {sections.map(el=> {return (
                <Button disableRipple={true} sx={{display: 'flex', flexDirection: 'column', transition: 'transform 0.1s ease-in', '&:hover': {transform: 'scale(1.1)', backgroundColor: 'transparent'}}} onClick={()=> {navigate(`/Rubical_portfolio/${el.navigation}`)}}>
                    <img style={{width: '70px', height: '70px', border: '1px solid black', borderRadius: '50%', padding: '5px'}} src={el.src}/>
                    <Typography sx={{fontSize: '13px', textTransform: 'none', color: 'black'}}>{el.name}</Typography>
                </Button>)})}
        </Box>
    );
};

export default Navigation;
