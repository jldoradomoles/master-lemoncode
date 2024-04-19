import React from "react";
import { HeaderComponent } from "./header.component";
import { Pedido } from "../../api/api.model";
import { getMockData } from "@/api/api";
import { PedidosContext } from "@/core/providers/pedidosProviders.component";
import { PedidoEntity } from "@/core/providers/pedidos.vm";

interface Props {
    pedido: PedidoEntity;
}

export const HeaderContainer: React.FC<Props> = (props) => {
    const { pedido } = props;
    const [member, setMember] = React.useState<PedidoEntity>(null);

    console.log(pedido);

    React.useEffect(() => {
        setMember(pedido);
    }, [pedido]);

    return <HeaderComponent pedido={member} />;
};
