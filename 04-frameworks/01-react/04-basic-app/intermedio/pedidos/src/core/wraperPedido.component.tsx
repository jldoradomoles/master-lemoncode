import { getMockData } from "@/api/api";
import { AppLayout } from "@/layouts/app.layouts";
import { CenterLayout } from "@/layouts/center.layouts";
import { HeaderContainer } from "@/pods/header";
import { TablaContainer } from "@/pods/tabla/tabla.container";
import React from "react";
import {
    PedidosContext,
    PedidosProvider,
} from "./providers/pedidosProviders.component";
import { Pedido } from "../api/api.model";

export const WraperPedidoComponent: React.FC = () => {
    const { pedido, setPedido, updateImporteTotal } =
        React.useContext(PedidosContext);

    React.useEffect(() => {
        const data = getMockData();
        console.log("data----->", data);

        let totalImporte = 0;
        data.lineas.forEach((linea) => {
            totalImporte += linea.importe;
        });
        console.log("Total Importe:", totalImporte);

        data && setPedido(data);
        updateImporteTotal(totalImporte);
    }, []);

    console.log(pedido);
    if (pedido !== undefined && pedido !== null) {
        return (
            <AppLayout>
                <CenterLayout>
                    <PedidosProvider>
                        <HeaderContainer pedido={pedido} />
                        <TablaContainer pedido={pedido} />
                    </PedidosProvider>
                </CenterLayout>
            </AppLayout>
        );
    }
};
