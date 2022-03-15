import React from "react";
import {
    EmailSpan,
    EmailTitle,
    SendButton,
    StyledEmailInput,
    StyledEmailWrapper,
    EmailDiv
} from "./styled";

const EmailWrapper = () => {
    return (
        <>
            <StyledEmailWrapper>
                <EmailTitle>
                    Fique por dentro de
                    <EmailSpan>todas as novidades</EmailSpan>
                </EmailTitle>
                <EmailDiv>
                    <StyledEmailInput />
                    <SendButton>Enviar</SendButton>
                </EmailDiv>
            </StyledEmailWrapper>
        </>
    );
};

export default EmailWrapper;
