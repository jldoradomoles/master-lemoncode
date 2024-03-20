import React from "react";
import { getAvg } from "./averageService";
import "./averageComponent.scss";

export const AverageComponent = () => {
    const [average, setAverage] = React.useState(0);

    React.useEffect(() => {
        const scores = [90, 75, 60, 94, 33];
        setAverage(getAvg(scores));
    }, []);

    return (
        <div>
            <span className="background">Students avergae: {average}</span>
        </div>
    );
};
