import styled from "styled-components";

import Banner from "../../assets/banner.png"

const StyledStatsSection = styled.section`
    height: 41.25rem;
    max-height: 41.25rem;
    border-bottom: 1px solid var(--subtitle-color);
    display: flex;
    justify-content: center;
`;

export const SectionImage = styled.img.attrs({ src: Banner })`
    height: 300px;

`;

export default StyledStatsSection;
