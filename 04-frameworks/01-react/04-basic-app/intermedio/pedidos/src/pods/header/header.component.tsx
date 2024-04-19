import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Pedido } from "@/api/api.model";
import { PedidoEntity } from "@/core/providers/pedidos.vm";
import { PedidosContext } from "@/core/providers/pedidosProviders.component";

const bull = (
    <Box
        component="span"
        sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
        •
    </Box>
);

interface Props {
    pedido: PedidoEntity;
}

export const HeaderComponent: React.FC<Props> = (props) => {
    const { pedido } = props;
    const [member, setMember] = React.useState<PedidoEntity>();

    React.useEffect(() => {
        setMember(pedido);
    }, [pedido]);

    React.useEffect(() => {}, []);

    if (member != undefined) {
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
                                <span className="color-black">{member.id}</span>
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
                                    {member.cliente}
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
                                    {member.fecha}
                                </span>
                            </Typography>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Typography
                            sx={{ mb: 1.5, mr: 5 }}
                            color="text.secondary"
                        >
                            Importe Total
                            <br />
                            <span className="color-black">
                                {member.importeTotal}
                            </span>
                        </Typography>
                        <Typography
                            sx={{ mb: 1.5, mr: 7 }}
                            color="text.secondary"
                        >
                            Estado
                            <br />
                            <span className="color-black">{member.status}</span>
                        </Typography>
                        <CardActions>
                            <Button variant="contained">Enviar</Button>
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        );
    }
};
