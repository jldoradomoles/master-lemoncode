import React from "react";

interface ItemCartProps {
    title: string;
    picUrl: string;
    id: string;
}

export const CartElementComponent: React.FC<ItemCartProps> = (props) => {
    const { title, picUrl } = props;
    return (
        <div className="">
            <img src={picUrl} alt={title} />
            <p>{title}</p>
        </div>
    );
};
