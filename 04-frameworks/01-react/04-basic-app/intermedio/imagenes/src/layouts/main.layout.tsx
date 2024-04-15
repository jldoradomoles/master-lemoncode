import React from "react";

interface Props {
    children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return <div className="flex">{children}</div>;
};

export default MainLayout;
