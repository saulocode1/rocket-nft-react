import React from "react";
import LinksContainer from "./FooterMenu";
import FooterTitleWrapper from "./FooterTitle";

import { StyledFooter } from "./styled";

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <FooterTitleWrapper />
                <LinksContainer/>
            </StyledFooter>
        </>
    );
};

export default Footer;
