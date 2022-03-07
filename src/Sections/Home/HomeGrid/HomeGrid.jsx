import styled from "styled-components";

export const GridImage = styled.img.attrs((props) => ({ src: props.src }))``;

export const GridDiv = styled.div`
    width: 1277px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 3.8125rem;
    column-gap: 1.0625rem;
    margin-inline: auto;
    margin-top: 6.25rem;
`;
