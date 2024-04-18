import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { CheckBox } from "../common/components/checkbox.componet";

interface CardProps {
    title: string;
    picUrl: string;
    id: string;
    onClick: (id: string) => void;
}

export const ItemCard: React.FC<CardProps> = ({
    title,
    picUrl,
    id,
    onClick,
}) => {
    const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        onClick(id);
    };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={picUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
                <CheckBox
                    id={id}
                    onClick={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleClick(event)
                    }
                />
            </CardActionArea>
        </Card>
    );
};
