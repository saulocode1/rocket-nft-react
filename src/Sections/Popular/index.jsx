import React from "react";
import StyledPopularSection, { TitleSection, TitleSpan } from "./styled";

const PopularSection = () => {
    return (
        <>
            <StyledPopularSection>
                <TitleSection>
                    <TitleSpan>Populares </TitleSpan>
                    da semana
                </TitleSection>
            </StyledPopularSection>
        </>
    );
};

export default PopularSection;
