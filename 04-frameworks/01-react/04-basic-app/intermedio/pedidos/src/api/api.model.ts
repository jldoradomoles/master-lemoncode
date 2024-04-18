export interface Pedido {
    id: string;
    cliente: string;
    fecha: string;
    importeTotal: number;
    status: PedidoStatus;
    lineas: LineaPedido[];
}

export interface LineaPedido {
    id: string;
    status: LineaPedidoStatus;
    description: string;
    title: string;
    importe: number;
}

export enum LineaPedidoStatus {
    PENDIENTE = "Pendiente",
    VALIDO = "Valido",
}

export enum PedidoStatus {
    PENDIENTE = "Pendiente",
    COMPLETADO = "Completado",
}
