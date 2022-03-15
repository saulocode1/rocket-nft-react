import React from "react";
import { Link, List, ListLink, ListTitle, StyledListWrapper } from "./styled";

const FooterList = ({ title, link1, link2, link3, link4 }) => {
    return (
        <>
            <StyledListWrapper>
                <ListTitle>{title}</ListTitle>
                <List>
                    <Link>
                        <ListLink>{link1}</ListLink>
                    </Link>
                    <Link>
                        <ListLink>{link2}</ListLink>
                    </Link>
                    <Link>
                        <ListLink>{link3}</ListLink>
                    </Link>
                    <Link>
                        <ListLink>{link4}</ListLink>
                    </Link>
                </List>
            </StyledListWrapper>
        </>
    );
};

export default FooterList;
