import React from "react";
import { SectionImage } from "../../styled";
import StatsArticle from "./StatsText";
import { StyledStatsTextContainer, StyledStatsTextWrapper } from "./styled";

const StatsTextContainer = () => {
    return (
        <>
            <StyledStatsTextContainer>
                <StyledStatsTextWrapper>
                    <StatsArticle link="Lorem ipsum" />
                    <StatsArticle link="Lorem ipsum" />
                </StyledStatsTextWrapper>
                <SectionImage></SectionImage>
            </StyledStatsTextContainer>
        </>
    );
};

export default StatsTextContainer;
