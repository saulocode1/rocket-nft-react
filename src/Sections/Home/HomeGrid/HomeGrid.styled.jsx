import React from "react";
import { GridDiv, GridImage } from "./HomeGrid";

import galeria1 from "../../../assets/galeria-1.png";
import galeria2 from "../../../assets/galeria-2.png";
import galeria3 from "../../../assets/galeria-3.png";
import galeria4 from "../../../assets/galeria-4.png";
import galeria5 from "../../../assets/galeria-5.png";
import galeria6 from "../../../assets/galeria-6.png";
import galeria7 from "../../../assets/galeria-7.png";
import galeria8 from "../../../assets/galeria-8.png";

const GridComponent = () => {
    const data = [
        galeria1,
        galeria2,
        galeria3,
        galeria4,
        galeria5,
        galeria6,
        galeria7,
        galeria8,
    ];

    return (
        <>
            <GridDiv>
                {data.map((item, index) => (
                    <GridImage src={item} />
                ))}
            </GridDiv>
        </>
    );
};

export default GridComponent;
