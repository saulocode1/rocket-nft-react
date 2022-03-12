import styled from "styled-components";

export const CardWrapper = styled.div`
    max-width: 21.875rem;
    width: 21.875rem;
    height: 9.375rem;
    max-height: 9.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5625rem 1.25rem 1.5625rem 2rem;
    background-color: var(--card-color);
    transition: 300ms ease-in-out;
    color: var(--color-logo);

    &:hover {
        background-color: var(--color-logo);
        transition: 300ms ease-in-out;
        color: var(--text-color);
    }
`;

export const CardAvatar = styled.img.attrs((props) => ({ src: props.src }))`
    margin-right: 2.5rem;
`;

export const TitleCard = styled.h1`
    font-size: var(--font-4);
    color: var(--text-color);
    font-weight: 500;
`;

export const SubtitleCard = styled.h2`
    font-size: var(--font-4);
    font-weight: 500;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
`;
