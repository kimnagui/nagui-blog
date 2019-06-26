import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { TextEllipsis } from "components/atoms/textEllipsis";

const StyledLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => (props.isImg ? "20px" : "40px")};
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

const StyledImg = styled.img`
    width: 120px;
    height: 120px;
    max-width: inherit;
    margin-bottom: 0px;
`;

export const PostListItem = ({ node, title }) => {
    const isThumbnail = !!node.frontmatter.thumbnail;
    return (
        <StyledLink
            key={node.fields.slug}
            to={node.fields.slug}
            isImg={isThumbnail}
        >
            <div style={{ paddingRight: "10px" }}>
                <StyledH3>{title}</StyledH3>

                <TextEllipsis line={2} color={"gray"} text={node.excerpt} />

                <small style={{ color: "#000" }}>{node.frontmatter.date}</small>
            </div>
            {isThumbnail && (
                <div>
                    <StyledImg src={node.frontmatter.thumbnail} />
                </div>
            )}
        </StyledLink>
    );
};
