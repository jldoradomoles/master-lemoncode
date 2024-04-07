import React, { Fragment } from "react";
import { catEntity } from "./cats-list.vm";
import { ItemCard } from "../../components/itemCard.component";
import List from "@mui/material/List";
import { Key } from "@mui/icons-material";

interface Props {
    cats: catEntity[];
}

export const CatsListComponent: React.FC<Props> = (prpos) => {
    const { cats } = prpos;
    return (
        <>
            {cats.map((cat) => (
                <div className="cat-item">
                    <ItemCard
                        key={cat.id}
                        title={cat.title}
                        picUrl={cat.picUrl}
                        id={cat.id}
                    />
                </div>
            ))}
        </>
    );
};
