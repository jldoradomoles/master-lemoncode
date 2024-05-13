import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useDispatch, useSelector } from "react-redux";

export const HeaderComponent: React.FC = () => {
    const pedidoState: any = useSelector((state: any) => state);
    const dispatch = useDispatch();

    React.useEffect(() => {
        let totalPrecio = 0;
        pedidoState.lineas.forEach((lineaPedido) => {
            totalPrecio += lineaPedido.importe;
        });
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: totalPrecio });
    }, []);

    const enviar = () => {
        const todasLasLineasValidas = pedidoState.lineas.every(
            (lineaPedido) => lineaPedido.status === "Valido"
        );
        if (todasLasLineasValidas) {
            dispatch({ type: "UPDATE_STATUS", payload: "Enviado" });
        } else {
            alert(
                "No se puede enviar el pedido, hay lineas pendientes de validar"
            );
        }
    };

    return (
        <Card sx={{ mb: 5, minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Pedido a Proveedor
                </Typography>
                <div className="d-flex">
                    <div className="">
                        <Typography
                            sx={{ mb: 1.5, mr: 5 }}
                            color="text.secondary"
                        >
                            Pedido
                            <br />
                            <span className="color-black">
                                {pedidoState.id}
                            </span>
                        </Typography>
                    </div>
                    <div className="">
                        <Typography
                            sx={{ mb: 1.5, mr: 5 }}
                            color="text.secondary"
                        >
                            Proveedor
                            <br />
                            <span className="color-black">
                                {pedidoState.cliente}
                            </span>
                        </Typography>
                    </div>
                    <div className="">
                        <Typography
                            sx={{ mb: 1.5, mr: 5 }}
                            color="text.secondary"
                        >
                            Fecha
                            <CalendarMonthIcon sx={{ ml: 1 }} />
                            <br />
                            <span className="color-black">
                                {pedidoState.fecha}
                            </span>
                        </Typography>
                    </div>
                </div>
                <div className="d-flex">
                    <Typography sx={{ mb: 1.5, mr: 5 }} color="text.secondary">
                        Importe Total
                        <br />
                        <span className="color-black">
                            {pedidoState.importeTotal}
                        </span>
                    </Typography>
                    <Typography sx={{ mb: 1.5, mr: 7 }} color="text.secondary">
                        Estado
                        <br />
                        <span className="color-black">
                            {pedidoState.status}
                        </span>
                    </Typography>
                    <CardActions>
                        <Button onClick={enviar} variant="contained">
                            Enviar
                        </Button>
                    </CardActions>
                </div>
            </CardContent>
        </Card>
    );
};
