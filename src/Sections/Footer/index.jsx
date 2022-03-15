import React from "react";
import LinksContainer from "./FooterMenu";
import FooterSocial from "./FooterSocial";
import FooterTitleWrapper from "./FooterTitle";

import { StyledFooter } from "./styled";

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <FooterTitleWrapper />
                <LinksContainer/>
                <FooterSocial/>
            </StyledFooter>
        </>
    );
};

export default Footer;
