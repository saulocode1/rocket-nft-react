import React from "react";
import {
    SocialContainer,
    SocialIcon,
    SocialLink,
    SocialWrapper,
    Url,
    UrlLink,
} from "./styled";

import Instagram from "../../../assets/instagram.svg";
import Youtube from "../../../assets/youtube.svg";
import Twitter from "../../../assets/twitter.svg";
import Email from "../../../assets/email.svg";

const FooterSocial = () => {
    return (
        <>
            <SocialContainer>
                <UrlLink href="https://www.rocketseat.com.br/" target="_blank">
                    <Url>www.rocketseat.com.br</Url>
                </UrlLink>
                <SocialWrapper>
                    <SocialLink>
                        <SocialIcon src={Instagram} />
                    </SocialLink>
                    <SocialLink>
                        <SocialIcon src={Youtube} />
                    </SocialLink>
                    <SocialLink>
                        <SocialIcon src={Twitter} />
                    </SocialLink>
                    <SocialLink>
                        <SocialIcon src={Email} />
                    </SocialLink>
                </SocialWrapper>
            </SocialContainer>
        </>
    );
};

export default FooterSocial;
