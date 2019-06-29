import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "./layout";
import SEO from "../seo";
import { PostList } from "components/templates/postList";

const StyledH1 = styled.h1`
    margin-top: 0;
    margin-bottom: 2rem;
    border-bottom: 2px solid hsla(0, 0%, 0%, 0.07);
`;

const CategoryList = ({ location, pageContext, data }) => {
    const { category } = pageContext;
    return (
        <Layout
            location={location}
            title={`"${category}" 관련 글 목록`}
            activeMenu={category}
        >
            <div>
                <SEO title={`${category}`} />

                {/* <StyledH1>"{category}" 관련 글 목록</StyledH1> */}
                <PostList data={data.allMarkdownRemark.edges} />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query CategoryPage($category: String) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
            filter: { fields: { category: { eq: $category } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                        category
                    }
                    excerpt(pruneLength: 300)
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        category
                        cover {
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default CategoryList;
