import { catEntity } from "@/pods/cart/cats-list.vm";
import React, { createContext, useState } from "react";

export const CatsContext = createContext<any>(null);

const CatsProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [cats, setCats] = useState<catEntity[]>([]);
    const addCat = (cat: catEntity) => {
        setCats([...cats, cat]);
    };

    return (
        <CatsContext.Provider value={{ cats, addCat }}>
            {children}
        </CatsContext.Provider>
    );
};

export default CatsProvider;
