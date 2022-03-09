import React from "react";
import Stats from "./Stats";
import StyledStatsWrapper from "./styled";

const StatsWrapper = () => {
    return (
        <>
            <StyledStatsWrapper>
                <Stats title="100k" subtitle="Artes" />
                <Stats title="200+" subtitle="Vendas" />
                <Stats title="20" subtitle="Artistas" />
            </StyledStatsWrapper>
        </>
    );
};

export default StatsWrapper;
