import React from "react";
import {
    TitleSection,
    TitleSpan,
} from "../../../Components/SectionTitle/styled";
import { ArrowButton, ArrowImage, TitleWrapper } from "./styled";

const FooterTitleWrapper = () => {
    const scrollToTop = window.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
    return (
        <>
            <TitleWrapper>
                <TitleSection fontSize="var(--font-6)">
                    Rocket
                    <TitleSpan fontSize="var(--font-6)"> NFTs</TitleSpan>
                </TitleSection>
                <FooterButton onClick={scrollToTop} />
            </TitleWrapper>
        </>
    );
};

export const FooterButton = () => {
    return (
        <>
            <ArrowButton className="scroll-Button">
                <ArrowImage />
            </ArrowButton>
        </>
    );
};

export default FooterTitleWrapper;
