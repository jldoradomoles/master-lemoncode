import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./components/list.component";
import { DetailPage } from "./detail";
import { CatsListScene } from "./scenes/cats-list.scene";
import AppRouter from "./router/app.router";
import CatsProvider from "./core/providers/catsProvider.component";

export const App = () => {
    return (
        <>
            <CatsProvider>
                <AppRouter />
            </CatsProvider>
        </>
    );
};
