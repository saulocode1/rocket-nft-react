import React from "react";
import HomeImages from "./HomeAvatars/HomeImages";
import HomeTextComponent from "./HomeText/HomeText";
import { WrapperTextAndAvatar } from "./HomeText/HomeText.styled";
import HomeTitlesDiv, {
    ColorText,
    MainTitle,
    MainTitleDiv,
    TitleBadge,
} from "./HomeTitles.styled";

const HomeTitlesComponent = () => {
    return (
        <>
            <HomeTitlesDiv>
                <WrapperTextAndAvatar>
                    <HomeTextComponent />
                    <HomeImages />
                </WrapperTextAndAvatar>
                <MainTitleDiv>
                    <MainTitle>
                        Descubra a verdadeira arte digital e colecione diversas
                        <ColorText>NFTs</ColorText>
                    </MainTitle>
                </MainTitleDiv>
                    <TitleBadge/>
            </HomeTitlesDiv>
        </>
    );
};

export default HomeTitlesComponent;
