import React from "react";
import HomeImages from "./HomeAvatars/HomeImages";
import HomeTextComponent from "./HomeText/HomeText";
import { WrapperTextAndAvatar } from "./HomeText/HomeText.styled";
import HomeTitlesDiv from "./HomeTitles.styled";

const HomeTitlesComponent = () => {
    return (
        <>
            <HomeTitlesDiv>
                <WrapperTextAndAvatar>
                    <HomeTextComponent />
                    <HomeImages />
                </WrapperTextAndAvatar>
            </HomeTitlesDiv>
        </>
    );
};

export default HomeTitlesComponent;
