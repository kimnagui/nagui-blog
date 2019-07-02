import React, { useState } from "react";
import styled from "styled-components";
import { Circle } from "../atoms/circle";
import Bio from "./bio";
import ClickPopup from "../atoms/clickPopup";
import { StaticQuery, graphql, Link } from "gatsby";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const StyledDiv = styled.div`
    position: relative;
    display: inline-block;
`;

const StyledSideHeader = styled.header`
    padding: 20px;
    font-size: 13px;
`;

const Author = styled.span`
    vertical-align: middle;
    color: ${props => (props.changeColor ? "#fff" : "gray")};

    svg {
        vertical-align: bottom;
    }

    &:hover {
        cursor: pointer;
        color: white;
    }
`;

const BlogTitle = styled(Link)`
    display: block;
    color: white;
    font-weight: bold;
    margin-bottom: 0;
    margin-left: 10px;
    font-size: 30px;

    &:hover {
        text-decoration: none;
    }
`;

const SideHeader = () => {
    const [bioOpen, setBioOpen] = useState(false);
    return (
        <StaticQuery
            query={query}
            render={data => {
                const node = data.site.siteMetadata;
                return (
                    <StyledSideHeader>
                        <BlogTitle to={"/"}>{node.title}</BlogTitle>
                        <StyledDiv>
                            <Author
                                onClick={() => setBioOpen(true)}
                                changeColor={bioOpen}
                            >
                                <Circle
                                    display={"inline-block"}
                                    size={"13"}
                                    color={"#49c39e"}
                                />
                                {node.authorFullName}
                                <KeyboardArrowDownIcon />
                            </Author>
                            <ClickPopup
                                open={bioOpen}
                                close={() => setBioOpen(false)}
                            >
                                <Bio />
                            </ClickPopup>
                        </StyledDiv>
                    </StyledSideHeader>
                );
            }}
        />
    );
};

const query = graphql`
    query {
        site {
            siteMetadata {
                title
                authorFullName
            }
        }
    }
`;

export default SideHeader;
