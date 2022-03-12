import React from "react";
import { TitleSection, TitleSpan } from "../../Components/SectionTitle/styled";
import Grid from "./PopularGrid";
import StyledPopularSection, { CenterLine, PopularContainer } from "./styled";

const PopularSection = () => {
    return (
        <>
            <StyledPopularSection>
                <PopularContainer>
                    <TitleSection fontSize="var(--font-3)">
                        <TitleSpan fontSize="var(--font-3)">
                            Populares{" "}
                        </TitleSpan>
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
