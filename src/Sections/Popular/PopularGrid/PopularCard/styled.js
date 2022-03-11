import styled from "styled-components";

import ArrowSvg from "../../../../assets/arrow-white.svg";

export const StyledCard = styled.div`
    padding-top: 0.875rem;
    padding-right: 1.6812rem;
    display: flex;
    flex-direction: column;
    max-width: 23.5562rem;
`;

export const TitleCard = styled.h1`
    font-size: var(--font-5);
    color: var(--text-color);
    font-weight: 500;
`;

export const SubtitleCard = styled.h2`
    font-size: var(--font-4);
    color: var(--subtitle-color);
    font-weight: 600;
`;

export const WrapperTitle = styled.div`
    margin-bottom: 2.75rem;
    display: flex;
    justify-content: space-between;
`;

export const WrapperSubtitle = styled.div`
    margin-bottom: 26px;
    display: flex;
    justify-content: space-between;
`;

export const ArrowCard = styled.img.attrs({ src: ArrowSvg })``;

export const TextCard = styled.p`
    font-size: var(--font-4);
    color: var(--color-logo);
    font-weight: 400;
`;

export const CardImage = styled.img.attrs(props => ({ src: props.src }))``;
