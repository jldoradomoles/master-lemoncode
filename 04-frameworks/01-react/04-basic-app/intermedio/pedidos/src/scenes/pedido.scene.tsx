import React from "react";
import { AppLayout } from "@/layouts/app.layouts";
import { HeaderContainer } from "@/pods/header";
import { TablaContainer } from "@/pods/tabla/tabla.container";
import { CenterLayout } from "@/layouts/center.layouts";

export const PedidoScene: React.FC = () => {
    return (
        <AppLayout>
            <CenterLayout>
                <HeaderContainer />
                <TablaContainer />
            </CenterLayout>
        </AppLayout>
    );
};
