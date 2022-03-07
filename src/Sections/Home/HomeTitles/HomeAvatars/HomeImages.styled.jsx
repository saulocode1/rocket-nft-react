import styled from "styled-components";

export const ImageDiv = styled.div`
    height: 5.4375rem;
    width: 10.625rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Image = styled.img.attrs((props) => ({ src: props.src }))`
    width: auto;
    position: absolute;
    margin-left: ${(props) => props.margin};
`;

export const Wrapper = styled.div`
    display: flex;
`;
