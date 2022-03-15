import styled from "styled-components";

export const SocialContainer = styled.div`
    max-width: 79.25rem;
    width: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 5rem;
    margin-left: 5.25rem;
`;

export const Url = styled.p`
    font-weight: 400;
    font-size: var(--font-4);
    color: var(--subtitle-color);
`;

export const UrlLink = styled.a`
    cursor: pointer;
    text-decoration: none;
`;

export const SocialWrapper = styled.div`
    width: 16.875rem;
    max-width: 16.875rem;
    display: flex;
    justify-content: space-between;
`;

export const SocialLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    transition: 150ms ease-in-out;
    padding: 5px;


    &:hover {
        transform: scale(1.15);
        transition: 150ms ease-in-out;
    }
`;

export const SocialIcon = styled.img.attrs((props) => ({src: props.src}))`

`;