import React, { createContext, useState } from "react";
import { PedidoEntity, LineaPedido, LineaPedidoStatus } from "./pedidos.vm";

export const PedidosContext = createContext<any>(null);

export const PedidosProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [pedido, setPedidos] = useState<PedidoEntity | null>(null);
    const [lineasPedido, setLineaPedido] = useState<LineaPedido[]>([]);

    const updatePedidoStatus = (id: string, newStatus: string) => {
        let pedidoUpdated = { ...pedido, status: newStatus };
        // setPedidos((prevPedidos) => {
        //     if (prevPedidos) {
        //         const updatedPedidos = prevPedidos.map((pedido) => {
        //             if (pedido.id === id) {
        //                 return {
        //                     ...pedido,
        //                     status: newStatus,
        //                 };
        //             }
        //             return pedido;
        //         });
        //         return updatedPedidos;
        //     }
        //     return prevPedidos;
        // });
    };

    const updateImporteTotal = (id: string, newImporteTotal: number) => {
        let pedidoUpdated = { ...pedido, status: newImporteTotal };
    };

    const updateLineaPedidoImporte = (id: string, newImporte: number) => {
        setLineaPedido((prevLineasPedido) => {
            const updatedLineasPedido = prevLineasPedido.map((lineaPedido) => {
                if (lineaPedido.id === id) {
                    return {
                        ...lineaPedido,
                        importe: newImporte,
                    };
                }
                return lineaPedido;
            });
            return updatedLineasPedido;
        });
    };

    const updateLineaPedidoStatus = (
        id: string,
        newStatus: LineaPedidoStatus
    ) => {
        setLineaPedido((prevLineasPedido) => {
            const updatedLineasPedido = prevLineasPedido.map((lineaPedido) => {
                if (lineaPedido.id === id) {
                    return {
                        ...lineaPedido,
                        status: newStatus,
                    };
                }
                return lineaPedido;
            });
            return updatedLineasPedido;
        });
    };

    return (
        <PedidosContext.Provider
            value={{
                pedido,
                lineasPedido,
                updatePedidoStatus,
                updateImporteTotal,
                updateLineaPedidoImporte,
                updateLineaPedidoStatus,
            }}
        >
            {children}
        </PedidosContext.Provider>
    );
};
