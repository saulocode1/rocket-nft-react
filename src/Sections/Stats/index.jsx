import React from "react";
import StatsWrapper from "./StatsWrapper";
import StatsTextContainer from "./StatsWrapper/StatsTextContainer";
import StyledStatsSection from "./styled";

const StatsSection = () => {
    return (
        <>
            <StyledStatsSection>
                <StatsWrapper />
                <StatsTextContainer/>
            </StyledStatsSection>
        </>
    );
};

export default StatsSection;
