import React from "react";
import { AppLayout } from "@/layouts/app.layouts";
import { HeaderContainer } from "@/pods/header";
import { TablaContainer } from "@/pods/tabla/tabla.container";
import { CenterLayout } from "@/layouts/center.layouts";
import { getMockData } from "@/api";
import { WraperPedidoComponent } from "@/core/wraperPedido.component";

export const PedidoScene: React.FC = () => {
    return <WraperPedidoComponent />;
};
