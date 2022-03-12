import styled from "styled-components";

export const EmailTitle = styled.h1`
    font-size: var(--font-5);
    color: var(--text-color);
    font-weight: 500;
`;

export const EmailSpan = styled.h1`
    font-size: var(--font-5);
    color: var(--color-logo);
    font-weight: 500;
    display: block;
`;

export const StyledEmailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5625rem;
    padding: 4.1875rem 3.875rem 5.125rem 5rem;
    border: 1px solid var(--subtitle-color);
    border-left: none;
    width: 34rem;
    max-width: 34rem;
`;

export const StyledEmailInput = styled.input.attrs({
    placeholder: "nft@rocketseat.com.br",
})`
    background-color: var(--color-input);
    border: none;
    height: 4.125rem;
    width: 17.5rem;
    padding-left: 1.25rem;
    font-size: var(--font-4);
    color: var(--text-color);
    outline: none;
    transition: 200ms ease-in-out;

    &:focus {
        box-shadow: 0px 0px 0px 1px var(--color-logo);
        transition: 200ms ease-in-out;
    }
`;

export const SendButton = styled.button`
    height: 4.125rem;
    width: 7.625rem;
    background-color: var(--text-color);
    border: none;
    font-size: var(--font-4);
    font-weight: 700;
    transition: 250ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: var(--color-logo);
        transition: 150ms ease-in-out;
    }
`;

export const EmailDiv = styled.div`
    width: 25.125rem;
    display: flex;
`;
