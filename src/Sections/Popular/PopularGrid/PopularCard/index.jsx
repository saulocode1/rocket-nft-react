import React from "react";
import {
    ArrowCard,
    CardImage,
    StyledCard,
    SubtitleCard,
    TextCard,
    TitleCard,
    WrapperSubtitle,
    WrapperTitle,
} from "./styled";

const Card = ({ title, subtitle, text, src }) => {
    return (
        <>
            <StyledCard>
                <WrapperTitle>
                    <TitleCard>{title}</TitleCard>
                    <ArrowCard />
                </WrapperTitle>
                <WrapperSubtitle>
                    <SubtitleCard>{subtitle}</SubtitleCard>
                    <TextCard>{text}</TextCard>
                </WrapperSubtitle>
                <CardImage src={src} />
            </StyledCard>
        </>
    );
};

export default Card;
