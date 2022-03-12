import React from "react";
import {
    CardAvatar,
    CardWrapper,
    TitleCard,
    SubtitleCard,
    TitleWrapper,
} from "./styled";

const Card = ({ title, subtitle, src }) => {
    return (
        <>
            <CardWrapper>
                <CardAvatar src={src} />
                <TitleWrapper>
                    <TitleCard>{title}</TitleCard>
                    <SubtitleCard>{subtitle}</SubtitleCard>
                </TitleWrapper>
            </CardWrapper>
        </>
    );
};

export default Card;
