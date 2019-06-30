import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "gatsby-image";
import { TextEllipsis } from "components/atoms/textEllipsis";

const StyledLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => (props.cover == "true" ? "20px" : "33px")};
    &:hover {
        text-decoration: none;
    }
`;

const StyledH3 = styled.h3`
    margin: 0;
    margin-bottom: 5px;
    flex: 1 1 auto;
    color: #000;
`;

const StyledImg = styled(Image)`
    width: 120px;
    height: 120px;
    max-width: inherit;
    margin-bottom: 0px;
`;

export const PostListItem = ({ node, title }) => {
    const isCover = !!node.frontmatter.cover;
    return (
        <StyledLink to={node.fields.slug} cover={isCover.toString()}>
            <div style={{ paddingRight: "10px" }}>
                <StyledH3>{title}</StyledH3>

                <TextEllipsis line={2} color={"gray"} text={node.excerpt} />

                <small style={{ color: "#000" }}>{node.frontmatter.date}</small>
            </div>
            {isCover && (
                <div>
                    <StyledImg
                        fluid={node.frontmatter.cover.childImageSharp.fluid}
                    />
                </div>
            )}
        </StyledLink>
    );
};
