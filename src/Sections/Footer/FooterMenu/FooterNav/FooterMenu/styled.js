import styled from "styled-components";

export const StyledListWrapper = styled.div`
    height: 12.0625rem;
    max-height: 12.0625rem;
`;

export const ListTitle = styled.h1`
    font-weight: 700;
    font-size: var(--font-4);
    color: var(--text-color);
    margin-bottom: 0.9375rem;
`;

export const ListLink = styled.li`
    font-weight: 400;
    font-size: var(--font-4);
    color: var(--subtitle-color);
    margin-bottom: 0.9375rem;
    transition: 150ms ease-in-out;

    &:hover {
        color: #9C9797;
        transition: 150ms ease-in-out;
    }
`;

export const List = styled.ul`
    list-style: none;
`;

export const Link = styled.a`
    cursor: pointer;
`;
