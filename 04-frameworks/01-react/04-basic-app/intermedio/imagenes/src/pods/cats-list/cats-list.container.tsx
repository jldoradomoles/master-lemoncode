import React from "react";
import { catEntity } from "./cats-list.vm";
import { CatsListComponent } from "./cats-list.component"; // Import the missing component
import { getMockData } from "../../api";
import "../../assets/gato1.jpg";
import { CenterLayout } from "../../layouts/center.layouts";

export const CatsListContainer: React.FC = () => {
    const [members, setMember] = React.useState<catEntity[]>([]);
    const data = getMockData();

    React.useEffect(() => {
        data.length > 0 && setMember(data);
    }, []);
    return (
        <CenterLayout>
            <CatsListComponent cats={members} />
        </CenterLayout>
    );
};
