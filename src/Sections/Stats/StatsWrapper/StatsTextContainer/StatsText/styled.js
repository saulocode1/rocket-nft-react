import styled from "styled-components";

export const StatsText = styled.p`
    font-weight: 400;
    font-size: var(--font-1);
    color: var(--text-color);
    /* text-align: left; */
`;

export const StatsLink = styled.a`
    font-weight: 400;
    font-size: var(--font-1);
    color: var(--text-color);
    text-decoration: underline;
    cursor: pointer;
`;

export const StatsTextLink = styled.a`
    font-weight: 400;
    font-size: var(--font-1);
    color: var(--color-logo);
    text-decoration: underline;
    cursor: pointer;
`;

export const TextDiv = styled.div`
    width: 100%;
    max-width: 27.1875rem;
    height: 7.125rem;
`;

export const StyledStatsArticle = styled.div`
    width: 100%;
    max-width: 27.1875rem;
    height: 12.8125rem;
    display: flex;
    flex-direction: column;
    gap: 3.9375rem;
`;
