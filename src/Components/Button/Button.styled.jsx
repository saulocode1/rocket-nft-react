import styled from "styled-components";

export const ButtonIcon = styled.img.attrs({
    src: "assets/logo_MetaMask.svg",
})`
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
`;

export const ButtonLink = styled.a``;
