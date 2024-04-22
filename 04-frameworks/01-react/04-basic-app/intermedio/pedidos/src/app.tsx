import React from "react";
import AppRouter from "./router/app.router";
import {
    PedidosContext,
    PedidosProvider,
} from "./core/providers/pedidosProviders.component";
import { Provider } from "react-redux";
import store from "../src/app/store";

export const App = () => {
    return (
        <>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </>
    );
};
