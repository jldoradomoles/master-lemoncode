import React from "react";

interface CartItem {
    id: number;
    name: string;
    price: number;
}

interface CartProps {
    items: CartItem[];
}

const CartComponent: React.FC<CartProps> = ({ items }) => {
    return (
        <div>
            <h2>Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartComponent;
