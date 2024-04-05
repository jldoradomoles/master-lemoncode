import React from "react";
import { catEntity } from "./cats-list.vm";
import { CatsListComponent } from "./cats-list.component"; // Import the missing component
import { getMockData } from "../../api";

export const CatsListContainer: React.FC = () => {
    const [members, setMember] = React.useState<catEntity[]>([]);
    // const data = getMockData();
    const data = [
        {
            id: "1",
            picUrl: "../assets/gato1.jpg",
            title: "Picture 1",
        },
        {
            id: "2",
            picUrl: "../assets/gato2.jpg",
            title: "Picture 2",
        },
        {
            id: "3",
            picUrl: "../assets/gato3.jpg",
            title: "Picture 3",
        },
        {
            id: "4",
            picUrl: "../assets/gato4.jpg",
            title: "Picture 4",
        },
        {
            id: "5",
            picUrl: "../assets/gato5.jpg",
            title: "Picture 5",
        },
    ];
    // data.length > 0 && setMember(data);
    return <CatsListComponent cats={data} />;
};
