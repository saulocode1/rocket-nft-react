import styled from "styled-components";

import Logo from "../../assets/background.png";

const HomeSection = styled.section`
    width: 100vw;
    max-width: 1440px;
    max-height: 62.5rem;
    height: 62.5rem;
    background-image: url(${Logo});
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-inline: auto;
`;

export default HomeSection;
