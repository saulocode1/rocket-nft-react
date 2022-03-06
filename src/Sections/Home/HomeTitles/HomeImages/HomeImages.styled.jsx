import styled from "styled-components";

export const ImageDiv = styled.div`
    width: 10.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.img.attrs(props => ({src: props.src}))`
    width: 5.9375rem;
    position: absolute;
    margin-left: ${(props) => props.margin}
`;