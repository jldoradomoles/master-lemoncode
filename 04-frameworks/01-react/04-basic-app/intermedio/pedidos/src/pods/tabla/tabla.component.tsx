import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { LineaPedido, PedidoEntity } from "@/core/providers/pedidos.vm";
import { Description } from "@mui/icons-material";

interface Props {
    pedido: PedidoEntity;
}

const columns: GridColDef[] = [
    { field: "id", headerName: "id", width: 130 },
    { field: "status", headerName: "Estado", width: 130 },
    { field: "description", headerName: "Descripción", width: 130 },
    {
        field: "importe",
        headerName: "Importe",
        type: "number",
        width: 90,
    },
    // {
    //     field: "fullName",
    //     headerName: "Full name",
    //     description: "This column has a value getter and is not sortable.",
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (value, row) =>
    //         `${row.firstName || ""} ${row.lastName || ""}`,
    // },
];

const rows = [];

export const TablaComponent: React.FC<Props> = (props) => {
    const { pedido } = props;
    const [member, setMember] = React.useState<PedidoEntity>();

    React.useEffect(() => {
        setMember(pedido);
    }, [pedido]);

    if (member != undefined) {
        console.log(member.lineas);
        member.lineas.map((linea) => {
            rows.push({
                id: linea.id,
                status: linea.status,
                description: linea.description,
                importe: linea.importe,
            });
        });

        return (
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        );
    }
};
