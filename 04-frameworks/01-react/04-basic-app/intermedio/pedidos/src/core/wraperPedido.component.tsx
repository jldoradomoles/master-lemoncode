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
    const { pedido, setPedido, updateImporteTotal, updateLineaPedidoImporte } =
        React.useContext(PedidosContext);
    const [member, setMember] = React.useState<Pedido>(null);

    React.useEffect(() => {
        // obtenemos los datos del pedido
        const data = getMockData();
        let totalImporte = 0;
        // Calculamos el importe total del pedido
        data.lineas.forEach((linea) => {
            totalImporte += linea.importe;
        });
        // Seteamos el pedido desde el mock y el importe total del pedido
        data && setPedido(data);
        updateImporteTotal(data, totalImporte);
        // pedido && updatePrecioLinea();
    }, []);

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
};
