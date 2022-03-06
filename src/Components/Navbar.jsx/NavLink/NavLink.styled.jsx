import styled from "styled-components";

export const NavLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

export const NavItem = styled.li`
    color: var(--text-color);
    font-size: var(--font-1);
    list-style: none;
`;

export const NavList = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 3.75rem;
`;
