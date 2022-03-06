import React from "react";
import HomeImages from "./HomeImages/HomeImages";
import HomeTextComponent from "./HomeText/HomeText";
import HomeTitlesDiv from "./HomeTitles.styled";

const HomeTitlesComponent = () => {
    return (
        <>
            <HomeTitlesDiv>
                <HomeTextComponent />
                <HomeImages/>
            </HomeTitlesDiv>
        </>
    );
};

export default HomeTitlesComponent;
