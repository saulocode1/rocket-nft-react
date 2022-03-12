import React from "react";
import EmailWrapper from "./FooterLinks";
import FooterTitleWrapper from "./FooterTitle";

import { StyledFooter } from "./styled";

const Footer = () => {
    return (
        <>
            <StyledFooter>
                <FooterTitleWrapper />
                <EmailWrapper/>
            </StyledFooter>
        </>
    );
};

export default Footer;
