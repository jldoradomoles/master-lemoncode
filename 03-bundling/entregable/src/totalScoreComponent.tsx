import React from "react";
import { getAvg } from "./averageService";

export const TotalScoreComponent = () => {
    const [average, setAverage] = React.useState(0);

    React.useEffect(() => {
        const scores = [90, 75, 60, 94, 33];
        setAverage(getAvg(scores));
    }, []);

    return (
        <div>
            <span className="background">Students total score: {average}</span>
        </div>
    );
};
