import React from "react";
import Card from "./PopularCard";

import astronauta1 from "../../../assets/astronauta-1.png";
import astronauta2 from "../../../assets/astronauta-2.png";
import astronauta3 from "../../../assets/astronauta-3.png";
import astronauta4 from "../../../assets/astronauta-4.png";
import StyledGrid from "./styled";

const Grid = () => {
    return (
        <>
            <StyledGrid>
                <Card
                    title="Astrounata 1"
                    subtitle="Mayk Brito"
                    text="1.50 RKT"
                    src={astronauta1}
                />
                <Card
                    title="Astrounata 2"
                    subtitle="João Inácio (Biro)"
                    text="3.75 RKT"
                    src={astronauta2}
                />
                <Card
                    title="Astrounata 3"
                    subtitle="Jakeliny Gracielly"
                    text="2.0 RKT"
                    src={astronauta3}
                />
                <Card
                    title="Astrounata 4"
                    subtitle="Tamires Santos"
                    text="4.30 RKT"
                    src={astronauta4}
                />
            </StyledGrid>
        </>
    );
};

export default Grid;
