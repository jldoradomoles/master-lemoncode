import React, { useState } from "react";
import {
    Button,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const TablaComponent: React.FC = () => {
    const pedidoState: any = useSelector((state: any) => state);
    const dispatch = useDispatch();
    const [precio, setPrecio] = useState(0);
    const [lineaId, setLineaId] = useState("");

    const updateImportePedido = () => {
        dispatch({
            type: "UPDATE_PRICE_AND_TOTAL",
            payload: { id: lineaId, importe: precio },
        });
    };

    const handelImporte = (id, importe) => {
        setPrecio(importe);
        setLineaId(id);
    };

    const handleStatusChange = (id) => {
        dispatch({
            type: "UPDATE_CHECK_LINEA",
            payload: { id },
        });
    };

    const updateStatus = (valid: boolean) => {
        valid
            ? dispatch({ type: "UPDATE_ALL_LINEAS_STATUS" })
            : dispatch({ type: "UPDATE_ALL_LINEAS_STATUS_PENDIENTE" });
        // checkStausLineas();
    };

    const checkStausLineas = () => {
        const todasLasLineasValidas = pedidoState.lineas.every(
            (lineaPedido) => lineaPedido.status === "Valido"
        );

        if (todasLasLineasValidas) {
            dispatch({ type: "UPDATE_STATUS", payload: "Validado" });
        } else {
            alert(
                "Aun no estan todos las lineas validadas, no se puede enviar el pedido"
            );
        }
    };

    return (
        <>
            <Button
                sx={{ mr: 3 }}
                variant="contained"
                onClick={() => updateStatus(true)}
            >
                Validar
            </Button>
            <Button variant="outlined" onClick={() => updateStatus(false)}>
                Invalidar
            </Button>
            <br />
            <TextField
                sx={{ mt: 3, mb: 2 }}
                type="number"
                id="filled-basic"
                variant="filled"
                value={precio}
                size="small"
                color="primary"
                onChange={(e) => {
                    setPrecio(Number(e.target.value));
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        updateImportePedido();
                    }
                }}
            />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>id</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell>Descripcion</TableCell>
                        <TableCell>Importe</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {pedidoState.lineas.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell align="left">
                                <Checkbox
                                    checked={item.check}
                                    onChange={() => handleStatusChange(item.id)}
                                />
                            </TableCell>
                            <TableCell align="left">
                                <p
                                    style={{
                                        fontSize: "13px",
                                        margin: "0px",
                                    }}
                                >
                                    {item.status}
                                </p>
                            </TableCell>
                            <TableCell align="left">
                                <p
                                    style={{
                                        fontSize: "13px",
                                        margin: "0px",
                                    }}
                                >
                                    {item.description}
                                </p>
                            </TableCell>
                            <TableCell align="left">
                                <p
                                    style={{
                                        fontSize: "13px",
                                        margin: "0px",
                                    }}
                                >
                                    {item.importe}
                                </p>
                            </TableCell>
                            <TableCell>
                                <button
                                    onClick={() =>
                                        handelImporte(item.id, item.importe)
                                    }
                                >
                                    Editar Precio
                                </button>{" "}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};
