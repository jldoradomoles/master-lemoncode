import React from "react";
import { CartComponent } from "./cart.component";
import { catEntity } from "./cats-list.vm";
import { getMockData } from "../../api";
import { CatsContext } from "@/core/providers/catsProvider.component";

export const CartContainer: React.FC = () => {
    const [members, setMember] = React.useState<catEntity[]>([]);
    const data = getMockData();

    const { cats, addCat, deleteCat } = React.useContext(CatsContext);

    const getCatById = (id: string) => {
        return members.find((cat) => cat.id === id);
    };

    const handleClick = (id: string) => {
        const cat = getCatById(id);
        deleteCat(cat);
    };

    React.useEffect(() => {
        // data.length > 0 && setMember(data);
    }, []);

    return (
        <CartComponent onClick={(id: string) => handleClick(id)} cats={cats} />
    );
};
