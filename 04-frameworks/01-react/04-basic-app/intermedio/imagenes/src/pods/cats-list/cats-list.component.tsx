import React from "react";
import { catEntity } from "./cats-list.vm";
import { ItemCard } from "../../components/itemCard.component";

interface Props {
    cats: catEntity[];
}

export const CatsListComponent: React.FC<Props> = (prpos) => {
    const { cats } = prpos;
    console.log("hola", cats);

    return (
        <>
            {cats.length > 0 ? (
                cats.map((cat) => {
                    <ItemCard title={cat.title} picUrl={cat.picUrl} />;
                })
            ) : (
                <div>There are no cats</div>
            )}
        </>
    );
};
