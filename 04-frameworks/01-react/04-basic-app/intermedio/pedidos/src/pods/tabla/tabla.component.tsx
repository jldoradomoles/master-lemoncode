import React, { useRef, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { PedidoEntity } from "@/core/providers/pedidos.vm";
import { PedidosContext } from "@/core/providers/pedidosProviders.component";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
} from "@mui/material";

interface Props {
    pedido: PedidoEntity;
}

export const TablaComponent: React.FC<Props> = (props) => {
    const { pedido } = props;
    const [member, setMember] = React.useState<PedidoEntity>();
    const { setPedido } = React.useContext(PedidosContext);
    const [precio, setPrecio] = useState(0);
    const [lineaId, setLineaId] = useState("");

    React.useEffect(() => {
        setMember(pedido);
    }, [pedido]);

    const updateImportePedido = (lineaid, newImporte: number) => {
        let lineas = member.lineas.map((lineaPedido) => {
            if (lineaPedido.id === lineaid) {
                return {
                    ...lineaPedido,
                    importe: newImporte,
                };
            }
            return lineaPedido;
        });
        setMember({ ...member, lineas });
        setPedido({ ...member, lineas });
    };

    if (member != undefined) {
        const handelImporte = (id, importe) => {
            console.log("en handelImporte");
            setPrecio(importe);
            setLineaId(id);
        };

        return (
            <>
                <TextField
                    style={{ width: "100%" }}
                    type="number"
                    id="outlined-basic"
                    variant="outlined"
                    value={precio}
                    size="small"
                    color="primary"
                    onChange={(e) => {
                        setPrecio(Number(e.target.value));
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            updateImportePedido(lineaId, precio);
                        }
                    }}
                />
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Descripcion</TableCell>
                            <TableCell>Importe</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {member.lineas.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell align="left">
                                    <p
                                        style={{
                                            fontSize: "13px",
                                            margin: "0px",
                                        }}
                                    >
                                        {item.id}
                                    </p>
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
    }
};
