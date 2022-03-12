import React from "react";
import { TitleSection, TitleSpan } from "../Popular/styled";
import Grid from "./ArtistGrid";
import { StyledArtistSection } from "./styled";

const ArtistsSection = () => {
    return (
        <>
            <StyledArtistSection>
                <TitleSection>
                    Melhores
                    <TitleSpan> artistas</TitleSpan>
                </TitleSection>
                <Grid/>
            </StyledArtistSection>
        </>
    );
};

export default ArtistsSection;
