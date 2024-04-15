import React, { createContext, useState } from "react";
import { catEntity } from "./cats-list.vm";

export const CatsContext = createContext<any>(null);

const CatsProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [cats, setCats] = useState<catEntity[]>([]);

    const addCat = (cat: catEntity) => {
        setCats([...cats, cat]);
    };

    const deleteCat = (cat: catEntity) => {
        const updatedCats = cats.filter((c) => c.id !== cat.id);
        setCats(updatedCats);
    };

    return (
        <CatsContext.Provider value={{ cats, addCat, deleteCat, setCats }}>
            {children}
        </CatsContext.Provider>
    );
};

export default CatsProvider;
