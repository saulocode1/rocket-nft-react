import styled from "styled-components";

const StyledPopularSection = styled.section`
    max-height: 65rem;
    max-width: 90rem;
    display: flex;
    margin-inline: auto;
    margin-bottom: 9.4375rem;

`;

export const TitleSection = styled.h1`
    font-size: var(--font-3);
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 9.875rem;
`;

export const TitleSpan = styled.span`
    font-size: var(--font-3);
    font-weight: 700;
    color: var(--color-logo);
`;

export const PopularContainer = styled.div`
    margin-top: 9.375rem;
    height: 60.0625rem;
    width: 79.125rem;
    margin-inline: auto;
    position: relative;
`;

export const CenterLine = styled.div`
    height: 44.875rem;
    width: 1px;
    background-color: var(--subtitle-color);
    position: absolute;
    bottom: 0px;
    right: 50%;
`;

export default StyledPopularSection;
