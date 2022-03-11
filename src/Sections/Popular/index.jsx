import React from "react";
import Grid from "./PopularGrid";
import StyledPopularSection, {
    CenterLine,
    PopularContainer,
    TitleSection,
    TitleSpan,
} from "./styled";

const PopularSection = () => {
    return (
        <>
            <StyledPopularSection>
                <PopularContainer>
                    <TitleSection>
                        <TitleSpan>Populares </TitleSpan>
                        da semana
                    </TitleSection>
                    <Grid />
                    <CenterLine />
                </PopularContainer>
            </StyledPopularSection>
        </>
    );
};

export default PopularSection;
