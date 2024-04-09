import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import { CatsListScene } from "@/scenes/cats-list.scene";
import { switchRoutes } from "./routes";

const AppRouter: React.FC = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={switchRoutes.root} element={<CatsListScene />} />
            </Routes>
        </HashRouter>
    );
};

export default AppRouter;
