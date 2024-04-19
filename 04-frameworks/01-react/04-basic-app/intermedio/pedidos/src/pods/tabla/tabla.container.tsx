import React from "react";
import { TablaComponent } from "./tabla.component";
import { LineaPedido, PedidoEntity } from "@/core/providers/pedidos.vm";

interface Props {
    pedido: PedidoEntity;
}

export const TablaContainer: React.FC<Props> = (props) => {
    const { pedido } = props;
    const [member, setMember] = React.useState<PedidoEntity>();

    React.useEffect(() => {
        setMember(pedido); // Wrap pedido inside an array
    }, [pedido]);

    return <TablaComponent pedido={pedido} />;
};
