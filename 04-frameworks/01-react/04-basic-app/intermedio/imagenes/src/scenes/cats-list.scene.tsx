import React from "react";
import { CatsListContainer } from "@/pods/cats-list";
import { AppLayout } from "@/layouts/app.layouts";
import { CartContainer } from "@/pods/cart";

export const CatsListScene: React.FC = () => {
    return (
        <AppLayout>
            <CatsListContainer />
            <CartContainer />
        </AppLayout>
    );
};
