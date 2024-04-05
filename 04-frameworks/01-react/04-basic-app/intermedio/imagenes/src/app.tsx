import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./components/list.component";
import { DetailPage } from "./detail";
import { CatsListScene } from "./scenes/cats-list.scene";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CatsListScene />} />
                {/* <Route path="/list" element={<ListPage />} />
                <Route path="/detail/:id" element={<DetailPage />} /> */}
            </Routes>
        </Router>
    );
};
