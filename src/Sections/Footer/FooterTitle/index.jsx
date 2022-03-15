import React from "react";
import {
    TitleSection,
    TitleSpan,
} from "../../../Components/SectionTitle/styled";
import { ArrowButton, ArrowImage, TitleWrapper } from "./styled";

const FooterTitleWrapper = () => {
    return (
        <>
            <TitleWrapper>
                <TitleSection fontSize="var(--font-6)">
                    Rocket
                    <TitleSpan fontSize="var(--font-6)"> NFTs</TitleSpan>
                </TitleSection>
                <FooterButton />
            </TitleWrapper>
        </>
    );
};

export const FooterButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <ArrowButton onClick={scrollToTop}>
                <ArrowImage />
            </ArrowButton>
        </>
    );
};

export default FooterTitleWrapper;
