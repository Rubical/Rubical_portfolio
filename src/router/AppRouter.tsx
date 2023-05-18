import { FC, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import {routes} from "./routes";

const AppRouter: FC = () => {

    return (
        <Routes>
            {routes.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element />}
                    />
                );
            })}
        </Routes>
    );
};

export default AppRouter;