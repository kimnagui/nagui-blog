import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "gatsby-image";
import TextEllipsis from "components/atoms/textEllipsis";

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

    small {
        color: #000;
    }
`;

const StyledImg = styled(Image)`
    width: 100px;
    height: 100px;
    max-width: inherit;
    margin-bottom: 0px;
`;

const PostListItem = ({ node, title }) => {
    const isCover = !!node.frontmatter.cover;
    return (
        <StyledLink to={node.fields.slug} cover={isCover ? 1 : 0}>
            <div>
                <h3>
                    <TextEllipsis line={1} color={"black"} text={title} />
                </h3>

                <TextEllipsis line={2} color={"gray"} text={node.excerpt} />

                <small>{node.frontmatter.date}</small>
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

export default PostListItem;
