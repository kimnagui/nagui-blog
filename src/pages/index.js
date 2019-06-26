import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "components/templates/layout";
import { PostList } from "components/templates/postList";
import SEO from "components/seo";

class BlogIndex extends React.Component {
    render() {
        const { data } = this.props;
        const siteTitle = data.site.siteMetadata.title;
        const posts = data.allMarkdownRemark.edges;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="Main"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <PostList data={posts} />
            </Layout>
        );
    }
}

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt(pruneLength: 300)
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        main_category
                        thumbnail
                    }
                }
            }
        }
    }
`;
