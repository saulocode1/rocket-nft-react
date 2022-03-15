import styled from "styled-components";
import Logo from "../../assets/logo_MetaMask.svg";

export const ButtonIcon = styled.img.attrs({ src: Logo })`
    margin-right: 0.9375rem;
`;

export const Button = styled.button`
    padding: 0.625rem 1.375rem 0.625rem 0.875rem;
    background-color: var(--button-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    font-size: var(--font-2);
    font-weight: 700;
    cursor: pointer;
    transition: 250ms ease-in-out;

    &:hover {
        box-shadow: 2px 2px 0px 1.5px var(--color-logo);
        transition: 200ms ease-in-out;
    }
`;

export const ButtonLink = styled.a``;
