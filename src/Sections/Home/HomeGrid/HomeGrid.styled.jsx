import React from "react";
import { GridDiv, GridImage } from "./HomeGrid";

const GridComponent = () => {
    const ImageLib = [
        "/assets/galeria-1.png",
        "/assets/galeria-2.png",
        "/assets/galeria-3.png",
        "/assets/galeria-4.png",
        "/assets/galeria-5.png",
        "/assets/galeria-6.png",
        "/assets/galeria-7.png",
        "/assets/galeria-8.png",
    ];

    return (
        <>
            <GridDiv>
                {ImageLib.map((item, index) => (
                    <GridImage src={item} />
                ))}
            </GridDiv>
        </>
    );
};

export default GridComponent;
