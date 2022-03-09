import React from "react";
import { SectionImage } from "../../styled";
import StatsArticle from "./StatsText";
import { StyledStatsTextContainer, StyledStatsTextWrapper } from "./styled";

const StatsTextContainer = () => {
    return (
        <>
            <StyledStatsTextContainer>
                <StyledStatsTextWrapper>
                    <StatsArticle
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id potenti diam et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper."
                        link="Lorem ipsum"
                    />
                    <StatsArticle
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id potenti diam et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper."
                        link="Lorem ipsum"
                    />
                </StyledStatsTextWrapper>
                <SectionImage></SectionImage>
            </StyledStatsTextContainer>
        </>
    );
};

export default StatsTextContainer;
