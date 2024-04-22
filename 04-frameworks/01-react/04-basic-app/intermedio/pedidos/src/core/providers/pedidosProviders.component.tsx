import React, { createContext, useState } from "react";
import { PedidoEntity, LineaPedido, LineaPedidoStatus } from "./pedidos.vm";
import { getMockData } from "@/api";

export const PedidosContext = createContext<any>(null);

export const PedidosProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [pedido, setPedido] = useState<PedidoEntity | null>(null);
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

    const updateImporteTotal = (
        pedido,
        newImporteTotal: number,
        id?: string
    ) => {
        let pedidoUpdated = { ...pedido, importeTotal: newImporteTotal };
        setPedido(pedidoUpdated);
    };

    const updateLineaPedidoImporte = (
        id: string,
        newImporte: number,
        pedido
    ) => {
        console.log("en updateLineaPedidoImporte", id, newImporte);
        console.log(pedido);

        let updatedLineasPedido;
        // setLineaPedido((prevLineasPedido) => {
        //     updatedLineasPedido = prevLineasPedido.map((lineaPedido) => {
        //         if (lineaPedido.id === id) {
        //             return {
        //                 ...lineaPedido,
        //                 importe: newImporte,
        //             };
        //         }
        //         return lineaPedido;
        //     });
        //     return updatedLineasPedido;
        // });

        let lineas = pedido.lineas.map((lineaPedido) => {
            if (lineaPedido.id === id) {
                return {
                    ...lineaPedido,
                    importe: newImporte,
                };
            }
            return lineaPedido;
        });

        console.log("lineas", lineas);

        let pedidoUpdated = { ...pedido, lineas };

        setPedido(pedidoUpdated);
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
                setPedido,
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
