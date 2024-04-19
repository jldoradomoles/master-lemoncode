import React from "react";
import AppRouter from "./router/app.router";
import {
    PedidosContext,
    PedidosProvider,
} from "./core/providers/pedidosProviders.component";
import { getMockData, Pedido } from "./api";

export const App = () => {
    return (
        <>
            <PedidosProvider>
                <AppRouter />
            </PedidosProvider>
        </>
    );
};
