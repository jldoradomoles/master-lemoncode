import React, { Fragment } from "react";
import { catEntity } from "../cart/cats-list.vm";
import { ItemCard } from "../../components/itemCard.component";

interface Props {
    cats: catEntity[];
    onClick: (id: string) => void;
}

export const CatsListComponent: React.FC<Props> = (props) => {
    const { cats, onClick } = props;
    const handleClick = (id: string) => {
        onClick(id);
    };
    return (
        <>
            {cats.map((cat) => (
                <div key={cat.id} className="cat-item">
                    <ItemCard
                        onClick={(id: string) => handleClick(id)}
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
