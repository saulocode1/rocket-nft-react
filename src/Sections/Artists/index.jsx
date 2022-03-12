import React from "react";
import { TitleSection, TitleSpan } from "../../Components/SectionTitle/styled";
import Grid from "./ArtistGrid";
import {
    ArrowIcon,
    SectionText,
    StyledArtistSection,
    TextWrapper,
} from "./styled";

const ArtistsSection = () => {
    return (
        <>
            <StyledArtistSection>
                <TitleSection fontSize="var(--font-3)">
                    Melhores
                    <TitleSpan fontSize="var(--font-3)"> artistas</TitleSpan>
                </TitleSection>
                <Grid />
                <TextWrapper>
                    <SectionText>Ver todos os artistas</SectionText>
                    <ArrowIcon />
                </TextWrapper>
            </StyledArtistSection>
        </>
    );
};

export default ArtistsSection;
