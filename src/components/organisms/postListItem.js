import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "gatsby-image";
import { TextEllipsis } from "components/atoms/textEllipsis";

const StyledLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => (props.cover ? "20px" : "33px")};

    &:hover {
        text-decoration: none;
    }

    h3 {
        margin: 0;
        margin-bottom: 5px;
        flex: 1 1 auto;
        color: #000;
    }

    div:first-child {
        padding-right: 10px;
    }
`;

const StyledImg = styled(Image)`
    width: 120px;
    height: 120px;
    max-width: inherit;
    margin-bottom: 0px;
`;

export const PostListItem = ({ node, title }) => {
    const isCover = !!node.frontmatter.cover;
    console.log(node);
    return (
        <StyledLink to={node.fields.slug} cover={isCover ? 1 : 0}>
            <div>
                <h3>{title}</h3>

                <TextEllipsis line={2} color={"gray"} text={node.excerpt} />

                <small style={{ color: "#000" }}>{node.frontmatter.date}</small>
            </div>
            {isCover && (
                <div>
                    <StyledImg
                        fixed={node.frontmatter.cover.childImageSharp.fixed}
                    />
                </div>
            )}
        </StyledLink>
    );
};
