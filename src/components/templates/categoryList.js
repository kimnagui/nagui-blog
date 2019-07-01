import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import SEO from "../seo";
import { PostList } from "components/templates/postList";

const CategoryList = ({ location, pageContext, data }) => {
    const category = pageContext.category;

    return (
        <Layout
            location={location}
            title={`"${category}" 관련 글 목록`}
            activeMenu={category}
        >
            <div>
                <SEO title={`"${category}" 관련 글 목록`} />

                <PostList
                    data={data.allMarkdownRemark.edges}
                    page={pageContext}
                    path={`/category/${category}`}
                    pageListSize={data.site.siteMetadata.pageListSize}
                />
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!, $category: String) {
        site {
            siteMetadata {
                pageListSize
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { category: { eq: $category } } }
            skip: $skip
            limit: $limit
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 300)
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        category
                        tags
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
