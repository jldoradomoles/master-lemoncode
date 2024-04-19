import React from "react";
import { catEntity } from "../cart/cats-list.vm";
import { CatsListComponent } from "./cats-list.component"; // Import the missing component
import { getMockData } from "../../api";
import "../../assets/gato1.jpg";
import { CenterLayout } from "../../layouts/center.layouts";
import { CatsContext } from "@/core/providers/catsProvider.component";

export const CatsListContainer: React.FC = () => {
    const [members, setMember] = React.useState<catEntity[]>([]);
    const data = getMockData();

    const { cats, addCat, deleteCat } = React.useContext(CatsContext);

    const getCatById = (id: string) => {
        return members.find((cat) => cat.id === id);
    };

    const handleClick = (id: string) => {
        const cat = getCatById(id);
        cats.find((cat) => cat.id === id) ? deleteCat(cat) : addCat(cat);
    };

    React.useEffect(() => {
        // data.length > 0 && setMember(data);
    }, []);
    return (
        <CenterLayout>
            <CatsListComponent
                onClick={(id: string) => handleClick(id)}
                cats={members}
            />
        </CenterLayout>
    );
};
