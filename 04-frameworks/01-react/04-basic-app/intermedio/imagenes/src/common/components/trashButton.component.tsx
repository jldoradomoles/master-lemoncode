import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

interface TrashButtonProps {
    onClick: () => void;
}

const TrashButton: React.FC<TrashButtonProps> = ({ onClick }) => {
    return (
        <Button onClick={onClick} variant="outlined" startIcon={<DeleteIcon />}>
            Delete
        </Button>
    );
};

export default TrashButton;
