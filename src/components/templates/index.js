import React from "react";
import { graphql } from "gatsby";

import Layout from "components/templates/layout";
import { PostList } from "components/templates/postList";
import SEO from "components/seo";

class BlogIndex extends React.Component {
    render() {
        const { data, location, pageContext } = this.props;
        const siteTitle = data.site.siteMetadata.title;
        const posts = data.allMarkdownRemark.edges;

        return (
            <Layout location={location} title={siteTitle}>
                <SEO
                    title="Main"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <PostList data={posts} page={pageContext} path={"/"} />
            </Layout>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
    query($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    excerpt(pruneLength: 300)
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
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
