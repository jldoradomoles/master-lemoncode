import React from "react";
import { CartElementComponent } from "../../components/cartElement.component";
import { catEntity } from "./cats-list.vm";

interface CartProps {
    cats: catEntity[];
}

export const CartComponent: React.FC<CartProps> = (props) => {
    const { cats } = props;
    return (
        <>
            {cats.map((cat) => (
                <div className="cat-item">
                    <CartElementComponent
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
