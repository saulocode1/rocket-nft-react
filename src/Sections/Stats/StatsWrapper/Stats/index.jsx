import React from "react";
import { StatsDiv, StatsSubtitle, StatsTitle } from "./styled";

const Stats = ({title, subtitle}) => {
    return (
        <>
            <StatsDiv>
                <StatsTitle>{title}</StatsTitle>
                <StatsSubtitle>{subtitle}</StatsSubtitle>
            </StatsDiv>
        </>
    )
}

export default Stats;