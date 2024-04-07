import React from "react";
import { CatsListContainer } from "../pods/cats-list";
import { AppLayout } from "../layouts/app.layouts";

export const CatsListScene: React.FC = () => {
    return (
        <AppLayout>
            <CatsListContainer />
        </AppLayout>
    );
};
