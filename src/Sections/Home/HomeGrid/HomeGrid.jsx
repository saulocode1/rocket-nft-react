import styled from "styled-components";

export const GridImage = styled.img.attrs((props) => ({ src: props.src }))`
    border: 1px solid var(--border-color);
`;

export const GridDiv = styled.div`
    width: 1277px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 3.2rem;
    column-gap: 1.0625rem;
    margin-inline: auto;
    margin-top: 6.25rem;
`;
