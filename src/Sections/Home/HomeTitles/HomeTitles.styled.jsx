import styled from "styled-components";

const HomeTitlesDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 79.8125rem;
    height: 15.375rem;
    max-height: 15.375rem;
    max-width: 79.8125rem;
    margin-top: 12.5rem;
    margin-inline: auto;
    /* border: 1px solid white; */
`;

export const MainTitle = styled.h1`
    font-size: var(--font-3);
    color: var(--text-color);
    font-weight: 700;
`;

export const MainTitleDiv = styled.div`
    width: 37.25rem;
    max-width: 37.25rem;
`;

export const ColorText = styled.span`
    color: var(--color-logo);
    display: block;
`;

export const TitleBadge = styled.img.attrs({ src: "assets/badge.svg" })`
    height: auto;
    width: auto;
`;

export default HomeTitlesDiv;
