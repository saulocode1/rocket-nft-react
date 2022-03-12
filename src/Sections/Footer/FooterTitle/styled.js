import styled from "styled-components";

import ArrowSvg from "../../../assets/arrow-black.svg";

export const TitleWrapper = styled.div`
    width: 79.25rem;
    max-width: 79.25rem;
    height: 5rem;
    max-height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
    margin-top: 5.125rem;
    margin-bottom: 3.75rem;
`;

export const ArrowButton = styled.button`
    width: 5rem;
    height: 5rem;
    background-color: var(--color-logo);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`;

export const ArrowImage = styled.img.attrs({ src: ArrowSvg })``;
