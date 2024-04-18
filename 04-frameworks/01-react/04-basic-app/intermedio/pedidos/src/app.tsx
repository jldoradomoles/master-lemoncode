import React from "react";
import AppRouter from "./router/app.router";
import { PedidosProvider } from "./core/providers/pedidosProviders.component";

export const App = () => {
    return (
        <>
            <PedidosProvider>
                <AppRouter />
            </PedidosProvider>
        </>
    );
};
