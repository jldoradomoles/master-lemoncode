import { TrashButton } from "@/common/components/trashButton.component";
import React from "react";

interface ItemCartProps {
    title: string;
    picUrl: string;
    id: string;
    onClick: (id: string) => void;
}

export const CartElementComponent: React.FC<ItemCartProps> = (props) => {
    const { title, picUrl, id, onClick } = props;
    function handleClick(id): void {
        onClick(id);
    }

    return (
        <div className="d-flex">
            <img className="image-trash" src={picUrl} alt={title} />
            <div className="m-auto cart-elemnet-text">
                <p>{title}</p>
            </div>
            <div className="m-auto">
                <TrashButton onClick={() => handleClick(id)} />
            </div>
        </div>
    );
};
