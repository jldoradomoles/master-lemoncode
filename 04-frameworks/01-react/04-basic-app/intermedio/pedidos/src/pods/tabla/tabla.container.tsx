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

    const handleImporteTotal = (
        pedido: PedidoEntity,
        newImporteTotal: number,
        id?: string
    ) => {
        console.log("en updated");
        let pedidoUpdated = { ...pedido, importeTotal: newImporteTotal };
        setMember(pedidoUpdated);
    };

    return <TablaComponent pedido={pedido} />;
};
