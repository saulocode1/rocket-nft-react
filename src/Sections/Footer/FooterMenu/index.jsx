import React from "react";
import EmailWrapper from "./FooterInput";
import NavWrapper from "./FooterNav";
import { StyledLinksContainer } from "./styled";

const LinksContainer = () => {
    return (
        <>
            <StyledLinksContainer>
                <EmailWrapper />
                <NavWrapper/>
            </StyledLinksContainer>
        </>
    );
};

export default LinksContainer;
