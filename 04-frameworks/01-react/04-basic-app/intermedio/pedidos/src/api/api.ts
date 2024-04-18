import { Pedido, LineaPedidoStatus, PedidoStatus } from "./api.model";

export function getMockData(): Pedido {
    return {
        id: "1",
        cliente: "Cliente 1",
        fecha: "04-01-2024",
        importeTotal: 0,
        status: PedidoStatus.PENDIENTE,
        lineas: [
            {
                id: "1",
                status: LineaPedidoStatus.PENDIENTE,
                description: "Description 1",
                title: "Title 1",
                importe: 125,
            },
            {
                id: "2",
                status: LineaPedidoStatus.VALIDO,
                description: "Description 1",
                title: "Title 1",
                importe: 78,
            },
            {
                id: "3",
                status: LineaPedidoStatus.PENDIENTE,
                description: "Description 1",
                title: "Title 1",
                importe: 35,
            },
            {
                id: "4",
                status: LineaPedidoStatus.VALIDO,
                description: "Description 1",
                title: "Title 1",
                importe: 247,
            },
        ],
    };
}
