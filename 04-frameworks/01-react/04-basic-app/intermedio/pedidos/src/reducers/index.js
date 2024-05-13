const initialState = {
    counter: 0,
    id: "1",
    cliente: "Cliente 1",
    fecha: "04-01-2024",
    importeTotal: 0,
    status: "Pendiente",
    lineas: [
        {
            id: "1",
            status: "Pendiente",
            description: "Description 1",
            title: "Title 1",
            importe: 125,
            check: false,
        },
        {
            id: "2",
            status: "Valido",
            description: "Description 1",
            title: "Title 1",
            importe: 78,
            check: false,
        },
        {
            id: "3",
            status: "Pendiente",
            description: "Description 1",
            title: "Title 1",
            importe: 35,
            check: false,
        },
        {
            id: "4",
            status: "Valido",
            description: "Description 1",
            title: "Title 1",
            importe: 247,
            check: false,
        },
    ],
};

const pedidoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_TOTAL_PRICE":
            return { ...state, importeTotal: action.payload };
        case "UPDATE_STATUS":
            return { ...state, status: action.payload };
        case "UPDATE_PRICE_LINEA":
            return {
                ...state,
                lineas: state.lineas.map((linea) =>
                    linea.id === action.payload.id
                        ? { ...linea, importe: action.payload.importe }
                        : linea
                ),
            };
        case "UPDATE_PRICE_AND_TOTAL": {
            const { id, importe } = action.payload;

            // Actualiza el importe de la línea de pedido
            const updatedLineas = state.lineas.map((linea) =>
                linea.id === id ? { ...linea, importe } : linea
            );

            // Calcula el total
            const total = updatedLineas.reduce(
                (sum, linea) => sum + linea.importe,
                0
            );

            // Devuelve el nuevo estado
            return {
                ...state,
                lineas: updatedLineas,
                importeTotal: total,
            };
        }
        case "UPDATE_STATUS_LINEA": {
            const { id, status } = action.payload;

            // Actualiza el status de la línea de pedido
            const updatedLineas = state.lineas.map((linea) =>
                linea.id === id ? { ...linea, status } : linea
            );

            // Devuelve el nuevo estado
            return {
                ...state,
                lineas: updatedLineas,
            };
        }
        case "UPDATE_CHECK_LINEA": {
            const { id } = action.payload;

            // Actualiza el check de la línea de pedido
            const updatedLineas = state.lineas.map((linea) =>
                linea.id === id
                    ? linea.check
                        ? { ...linea, check: false }
                        : { ...linea, check: true }
                    : linea
            );

            // Devuelve el nuevo estado
            return {
                ...state,
                lineas: updatedLineas,
            };
        }
        case "UPDATE_ALL_LINEAS_STATUS": {
            // Actualiza el status de todas las líneas de pedido a "Valido"
            const updatedLineas = state.lineas.map((linea) =>
                linea.check ? { ...linea, status: "Valido" } : linea
            );
            const todasLasLineasValidas = updatedLineas.every(
                (lineaPedido) => lineaPedido.status === "Valido"
            );
            // Devuelve el nuevo estado
            return todasLasLineasValidas
                ? { ...state, lineas: updatedLineas, status: "Valido" }
                : { ...state, lineas: updatedLineas };
        }

        case "UPDATE_ALL_LINEAS_STATUS_PENDIENTE": {
            // Actualiza el status de todas las líneas de pedido a "Valido"
            const updatedLineas = state.lineas.map((linea) =>
                linea.check ? { ...linea, status: "Pendiente" } : linea
            );
            const todasLasLineasValidas = updatedLineas.every(
                (lineaPedido) => lineaPedido.status === "Valido"
            );
            // Devuelve el nuevo estado
            return !todasLasLineasValidas
                ? { ...state, lineas: updatedLineas, status: "Pendiente" }
                : { ...state, lineas: updatedLineas };
        }

        default:
            return state;
    }
};

export default pedidoReducer;
