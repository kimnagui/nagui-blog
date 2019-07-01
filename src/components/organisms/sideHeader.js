import React, { useState } from "react";
import styled from "styled-components";
import { Circle } from "../atoms/circle";
import { AvatarName } from "../atoms/avatarName";
import ClickPopup from "../atoms/clickPopup";
import { StaticQuery, graphql, Link } from "gatsby";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const StyledLink = styled(Link)`
    display: block;
    color: white;

    &:hover {
        text-decoration: none;
    }
`;

const StyledDiv = styled.div`
    position: relative;
    display: inline-block;
`;

const StyledSideHeader = styled.header`
    padding: 20px;
    font-size: 13px;
`;

const StyledSpan = styled.span`
    vertical-align: middle;
    color: gray;

    svg {
        vertical-align: bottom;
    }

    &:hover {
        cursor: pointer;
        color: white;
    }
`;

export const SideHeader = () => {
    const [bioOpen, setBioOpen] = useState(false);
    return (
        <StaticQuery
            query={graphql`
                query {
                    site {
                        siteMetadata {
                            title
                            authorFullName
                        }
                    }
                }
            `}
            render={data => {
                const node = data.site.siteMetadata;

                return (
                    <StyledSideHeader>
                        <StyledLink to={"/"}>
                            {/* <AvatarImage size="50px" src={node.photo} /> */}
                            <AvatarName
                                ml="10px"
                                size="30px"
                                text={node.title}
                            />
                        </StyledLink>
                        <StyledDiv>
                            <StyledSpan onClick={() => setBioOpen(true)}>
                                <Circle
                                    display={"inline-block"}
                                    size={"13"}
                                    color={"#49c39e"}
                                />
                                {node.authorFullName}
                                <KeyboardArrowDownIcon />
                            </StyledSpan>
                            <ClickPopup
                                open={bioOpen}
                                close={() => setBioOpen(false)}
                            >
                                <div>
                                    <div>
                                        asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
                                    </div>
                                    <div>asdfasdfasdf</div>
                                    <div>asdfasdfasdf</div>
                                    <div>asdfasdfasdf</div>
                                    <div>asdfasdfasdf</div>
                                    <div>asdfasdfasdf</div>
                                    <div>asdfasdfasdf</div>
                                </div>
                            </ClickPopup>
                        </StyledDiv>
                    </StyledSideHeader>
                );
            }}
        />
    );
};
