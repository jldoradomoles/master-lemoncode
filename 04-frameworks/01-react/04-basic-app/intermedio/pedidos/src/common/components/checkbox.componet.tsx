import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { CatsContext } from "@/core/providers/catsProvider.component";

interface CheckButtonProps {
    onClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
}

export const CheckBox: React.FC<CheckButtonProps> = ({ onClick, id }) => {
    const [checked, setChecked] = React.useState(false);
    const { cats } = React.useContext(CatsContext);

    React.useEffect(() => {
        cats.find((cat) => cat.id === id)
            ? setChecked(true)
            : setChecked(false);
    }, [cats, id]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onClick(event);
        event.target.checked ? setChecked(true) : setChecked(false);
    };

    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
        />
    );
};
