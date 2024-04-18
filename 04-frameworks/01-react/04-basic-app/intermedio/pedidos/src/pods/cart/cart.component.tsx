import React from "react";
import { CartElementComponent } from "../../components/cartElement.component";
import { catEntity } from "./cats-list.vm";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface CartProps {
    cats: catEntity[];
    onClick: (id: string) => void;
}

export const CartComponent: React.FC<CartProps> = (props) => {
    const { cats, onClick } = props;
    const handleClick = (id: string) => {
        onClick(id);
    };
    return (
        <>
            <div className="d-flex m-auto">
                <div className="my-auto mr-1">
                    <ShoppingCartIcon />
                </div>

                <h2>Cart</h2>
            </div>

            {cats.map((cat) => (
                <div key={cat.id} className="cat-item">
                    <CartElementComponent
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
