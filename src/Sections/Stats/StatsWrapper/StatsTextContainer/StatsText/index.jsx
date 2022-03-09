import React from "react";
import {
    StatsLink,
    StatsText,
    StatsTextLink,
    StyledStatsArticle,
} from "./styled";

const StatsArticle = ({ text, link }) => {
    return (
        <>
            <StyledStatsArticle>
                <StatsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <StatsTextLink>potenti diam</StatsTextLink>  et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</StatsText>
                <StatsLink>{link}</StatsLink>
            </StyledStatsArticle>
        </>
    );
};

export default StatsArticle;
