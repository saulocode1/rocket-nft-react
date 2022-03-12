import styled from "styled-components";
import ArrowSvg from "../../assets/arrow-orange.svg";

export const StyledArtistSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80.4375rem;
    margin-inline: auto;
`;

export const SectionText = styled.p`
    font-size: var(--font-4);
    font-weight: 400;
    color: var(--text-color);
`;

export const ArrowIcon = styled.img.attrs({ src: ArrowSvg })``;

export const TextWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 16.25rem;
    max-width: 16.25rem;
    margin-bottom: 9.25rem;
`;
