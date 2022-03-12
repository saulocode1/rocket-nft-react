import React from "react";
import { StyledArtistGrid } from "./styled";

import artist1 from "../../../assets/artista-1.png";
import artist2 from "../../../assets/artista-2.png";
import artist3 from "../../../assets/artista-3.png";
import artist4 from "../../../assets/artista-4.png";
import artist5 from "../../../assets/artista-5.png";
import artist6 from "../../../assets/artista-6.png";
import Card from "../ArtistCard";

const Grid = () => {
    return (
        <>
            <StyledArtistGrid>
                <Card
                    src={artist1}
                    title="Mayk Brito"
                    subtitle="80 Fotografias"
                />
                <Card
                    src={artist2}
                    title="Jakeliny G."
                    subtitle="99 Fotografias"
                />
                <Card
                    src={artist3}
                    title="João I. (Biro)"
                    subtitle="50 Fotografias"
                />
                <Card
                    src={artist4}
                    title="Tamires Santos"
                    subtitle="43 Fotografias"
                />
                <Card
                    src={artist5}
                    title="Ana Silva"
                    subtitle="28 Fotografias"
                />
                <Card
                    src={artist6}
                    title="Diego F."
                    subtitle="20 Fotografias"
                />
            </StyledArtistGrid>
        </>
    );
};

export default Grid;
