import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

interface CheckButtonProps {
    onClick: () => void;
}

export const CheckBox: React.FC<CheckButtonProps> = ({ onClick }) => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
        />
    );
};
