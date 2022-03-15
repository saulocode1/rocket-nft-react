import styled from "styled-components";

export const NavLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

export const NavItem = styled.li`
    color: var(--text-color);
    font-size: var(--font-1);
    list-style: none;
    transition: 150ms ease-in-out;

    &:hover {
        color: var(--color-logo);
        transition: 150ms ease-in-out;
    }
`;

export const NavList = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 3.75rem;
`;
