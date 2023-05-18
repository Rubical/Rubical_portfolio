import {Box, Grid, styled} from "@mui/material";
import AppRouter from "../../router/AppRouter";
import Navigation from "./Navigation/Navigation";

const Wrapper = styled(Box)(({theme}) => ({
    width: "85%",
    margin: "0 auto",
    display: "flex",
    flex: 1,
    marginTop: 84,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        width: "92%"
    },
}));

export const ContentContainer = () => {
    return (
        <Wrapper>
            <Navigation/>
            <AppRouter/>
        </Wrapper>
    );
};
