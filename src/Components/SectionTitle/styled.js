import styled from "styled-components";

export const TitleSection = styled.h1`
    font-size: ${props => props.fontSize};
    font-weight: 700;
    color: var(--text-color);
`;

export const TitleSpan = styled.span`
    font-size: ${props => props.fontSize};
    font-weight: 700;
    color: var(--color-logo);
`;