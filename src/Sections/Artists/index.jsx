import React from "react";
import { TitleSection, TitleSpan } from "../Popular/styled";
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
                <TitleSection>
                    Melhores
                    <TitleSpan> artistas</TitleSpan>
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
