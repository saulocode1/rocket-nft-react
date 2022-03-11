import React from "react";
import { Image, ImageDiv, Wrapper } from "./HomeImages.styled";
import { FirstTitle, SecondTitle, TextImageDiv } from "./HomeImageText/HomeImageText.styled";
import artist1 from "../../../../assets/avatar-1.png"
import artist2 from "../../../../assets/avatar-2.png"
import artist3 from "../../../../assets/avatar-3.png"
import artist4 from "../../../../assets/avatar-4.png"

const HomeImages = () => {
    // const IconLib = {
        
    //     // artist1: "../../assets/avatar-1.png",
    //     artist3: "assets/avatar-2.png",
    //     artist6: "assets/avatar-3.png",
    //     artist7: "assets/avatar-4.png",
    // };

    const IconMargin = {
        margin1: "1.625rem",
        margin2: "3.5625rem",
        margin3: "4.625rem",
    };

    return (
        <>
            <Wrapper>   
                <ImageDiv>
                    <Image margin={IconMargin.margin3} src={artist4} />
                    <Image margin={IconMargin.margin2} src={artist3} />
                    <Image margin={IconMargin.margin1} src={artist2} />
                    <Image src={artist1} />
                </ImageDiv>
                <TextImageDiv>
                <FirstTitle>+10</FirstTitle>
                <SecondTitle>Artistas selecionados</SecondTitle>
                </TextImageDiv>
            </Wrapper>
        </>
    );
};

export default HomeImages;
