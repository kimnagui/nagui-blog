import React from "react";
import styled from "styled-components";
import { AvatarImage } from "../atoms/avatarImage";
import { AvatarName } from "../atoms/avatarName";
import { StaticQuery, graphql, Link } from "gatsby";

const StyledSideHeader = styled.header`
    padding: 20px;

    a {
        color: white;
    }
`;

export const SideHeader = () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        author
                        photo
                    }
                }
            }
        `}
        render={data => {
            const node = data.site.siteMetadata;
            return (
                <StyledSideHeader>
                    <Link to={"/"}>
                        <AvatarImage size="50px" src={node.photo} />
                        <AvatarName ml="10px" size="30px" text={node.author} />
                    </Link>
                </StyledSideHeader>
            );
        }}
    />
);
