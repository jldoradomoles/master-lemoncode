import React from "react";
import { CartComponent } from "./cart.component";
import { catEntity } from "./cats-list.vm";
import { getMockData } from "../../api";

export const CartContainer: React.FC = () => {
    const [members, setMember] = React.useState<catEntity[]>([]);
    const data = getMockData();

    React.useEffect(() => {
        data.length > 0 && setMember(data);
    }, []);

    return <CartComponent cats={members} />;
};
