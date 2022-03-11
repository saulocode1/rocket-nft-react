import styled from "styled-components";

const StyledPopularSection = styled.section`
    max-height: 65rem;
    max-width: 90rem;
    display: flex;
    margin-inline: auto;
`;

export const TitleSection = styled.h1`
    font-size: var(--font-3);
    font-weight: 700;
    color: var(--text-color);
    margin-top: 9.375rem;
    margin-bottom: 9.875rem;
`;

export const TitleSpan = styled.span`
    font-size: var(--font-3);
    font-weight: 700;
    color: var(--color-logo);
`;

export default StyledPopularSection;
